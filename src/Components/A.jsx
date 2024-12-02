import React from 'react'
import { useAuth } from '../Providers/AuthProvider'

const A = ({ setPage }) => {
    const { setAuth } = useAuth()
    return (
        <div>
            Component A
            <button onClick={() => setAuth(true)}>login</button>
            <button onClick={() => setPage("login")}>go to login</button>
        </div>
    )
}

export default A
