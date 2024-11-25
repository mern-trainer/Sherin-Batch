import { Fragment, useState } from "react"
import toast from "react-hot-toast"
import { FaCheckCircle, FaEye, FaTrash } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import Modal from "../Components/Modal"
import { FaCircleXmark } from "react-icons/fa6"

// property => props

const TodoPage = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [singleTodo, setSingleTodo] = useState(null)

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

    const handleUpdateStatus = (id) => {
        const res = todoList.map(todo => {
            if (todo.id === id) {
                const dateTime = new Date().toLocaleString("en-IN")
                return { ...todo, completed: !todo.completed, updatedAt: dateTime }
            }
            return todo
        })
        setTodoList(res)
    }

    return (
        <Fragment>
            {singleTodo && <Modal todo={singleTodo} setSingleTodo={setSingleTodo} />}
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
                                <div className="d-flex gap-2 align-items-center">
                                    <FaTrash color="red" cursor={"pointer"} onClick={() => handleRemoveTodo(element.id)} />
                                    <FaEye color="gray" cursor={"pointer"} onClick={() => setSingleTodo(element)}/>    
                                    {
                                        element.completed ?
                                            <FaCircleXmark color="red" cursor={"pointer"} onClick={() => handleUpdateStatus(element.id)} />
                                            : <FaCheckCircle color="green" cursor={"pointer"} onClick={() => handleUpdateStatus(element.id)} />
                                    }    
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default TodoPage