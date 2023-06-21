import React from 'react'
import {Link} from 'react-router-dom'
import { Nav } from './styled'

import { FaHome, FaUserAlt, FaSign } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Header() {
    return (
        <Nav>
            <Link to='/'><FaHome size={24} /></Link>
            <Link to='/registro'><FaUserAlt size={24} /></Link>
            <Link to='/login'><FaSign size={24} /></Link>
        </Nav>
    )
}