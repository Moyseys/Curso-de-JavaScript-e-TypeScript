import React from 'react'
import {Link} from 'react-router-dom'

import { Nav } from './styled'

import { FaHome, FaUserAlt, FaSign } from 'react-icons/fa'

export default function Header() {
    return (
        <Nav>
            <Link to='/login'><FaHome /></Link>
            <Link to='/'><FaUserAlt /></Link>
            <Link to='/sign'><FaSign /></Link>
        </Nav>
    )
}