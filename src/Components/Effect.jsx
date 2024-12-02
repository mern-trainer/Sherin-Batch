// Hook => function, states and lifecycle
// states => useState()
// lifecycle => mounting, updating, unmounting

import { useEffect, useState } from "react"

// mounting => called after the initial render
// updating => changes states or props / component
// unmounting => called before component removed from the DOM.

const Effect = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        return () => { // cleanup function
            console.log("Unmounting...")
        }
    }, [counter])

    return <div className="d-flex flex-column gap-3 mt-4 align-items-center">
        <div>{counter}</div>
        <button onClick={() => setCounter((counter) => counter + 1)}>Increment</button>
    </div>
}

export default Effect