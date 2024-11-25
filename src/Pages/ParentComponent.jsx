import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

// property [props] => pass or send data from parent to child

const ParentComponent = () => {

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState("")

    const handleDataFromChild = (data) => {
        setData(data)
    }

    return <div>
        Parent Component [{data}] {"=>"} <button onClick={() => setCounter(counter + 1)}>Update</button>
        <ChildComponent counter={counter} handleDataFromChild={handleDataFromChild} />
    </div>
}

export default ParentComponent
