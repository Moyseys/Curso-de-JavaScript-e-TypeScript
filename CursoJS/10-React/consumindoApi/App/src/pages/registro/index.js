import React, { useState } from "react"

import {Conteiner} from '../../styles/globalStyles'
import { Form } from './styled'

import validator from  'validator'
import axios from '../../service/axios'
import history from '../../service/history'
import {get} from 'lodash'
import {toast} from 'react-toastify'

export default function Login(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        let formErrors = false

        if(nome.length < 3 || nome.length > 255){
            formErrors = true
            toast.error('O campo nome deve ter pelo menos 3 caracteres e no maximo 255')
        }

        if(!validator.isEmail(email)){
            formErrors = true
            toast.error('Email Inválido')
        }
        
        if(password.length < 6 || password.length > 50){
            formErrors = true
            toast.error('O campo password deve ter pelo menos 6 caracteres e no maximo 50')
        }

        if(formErrors) return

        try{
            await axios.post('/users', {
                nome,
                email,
                password
            })

            toast.success('Cadastro bem sucedido')
            history.push('/login')
        }catch(e){
            const errors =  get(e, 'response.data.errors', [])
            
            errors.forEach(el => {
               toast.error(el) 
            });
        }
    }

    return (
        <Conteiner>
            <Form onSubmit={handleSubmit}>
                <h1>Faça seu registro</h1>
                 <div className="row">
                    <label htmlFor="nome">Nome: </label>
                    <input 
                    id="nome" 
                    type="text" 
                    placeholder="Nome"
                    value={nome}
                    onChange={(e => setNome(e.target.value))}
                    />
                 </div>
                 <div className="row">
                    <label htmlFor="email">Email: </label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                 </div>
                 <div className="row">
                    <label htmlFor="password">Password: </label>
                    <input 
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                 </div>
                 <button type="submit">Enviar</button>
            </Form>
        </Conteiner>
    )
}