import { createContext, Fragment, useState } from "react"
// import PasswordGenerator from "./Pages/PasswordGenerator"
import TodoPage from "./Pages/TodoPage"
import { Toaster } from "react-hot-toast"
import Context from "./Components/Context"
// import ParentComponent from "./Pages/ParentComponent"

export const myContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    return <Fragment>
        {/* <Cards /> */}
        {/* <LandingPage /> */}
        {/* <NavBar /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        {/* <TodoPage /> */}
        <myContext.Provider value={{ counter, setCounter }}>
            <Context />
        </myContext.Provider>
        {/* <ParentComponent /> */}
        <Toaster position="top-right"/>
    </Fragment>
}

export default App 