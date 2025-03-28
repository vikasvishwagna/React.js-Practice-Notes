import { DISPLAY, HIDE } from "../actions/display"

const initialState = {
  msg : false
} 
const ShowReducerFunction = (state=initialState, action)=>{
  switch(action.type){
    case DISPLAY:
      return{
        ...state,
        msg : true
      }

    case HIDE:
        return{
          ...state,
          msg : false
        }

      default:
        return state;
  }
}

export default ShowReducerFunction