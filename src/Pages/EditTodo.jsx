import { useState } from 'react'
import { useTodo } from '../Providers/TodoProvider'
import { useNavigate, useParams } from 'react-router-dom'

const EditTodo = () => {
    
    const { id } = useParams()
    const { todoList, setTodoList } = useTodo()
    const [todo, setTodo] = useState((todoList.find(item => item.id === id))?.title)
    
    const navigate = useNavigate()

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const res = todoList.map(item => {
            if (item.id === id) {
                const dateTime = new Date().toLocaleString("en-IN")
                return { ...item, title: todo, updatedAt: dateTime }
            }
            return item
        })
        setTodoList(res)
        navigate("/todo")
    }

    return <div>
        <form className="w-50" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={todo} placeholder="Enter Task" name="task" className="w-100 p-2 border-0" style={{ outline: 0 }} />
            <button className="btn mt-3 btn-success w-100">Add Todo</button>
        </form>
    </div>
}

export default EditTodo
