// import React from 'react'
// import './error.css'
// import error from '../../assets/error.gif'
// function Error() {
//   return (
//     <div className='error-container'>
//       <p className='text-msg'>Page Not Found</p>
//       <img src={error} alt="error" />
//     </div>
//   )
// }

// export default Error

import { useState } from "react";

function ControlledCoffeeOrder() {
  const [coffeeType, setCoffeeType] = useState(""); // React controls this state

  return (
    <div>
      <h2>Order Your Coffee</h2>
      <input 
        type="text" 
        value={coffeeType} // React is controlling the value
        onChange={(e) => setCoffeeType(e.target.value)} // Updates state on every change
      />
      <p>Your order: {coffeeType}</p>
    </div>
  );
}

export default ControlledCoffeeOrder;
