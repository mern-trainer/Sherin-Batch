import { useState } from "react"
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

// property => props

const TodoPage = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo === "") {
            return toast.error("Task field is required!")
        }
        const dateTime = new Date().toLocaleString("en-IN")
        const taskObject = {
            id: uuidv4(),
            title: todo,
            completed: false,
            createdAt: dateTime,
            updatedAt: dateTime
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
    }

    const handleRemoveTodo = (removeId) => {
        const res = todoList.filter((element) => element.id !== removeId)
        setTodoList(res)
    }

    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <form className="w-50" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={todo} placeholder="Enter Task" name="task" className="w-100 p-2 border-0" style={{ outline: 0 }} />
                <button className="btn mt-3 btn-success w-100">Add Todo</button>
            </form>
            <div className="w-50">
                {
                    todoList.map((element) => {
                        return <div key={element.id} className="bg-light my-2 p-2 d-flex justify-content-between align-items-center">
                            <div>{element.title}</div>
                            <div><FaTrash color="red" cursor={"pointer"} onClick={() => handleRemoveTodo(element.id)}/></div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TodoPage