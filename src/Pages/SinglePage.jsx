import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SinglePage = () => {

    const { id } = useParams()

    const navigate = useNavigate()
 
    return (
        <div className='d-flex justify-content-center mt-5 flex-column align-items-center gap-3'>
            <div>{id}</div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default SinglePage
