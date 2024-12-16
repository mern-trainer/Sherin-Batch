import { createContext, useContext, useState } from "react";

const todoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])
    return <todoContext.Provider value={{ todoList, setTodoList }}>
        {children}
    </todoContext.Provider>
}

export const useTodo = () => useContext(todoContext)