import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

const CounterRedux = () => {

    const { counter } = useSelector((store) => store.counter)

    const dispatch = useDispatch()

    const handleClick = (buttonType) => {
        if (buttonType === "increment") {
            dispatch(increment(10))
        }
        if (buttonType === "decrement") {
            dispatch(decrement(10))
        }
        if (buttonType === "reset") {
            dispatch(reset())
        }
    }

    return (
        <div className='d-flex justify-content-center mt-3 flex-column align-items-center'>
            <div>counter: {counter}</div>
            <div className='d-flex gap-4 mt-4'>
                <button className='btn btn-primary' onClick={() => handleClick("increment")}>Increment</button>
                <button className='btn btn-danger' onClick={() => handleClick("reset")}>Reset</button>
                <button className='btn btn-success' onClick={() => handleClick("decrement")}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterRedux
