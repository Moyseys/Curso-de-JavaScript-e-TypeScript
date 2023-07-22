import { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export const Redirect = () => {
    const [time, setTime] = useState(3)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1)
        }, 1000);
 
        if(time <= 0) navigate('/', {
            state: `Here is my state ${Math.random()}`
        })
        return clearTimeout(0)
    }, [time])

    return (
        <div>
            <h1>
                Você será redirecionado em { time }
            </h1>
        </div>
    )
}