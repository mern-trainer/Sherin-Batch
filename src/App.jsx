import { Fragment } from "react"
// import PasswordGenerator from "./Pages/PasswordGenerator"
// import TodoPage from "./Pages/TodoPage"
import { Toaster } from "react-hot-toast"
import ParentComponent from "./Pages/ParentComponent"

const App = () => {
    return <Fragment>
        {/* <Cards /> */}
        {/* <LandingPage /> */}
        {/* <NavBar /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        {/* <TodoPage /> */}
        <ParentComponent />
        <Toaster position="top-right"/>
    </Fragment>
}

export default App 