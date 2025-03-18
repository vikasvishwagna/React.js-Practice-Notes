
import { useState } from 'react';
import './App.css';
import Count from './components/Count';

function App() {
  const [showCount,setShowCount] = useState(true);

  return (
    <div className="App"> 
      {showCount && <Count />}
      <button onClick={()=>setShowCount(!showCount)}>{showCount ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;

/*
  # Component Lifecycle Phases
  - Mounting (Birth): Default state, prop values -> renders
  - Updating (Milestones): New props, setState invoked -> renders
  - Unmounting (Death)

  # Component Lifecycle Methods
  - Mounting: 
    - componentDidMount()
      - useEffect() with empty dependency array
      -Uses: API requests
  - Updating:
    - componentDidUpdate()
      - useEffect() with states mentioned inside dependency array
      - uses: Logic dependent upon state updates
  - Unmounting:
    - componentWillUnmount()
      - useEffect() - return callback inside useEffect.
      - uses: Reset state value.

  #  useEffect syntax -
    useEffect(() => {

    }, [])
    - 1st Argument: callback
    - 2nd Argument: dependecy array
    */