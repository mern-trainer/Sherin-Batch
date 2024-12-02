import React from 'react'
import { useAuth } from '../Providers/AuthProvider'

const C = () => {
    const { setAuth } = useAuth()
    return (
        <div>
            C Component
            <button onClick={() => setAuth(false)}>logout</button>
        </div>
    )
}

export default C
