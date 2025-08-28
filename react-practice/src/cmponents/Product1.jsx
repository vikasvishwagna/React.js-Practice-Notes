import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

const Product1 = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"50px", border:"2px solid black",}}>
      <img style={{height:"250px", width:"250px"}} src="https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960" alt="iphone-img" />
      <h1>iphone 15 pro</h1>
      <p>price: $1299 </p>
      <button style={{border: theme === "Dark" ? "5px solid green" : "none"  }}>Add to cart</button>
    </div>
  )
}

export default Product1