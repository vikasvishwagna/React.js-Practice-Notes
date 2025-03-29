import React, { useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux';
import { addList } from '../../action/action'


function AddTodo() {

  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddBtn = ()=>{
    dispatch(addList(newTodo));
    setNewTodo('');
  }

  return (
    <div className='addList-container'>
      <input type='text'
       placeholder='add list'
       value={newTodo}
       onChange={(e)=>setNewTodo(e.target.value)}
       />

       <button onClick={handleAddBtn}>+</button>
    </div>
  )
}

export default AddTodo