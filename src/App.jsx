import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Cards from "./Pages/Cards"
import States from "./Pages/states"
import ProductList from "./Components/ProductList"
import PasswordGenerator from "./Pages/PasswordGenerator"
import Settings from "./Pages/settings"
import UpdateSettings from "./Pages/updateSettings"
import Profile from "./Pages/Profile"

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={LandingPage} />
                <Route path="cards" Component={Cards} />
                <Route path="states" Component={States}/>
                <Route path="products" Component={ProductList}/>
                <Route path="password-generator" element={<PasswordGenerator />} />

                <Route path="settings">
                    <Route path="" Component={Settings} />
                    <Route path="update-settings" Component={UpdateSettings} />
                    <Route path="profile" Component={Profile} />
                </Route>
            </Route>
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    </BrowserRouter>
}

export default App 