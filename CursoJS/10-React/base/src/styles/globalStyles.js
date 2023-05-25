import { createGlobalStyle, styled } from 'styled-components'
import { primaryColor } from '../config/colors'


export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        display: border-box;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }

    html,body,#root{
       height: 100%;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`

export const Conteiner = styled.section`
    max-width: 70%;
    background-color: ${primaryColor};
    padding: 20px;
    margin: 30px auto;
    border-radius: 10px;
    border: 3px solid #000;
` 
