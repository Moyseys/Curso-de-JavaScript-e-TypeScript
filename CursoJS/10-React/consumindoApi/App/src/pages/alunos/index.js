import React, { useEffect, useState}from "react"
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { get } from 'lodash'

import axios from '../../service/axios'
import { Link } from 'react-router-dom'

import {Conteiner} from '../../styles/globalStyles'
import { AlunosContainer, ProfilePicture} from "./styled"

export default function Aluno(){
    const [alunos, setState] = useState([])

    useEffect(() => {
        async function getAlunos(){
            const response = await axios.get('/alunos')
            console.log(response.data);
            setState(response.data)
        }

        getAlunos()
    },[])


    return (
        <Conteiner>
            <AlunosContainer>
                {alunos.map((aluno) => (
                    <div key={String(aluno.id)}>
                        <img src={aluno?.Fotos[0]?.url || ''} />
                        <ProfilePicture>
                            {
                                get(alunos, 'Fotos[0].url', false) ? (
                                    <img src={aluno.Fotos[0].url} />
                                ) : (
                                    <FaUserCircle></FaUserCircle>
                                )
                            }
                        </ProfilePicture>
                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>
                        <Link to={`aluno/${aluno.id}/edit`}>
                            <FaEdit size={18}/>
                        </Link>
                        <Link to={`aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={18}/>
                        </Link>
                    </div>
                ))}
            </AlunosContainer>
        </Conteiner>
    )
}