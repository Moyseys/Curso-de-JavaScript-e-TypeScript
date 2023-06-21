import React, { useState } from "react"

import {Conteiner} from '../../styles/globalStyles'
import { Form } from "./styled"

import validator from  'validator'
import axios from '../../service/axios'
import history from '../../service/history'
import {get} from 'lodash'
import {toast} from 'react-toastify'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        let formErrors = false

        if(!validator.isEmail(email)){
            formErrors = true
            toast.error('Email inválido')
        }

        if(password.length < 6 || password.length > 50){
            formErrors = true
            toast.error('O campo password deve ter pelo menos 6 caracteres e no maximo 50')
        }

        if(formErrors) return
    }

    return (
        <Conteiner>
            <h1>Login</h1>

            <Form onSubmit={e => handleSubmit(e)}>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                />

                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                type="text"
                />

                <button type="submit">Enviar</button>
            </Form>
        </Conteiner>
    )
}