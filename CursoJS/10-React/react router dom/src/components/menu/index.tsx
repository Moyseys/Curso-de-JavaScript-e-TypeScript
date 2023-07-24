import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {

    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/redirect'>Redirect</Link>
            <Link to='/posts' state={`State from home`}>Post</Link>
            <Link to='/posts/10'>Post/10</Link>
            <Link to='/adasdasdasd'>Not Found</Link>
        </div>
    )
}