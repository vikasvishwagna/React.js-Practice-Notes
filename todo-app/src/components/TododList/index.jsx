import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteList }from '../../action/action'
import './index.css'

function Todolist() {

  const todos = useSelector((store)=>store.todoArray)
  const dispatch = useDispatch();
  
  const handleDelete = (todoListIdx)=>{
    dispatch(deleteList(todoListIdx))
  }

  return (

    <div>
      {todos.map((todo,index)=>(
        <div>
          <span key={index}>{todo}</span>
          <span onClick={()=>handleDelete(index)}>X</span>
        </div>

      ))}
    </div>
  )
}

export default Todolist