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
            <Route path="/" Component={LandingPage}/>
            <Route path="/cards" Component={Cards}/>
            <Route path="/states" Component={States}/>
            <Route path="/products" Component={ProductList}/>
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="*" element={<div>Page Not Found</div>} />

            <Route path="/settings" Component={Settings} />
            <Route path="/settings/update-settings" Component={UpdateSettings} />
            <Route path="/settings/profile" Component={Profile} />

        </Routes>
    </BrowserRouter>
}

export default App 