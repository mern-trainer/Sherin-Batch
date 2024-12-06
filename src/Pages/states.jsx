import { Fragment, useState } from "react"
import NavBar from "../Components/Nav"

const States = () => {

    const [counter, setCounter] = useState({
        one: 0,
        two: 0
    })

    const handleUpdate = (type, operator) => {
        if (type == 1) {
            if (operator == "+") {
                setCounter({ ...counter, one: counter.one + 1 })
            } else {
                setCounter({ ...counter, one: counter.one - 1 })
            }
        }
        if (type == 2) {
            if (operator == "+") {
                setCounter({ ...counter, two: counter.two + 1 })
            } else {
                setCounter({ ...counter, two: counter.two - 1 })
            }
        }
    }

    return (
        <Fragment>
            <NavBar />
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
            <div className="">
                <div>Counter 1: {counter.one}</div> 
                <div>Counter 2: {counter.two}</div> 
            </div>
            <div className="d-flex gap-3 mt-3">
                <button className="btn btn-primary" onClick={() => handleUpdate(1, "+")}>Increment 1</button>
                <button className="btn btn-secondary" onClick={() => handleUpdate(1, "-")}>Decrement 1</button>
            </div>
            <div className="d-flex gap-3 mt-3">
                <button className="btn btn-primary" onClick={() => handleUpdate(2, "+")}>Increment 2</button>
                <button className="btn btn-secondary" onClick={() => handleUpdate(2, "-")}>Decrement 2</button>
            </div>
        </div>
        </Fragment>
    )
    
}

export default States