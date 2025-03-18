import React, { useEffect, useState } from 'react'

function Count() {

  const [count ,setCount] =  useState(0);

  //1.Mounting:
  //componentDidMount()
      useEffect(()=>{
        console.log('count component Mounted Sucessfully');
      },[]);

  //2.Updating:
  //componentDidUpdate()
      useEffect(()=>{
        console.log('count component Updated Sucessfully');
        if(count > 3){
          console.log('U have reached the max limit, ur account is blocked');
        }
      },[count]);

  //3.UnMounting:
  //compountWillUnMount()
  useEffect(()=>{
    return ()=>{
      console.log('count component unmounted Sucessfully')
    }
  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>
  )
}

export default Count