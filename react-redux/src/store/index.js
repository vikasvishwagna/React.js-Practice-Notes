import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import reducerFunction from "../reducers/count";
import ShowReducerFunction from "../reducers/display";


const reducer = combineReducers({
  reducerFunction,
  ShowReducerFunction
})

const store = createStore(reducer, composeWithDevTools());

export default store 