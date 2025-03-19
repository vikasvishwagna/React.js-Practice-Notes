
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/navbar';
import LandingPage from './components/LandingPage/landingpage';
import Contact from './components/Contact/contact.jsx';
import About from './components/About/about.jsx';
import Login from './components/Login/login.jsx';
import Signup from './components/SignUp/signup.jsx';
import Error from './components/ErrorPage/error.jsx';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about'  element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
     </div>

    </BrowserRouter>
    
  );
}

export default App;
