import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { display, hide } from '../actions/display'

function Display() {

  const msg = useSelector((store)=>store.ShowReducerFunction.msg)
  const dispatch = useDispatch();

  const handleClick = ()=>{
    if(msg){
      dispatch(hide())
    }else{
      dispatch(display())
    }
  }

  return (
    <div>
      { msg && <h1>i love react.js</h1>}
      <button onClick={handleClick}> { msg ? 'Hide' : 'Show'} </button>
    </div>
  )
}

export default Display