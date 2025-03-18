
//import { useState } from 'react';
import './App.css';
 import HOC from './components/HOC';
// import Count from './components/Count';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {

  return (
    <div className="App"> 
     <HOC Component={Section1} />
     <HOC Component={Section2} />
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

      # componentWillUnmount -
  const [showCount, setShowCount] = useState(true)
  componentDidMount
  useEffect(() => {
    console.log('App component mounted successfully')
  }, [])

  {showCount && <Count />}
  <button onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide' : 'Show'}</button>

  # HOC example 1
  <HOC Component={Section1} />
  <HOC Component={Section2} />

  # HOC example 2
  <HOC>
    <Section1 />
  </HOC>
  <HOC>
    <Section2 />
  </HOC>
    */