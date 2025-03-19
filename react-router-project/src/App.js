
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/navbar';
import LandingPage from './components/LandingPage/landingpage';
import Contact from './components/Contact/contact.jsx';
import About from './components/About/about.jsx';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about'  element={<About />}/>
      </Routes>
     </div>

    </BrowserRouter>
    
  );
}

export default App;
