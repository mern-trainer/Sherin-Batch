import React from 'react'

const Modal = ({ todo, setSingleTodo }) => {
    return <div className="d-flex position-fixed bg-dark bg-opacity-75 top-0 start-0 justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>
        <div className="p-4 w-50 bg-dark text-light rounded">
            <h3>{todo.title}</h3>
            <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
            <div>CreatedAt: {todo.createdAt.toUpperCase()}</div>
            <div>UpdatedAt: {todo.updatedAt.toUpperCase()}</div>
            <button className='btn btn-danger w-100 mt-2' onClick={() => setSingleTodo(null)}>Close</button>
        </div>
    </div>
}

export default Modal
