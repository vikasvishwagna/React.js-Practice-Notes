import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/count'

function Count() {

  //useSelector: allows functional components to extract and access data from the Redux store.
  const count = useSelector(store=>store.reducerFunction.count)
  //useDispatch: allows functional components to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  return (
    <div>
      <p >{count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count