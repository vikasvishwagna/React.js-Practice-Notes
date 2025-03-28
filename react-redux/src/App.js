
import { Provider } from 'react-redux';
import './App.css';
import Count from './components/Count';
import store from './store';
import Display from './components/display';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <Count />
         <Display />
       </div>
    </Provider>
     
  );
}

export default App;
