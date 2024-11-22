import { Fragment } from "react"
import PasswordGenerator from "./Pages/PasswordGenerator"
import TodoPage from "./Pages/TodoPage"
import { Toaster } from "react-hot-toast"

const App = () => {
    return <Fragment>
        {/* <Cards /> */}
        {/* <LandingPage /> */}
        {/* <NavBar /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        <TodoPage />
        <Toaster position="top-right"/>
    </Fragment>
}

export default App 