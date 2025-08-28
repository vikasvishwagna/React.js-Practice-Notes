import React from 'react'
import NavBar from './NavBar'
import Categories from './Categories'
import { ThemeContext } from './ThemeContext'



const Home = () => {
  const theme = "Dark"; //Light || Dark
  return (
    <div>
      <NavBar />
      <ThemeContext.Provider value={theme}>
        <Categories />
      </ThemeContext.Provider>
    </div>
  )
}

export default Home