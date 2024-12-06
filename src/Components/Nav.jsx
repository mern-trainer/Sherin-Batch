import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='d-flex justify-content-center gap-5'>
            <Link to='/products'>Products</Link>
            <Link to='/cards'>Cards</Link>
            <Link to='/states'>States</Link>
            <Link to='/password-generator'>Password Generator</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    )
}

export default NavBar
