import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: []
    },
    reducers: {
        addTodo: (state, action) => { 
            // { id: sduwe8uer, title: "Sample Todo", completed: false, createdAt: 123456789, updatedAt: 123456789 }
            const { payload } = action
            state.todoList = [...state.todoList, payload]
        },
        removeTodo: (state, action) => {
            // {id: sduwe8uer}
            const { id } = action.payload
            state.todoList = state.todoList.filter(todo => todo.id !== id)
        },
        updateTodo: (state, action) => {
            // {id: sduwe8uer, title: "Updated Todo"}
            const { id, title, completed } = action.payload
            state.todoList = state.todoList.map(todo => {
                if (todo.id === id) {
                    const obj = { ...todo, updatedAt: new Date().toLocaleString("en-IN") }
                    if (title) obj.title = title
                    if(completed) obj.completed = completed
                    return obj
                }
                return todo
            })
        },
        // or
        updateStatus: (state, action) => {
            const { id, completed } = action.payload
            state.todoList = state.todoList.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed, updatedAt: new Date().toLocaleString("en-IN") }
                }
                return todo
            })
        }
    }
})