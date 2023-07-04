import React, { useState } from "react"

import { get } from 'lodash'
import PropTypes from 'prop-types'

import { Conteiner } from '../../styles/globalStyles'
import { Form } from './styled'

export default function Fotos({ match }) {
    const id = get(match, 'params.id', false)

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Conteiner>
            <h1>{id ? ('Editando aluno') : ('Criando aluno')}</h1>

            <Form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
                <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Idade" />
                <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Peso" />
                <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Altura" />

                <button type="submit">Enviar</button>
            </Form>
        </Conteiner>
    )
}

Fotos.protoTypes = {
    match: PropTypes.shape({}).isRequired
}