import { createContext, useState } from "react";

export const myContext = createContext()

export const MyProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    return <myContext.Provider value={{ counter, setCounter }}>
        { children }
    </myContext.Provider>
}