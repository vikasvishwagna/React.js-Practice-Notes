//import { use } from 'react';
import './App.css';
import Number from './component/Number';
//import Student from './component/Student';
//this code has notes on props and states below.

function App() {
  return (
    <div>
      <Number />
    </div>
  );
}

export default App;
//i have commented the props below, plz lookinto it.
/*
  # Any react component, can have 2 types of data:
  - PROPS
    - Data sent from parent component to the child component
    - This can be used to make dynamic components
  - STATES
    - Data which belongs/ owned by the component
    - To create state in functional components, we will use 'Hooks'
      - useState hook
      - Earlier versions of react: Class components were used majory. If states were required, class components were the only way to create components
      - After 2018: React hooks, now states could also be created in functional components
      - Syntax: const [state, stateHandler] = useState(defaultValue)
        - stateHandler: Function responsibe to change the value of state

  # (Future) Any change to state/props of a component -> component will re-render with new values of states and props
*/
//This code is for Props: 
/*function App() {
  const users = [
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    },
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    },
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    }
   
  ]
  return (
    <div>
      {users.map((user, idx)=>(
        <Student key={idx} fullName = {user.fullName} country ={user.country} age={user.age}/>
      ))}
    </div>
  );
}*/


