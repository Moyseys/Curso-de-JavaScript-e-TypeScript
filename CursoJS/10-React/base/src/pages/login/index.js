import React from "react"
import { Title, Paragrafo } from './styled'
import {Conteiner} from '../../styles/globalStyles'
import axios from "../../service/axios";

import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify';

import * as actions from '../../store/modules/example/actions'

export default function Login(){
    toast.success('oie')
    toast.error('oie')
    React.useEffect(() => {
        console.log('montei');
        async function getData (){
            const response = await axios.get('/users')
            const { data } = response
            console.log(data);
        }

        getData()
    }, [])

    const dispatch = useDispatch()

    function handleClick (e) {
        dispatch(actions.btnClikedRequest())
     }

    return (
        <Conteiner>
            <Title>
                 Login
            </Title>
            <Paragrafo> Lorem ipsum dolir sitamet. </Paragrafo>
            <button onClick={handleClick}>Enviar</button>
        </Conteiner>
    )
}