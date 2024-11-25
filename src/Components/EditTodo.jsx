import React, { useState } from 'react'
import toast from 'react-hot-toast'

const EditTodo = ({ todo, setEditTodo, setTodoList, todoList }) => {

    const [editText, setEditText] = useState(todo.title)

    const handleChange = (event) => {
        setEditText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (editText === "") {
            return toast.error("Task field is required!")
        }
        const res = todoList.map(todoItem => {
            if (todoItem.id === todo.id) {
                const dateTime = new Date().toLocaleString("en-IN")
                return {...todoItem, title: editText, updatedAt: dateTime}
            }
            return todoItem
        })
        setTodoList(res)
        setEditTodo(null)
    }

    return <div className="d-flex position-fixed bg-dark bg-opacity-75 top-0 start-0 justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>
        <div className="p-4 w-50 bg-dark text-light rounded">
            <form className="w-100" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={editText} placeholder="Enter Task" name="task" className="w-100 p-2 border-0" style={{ outline: 0 }} />
                <button className="btn mt-3 btn-success w-100">Add Todo</button>
                <button className="btn mt-3 btn-danger w-100" type="button" onClick={() => setEditTodo(null)}>Close Edit</button>
            </form>
        </div>
    </div>
}

export default EditTodo
