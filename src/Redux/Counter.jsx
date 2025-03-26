import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../features/Counter/CounterSlice'


export const Counter = () => {

const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>0}>Reset </button>
  

    </div>
  )
}
