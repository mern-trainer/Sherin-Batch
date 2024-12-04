import { useState } from "react"

const FormManage = () => {
    
    const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "", confirm_password: "" })
    
    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }  

    return <div className="d-flex justify-content-center">
        <form onSubmit={handleFormSubmit} className="w-50 d-flex flex-column gap-2 mt-5">
            <input type="text" onChange={handleFormChange} value={formData.name} name="name" placeholder="Enter your name." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <input type="text" onChange={handleFormChange} value={formData.username} name="username" placeholder="Enter your username." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <input type="text" onChange={handleFormChange} value={formData.email} name="email" placeholder="Enter your email." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <input type="password" onChange={handleFormChange} value={formData.password} name="password" placeholder="Enter your password." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <input type="password" onChange={handleFormChange} value={formData.confirm_password} name="confirm_password" placeholder="Re-enter password." className="p-2 border-1 border-secondary" style={{outline: 0}}/>
            <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
    </div>
}

export default FormManage