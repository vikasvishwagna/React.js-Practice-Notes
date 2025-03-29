import { ADD_TODO, DELETE_TODO } from "../action/action"

const initialState = {
  todoArray:[
    'Go for a walk',
    'Complete Todo List project',
    'Bring Grocery for one week'
  ]
}
const reducer = (state=initialState,action)=>{
  switch (action.type){
    case ADD_TODO:
      return {
        ...state,
        todoArray:[...state.todoArray, action.payload]
      }

      case DELETE_TODO:
        const newTodoList = state.todoArray.filter((todo, idx)=>idx !== action.payload)
        return {
          ...state,
          todoArray:newTodoList
        }

        default: return state;
  }
}

export default reducer