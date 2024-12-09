import React from 'react'
import { useNavigate } from 'react-router-dom'

const SamplePage = () => {

    const navigate = useNavigate()

    const handleNavigation = () => {
        const randomNumber = Math.floor(Math.random() * 100)
        navigate(`/single/${randomNumber}`)
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <button onClick={handleNavigation}>Generate Random Number</button>
        </div>
    )
}

export default SamplePage
