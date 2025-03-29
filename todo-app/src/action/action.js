export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export const addList = (newTodo)=>({
    type : ADD_TODO,
    payload : newTodo
})

export const deleteList = (todoListIdx)=>({
    type : DELETE_TODO,
    payload : todoListIdx
})