import { Fragment, useState } from "react"
// import PasswordGenerator from "./Pages/PasswordGenerator"
// import TodoPage from "./Pages/TodoPage"
import { Toaster } from "react-hot-toast"
// import Context from "./Components/Context"
import ProductList from "./Components/ProductList"
// import Effect from "./Components/Effect"
// import FormManage from "./Components/FormManage"
import C from "./Components/C"
import B from "./Components/B"
import A from "./Components/A"
import { useAuth } from "./Providers/AuthProvider"
// import ParentComponent from "./Pages/ParentComponent"

const App = () => {

    const { auth } = useAuth()
    const [page, setPage] = useState("signup")

    return <Fragment>
        {/* <Cards /> */}
        {/* <LandingPage /> */}
        {/* <NavBar /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        {/* <TodoPage /> */}
        {/* <Context /> */}
        <ProductList />
        {/* <Effect /> */}
        {/* <FormManage /> */}
        {/* {
            auth ? <C /> : page === "login" ? <B setPage={setPage} /> : <A setPage={setPage} />
        } */}
        {/* <ParentComponent /> */}
        <Toaster position="top-right"/>
    </Fragment>
}

export default App 