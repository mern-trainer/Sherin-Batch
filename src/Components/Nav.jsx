import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const isValid = true

// useNavigate()

const NavBar = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        if (isValid) {
            navigate("/products")
        } else {
            alert("can't navigate")
        }
    }

    return (
        <div className='d-flex justify-content-center gap-5'>
            <button onClick={handleClick}>Products</button>
            <Link to='/cards'>Cards</Link>
            <Link to='/states'>States</Link>
            <Link to='/password-generator'>Password Generator</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    )
}

export default NavBar
