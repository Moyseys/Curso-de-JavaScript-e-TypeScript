import styled from 'styled-components'

import { secondColor, tertiaryColor } from '../../config/colors'

export const Paragrafo = styled.p`
    font-size: 80px;
    background-color: ${secondColor};
`
export const Form = styled.form`
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;

    input {
        padding: 10px;
        font-size: 18px;
        color: #fff;
        border-radius: 5px;
        background: transparent;
        border: 1px solid ${secondColor};

        &:focus{
            border: 1px solid ${tertiaryColor};
        }
    }
    
`