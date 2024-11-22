import { FaInstagram } from "react-icons/fa"

const NavBar = () => {
    return <header>
        <div>Logo</div>
        <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div>
            <FaInstagram size={50} color="#000fff" cursor={"pointer"} fill="red"/>
        </div>
    </header>
}

export default NavBar
