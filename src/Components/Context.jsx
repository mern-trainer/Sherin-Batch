// state => js object to handle informations or data in a component
// props => parent to child 
// context api => Global state management

import { useContext } from "react"
import { myContext } from "../Providers/MyProvider"

const Context = () => {

    const { counter, setCounter } = useContext(myContext)

    return <div className="d-flex align-items-center flex-column gap-2 mt-3">
        <div>{counter}</div>
        <button className="btn btn-danger btn-sm" onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}

export default Context