import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Cards from "./Pages/Cards"
import States from "./Pages/states"
import ProductList from "./Components/ProductList"
import PasswordGenerator from "./Pages/PasswordGenerator"
import Settings from "./Pages/settings"
import UpdateSettings from "./Pages/updateSettings"
import Profile from "./Pages/Profile"
import CartPage from "./Pages/CartPage"
import SamplePage from "./Pages/SamplePage"
import SinglePage from "./Pages/SinglePage"
import SingleProductView from "./Pages/singleProductView"
import Formik from "./Components/Formik"
import TodoPage from "./Pages/TodoPage"
import EditTodo from "./Pages/EditTodo"
import CounterRedux from "./Pages/CounterRedux"

// redux => Global state management, js library

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={LandingPage} />
                <Route path="redux" Component={CounterRedux} />
                <Route path="todo">
                    <Route path="" Component={TodoPage} />
                    <Route path="edit">
                        <Route path=":id?" Component={EditTodo}  />
                    </Route>
                </Route>
                <Route path="formik" Component={Formik} />
                <Route path="cards" Component={Cards} />
                <Route path="states" Component={States}/>
                <Route path="products" Component={ProductList} />
                <Route path="cart" Component={CartPage} />
                <Route path="password-generator" element={<PasswordGenerator />} />

                <Route path="settings">
                    <Route path="" Component={Settings} />
                    <Route path="update-settings" Component={UpdateSettings} />
                    <Route path="profile" Component={Profile} />
                </Route>

                <Route path="sample" Component={SamplePage} />
                <Route path="single">
                    <Route path=":id?" Component={SinglePage} />
                </Route>

                <Route path="product">
                    <Route path=":product_id?" Component={SingleProductView} />
                </Route>

            </Route>
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    </BrowserRouter>
}

export default App 