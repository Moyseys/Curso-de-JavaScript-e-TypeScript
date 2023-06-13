import React from 'react'
import {Link} from 'react-router-dom'
import { Nav } from './styled'

import { FaHome, FaUserAlt, FaSign } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Header() {
    let btnCliked = useSelector(state => state.example.btnCliked)

    return (
        <Nav>
            <Link to='/login'><FaHome /></Link>
            <Link to='/'><FaUserAlt /></Link>
            <Link to='/sign'><FaSign /></Link>
            {btnCliked ? 'clicado1' : 'não clicado'}
        </Nav>
    )
}