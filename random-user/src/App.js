import {  useState } from 'react';
import './App.css';


//fetching using a button 
const App = ()=>{
  const [user, setUser]=  useState();
  const fetchFunction =async ()=>{
    const val = await fetch("https://randomuser.me/api");
    const jsonRes = await val.json();
    setUser(jsonRes)
    console.log(jsonRes);
  }
  return(
    <div>
      {
        user && (
          <>
          <h1>{user.results[0].email}</h1>
          <img src={user.results[0].picture.large} alt='' />
          {user.info.seed}
          </>
        )
      }
      <button onClick={fetchFunction}>Fetch User</button>

    </div>
  )
}


// const App =  ()=>{
//   const [user, setUser] = useState();
//   useEffect(()=>{
//     fetch("https://randomuser.me/api/").then((data)=>{
//       data.json().then((res)=>{
//         console.log(res);
//         setUser(res.results[0]);
//       })
//     }).catch((err)=>{
//       console.log(err)
//     })
//   },[])
  
//   return(
//     <div>
//       {
//         user && (
//           <>
//           <h1>{user.email}</h1>
//           <img src={user.picture.large} alt=''/>
//           </>
//         )
//       }
//     </div>
//   )
// }

export default App;
