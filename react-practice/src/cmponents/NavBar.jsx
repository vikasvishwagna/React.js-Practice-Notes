import React from 'react'

const NavBar = () => {
  return(
    <div style={{display: "flex", justifyContent:"space-between", background:"#1C1C1C", color:"white", borderRadius:"5px", paddingLeft:"15px", paddingRight:"15px"}}>
      <p>view products</p>
      <p>contact</p>
      <p>Login/signUp</p>
      
    </div>
  )
}

export default NavBar