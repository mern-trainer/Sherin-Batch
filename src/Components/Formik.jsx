// Form management library

import { useFormik } from "formik"

const FormikComp = () => {

    const formikObj = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: ({ name, username, email, password, confirm_password }) => {
            if (name == "") {
                return { name: "Name is required" }
            }
            if (name.length < 4 || name.length > 12) {
                return { name: "Minimum 4 char. and max 12 char." }
            }
            if (username == "") {
                return { username: "Username is required" }
            }
            if (username.length < 4 || username.length > 12) {
                return { username: "Minimum 4 char. and max 12 char." }
            }
            if (email == "") {
                return { email: "Email is required" }
            }
            if (!email.includes("@") || !email.includes(".com")) {
                return { email: "Invalid email" }
            }
            if (password == "") {
                return { password: "Password is required" }
            }
            if (password.length < 8 || password.length > 16) {
                return { password: "Minimum 8 char. and max 16 char." }
            }
            if (password != confirm_password) {
                return { confirm_password: "Password does not match" } 
            }
        }
    })

    return <div className="d-flex justify-content-center">
        <form onSubmit={formikObj.handleSubmit} className="w-50 d-flex flex-column gap-2 mt-5">
            <input onChange={formikObj.handleChange} value={formikObj.values.name} type="text" name="name" placeholder="Enter your name." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <span>{formikObj.errors.name}</span>
            <input onChange={formikObj.handleChange} value={formikObj.values.username} type="text" name="username" placeholder="Enter your username." className="p-2 border-1 border-secondary" style={{ outline: 0 }} />
            <span>{formikObj.errors.username}</span>
            <input onChange={formikObj.handleChange} value={formikObj.values.email} type="text" name="email" placeholder="Enter your email." className="p-2 border-1 border-secondary" style={{ outline: 0 }} />
            <span>{formikObj.errors.email}</span>
            <input onChange={formikObj.handleChange} value={formikObj.values.password} type="password" name="password" placeholder="Enter your password." className="p-2 border-1 border-secondary" style={{ outline: 0 }} />
            <span>{formikObj.errors.password}</span>
            <input onChange={formikObj.handleChange} value={formikObj.values.confirm_password} type="password" name="confirm_password" placeholder="Re-enter password." className="p-2 border-1 border-secondary" style={{ outline: 0 }} />
            <span>{formikObj.errors.confirm_password}</span>
            <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
    </div>
}

export default FormikComp