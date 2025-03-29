import { createStore } from "redux";
import { composeWithDevTools  } from '@redux-devtools/extension'
import reducer from '../reducer/todo'

const store = createStore(reducer,composeWithDevTools());

export default store 