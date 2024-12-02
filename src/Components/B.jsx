import React from 'react'

const B = ({ setPage }) => {
    return (
        <div>
            Component B 
            <button onClick={() => setPage("signup")}>go to signup</button>
        </div>
    )
}

export default B
