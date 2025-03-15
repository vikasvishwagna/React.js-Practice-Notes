import { useState } from "react"
//1.States and eventhandler.
function Number(){
  const [value, setValue] = useState(8);

  const increment = ()=>{
    //setValue(value+1);
    setValue((prevCount) => prevCount+1)//arrow fn.
  }

  const increment5 = ()=>{
    increment();
    increment();
    increment();
    increment();
    increment();
  }

  const reset = ()=>{
    setValue((val)=>val*0)
  }
  // const reset = ()=>{
  //   setValue((val)=>val*0)
  // }
  
  return(
    <div>
      <p style={ {fontSize:'5rem', margin:'5rem'} }>{value}</p>
      <button style={ {fontSize:'2rem', margin:'5rem'} } onClick={increment}>Increment</button>
      <button style={ {fontSize:'2rem', margin:'5rem'} } onClick={increment5}>Increment5</button>
      <button style={ {fontSize:'2rem', margin:'5rem'} } onClick={reset}>Reset</button>
    </div>
  );
}

export default Number;