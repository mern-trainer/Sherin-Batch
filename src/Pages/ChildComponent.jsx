import React from 'react'

const ChildComponent = ({ counter, handleDataFromChild }) => {

    return <div>
        Child Component - {counter}
        <button onClick={() => handleDataFromChild("Data from child")}>Click</button>
    </div>
}

export default ChildComponent
