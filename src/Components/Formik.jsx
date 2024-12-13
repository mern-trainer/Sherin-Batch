// Form management library

import { useFormik } from "formik"
import { object, ref, string } from "yup"

const Formik = () => {

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
        validationSchema: object().shape({
            name: string()
                .required("Name is required")
                .matches(/^[A-Z][A-Za-z\s]{3,11}$/, { message: "Invalid Name" }),
            username: string()
                .required("Username is required")
                .matches(/^[a-z][a-z_.]{3,11}$/, { message: "Invalid Username" }),
            email: string()
                .required("Email is required")
                .email("Invalid email"),
            password: string()
                .required("Password is required")
                .matches(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/, "Invalid Password"),
            confirm_password: string()
                .required("Confirm password is required")
                .oneOf([ref("password")], "Password does not match")
        })
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

export default Formik