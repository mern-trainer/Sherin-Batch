import { createContext, useContext, useState } from "react";

const authContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [users, setUsers] = useState([])
    return <authContext.Provider value={{auth, setAuth, users, setUsers}}>
        { children }
    </authContext.Provider>
}

export const useAuth = () => useContext(authContext)