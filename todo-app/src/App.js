import { Provider } from 'react-redux';
 import './App.css';
import AddTodo from './components/AddTodo';
import Todolist from './components/TododList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todolist />
      </div>
    </Provider>
    
  );
}

export default App;
