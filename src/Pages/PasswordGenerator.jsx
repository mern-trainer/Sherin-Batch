import { Fragment, useState } from "react"
import NavBar from "../Components/Nav"

const PasswordGenerator = () => {

    const [password, setPassword] = useState("")
    const [history, setHistory] = useState([])

    const createRandomPassword = () => {
        const strings = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', // Lowercase letters
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',                                               // Numbers
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '`', '~' // Special characters
        ];
        let len = 0;
        let generatedPassword = ""
        while (len < 16) {
            const randomIndex = Math.floor(Math.random() * strings.length)
            generatedPassword += strings[randomIndex]
            len++
        }
        setPassword(generatedPassword)
        setHistory([...history, generatedPassword])
    }

    return <Fragment>
        <NavBar /><div className="d-flex justify-content-center align-items-center flex-column mt-4">
        {password}
        <button onClick={createRandomPassword}>Generate Password</button>
        {history.join(" , ")}
    </div>
    </Fragment>
}

export default PasswordGenerator