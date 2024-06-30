import React from 'react'
import UserContext from '../context/UserContext'
import { useState ,useContext } from 'react'
// import UserContext from '../context/UserContext';

function Login() {
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const {setUser} = useContext(UserContext)
    const handlesubmisson = (e) => {
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div>
        <h2>Login</h2>
      <input onChange={(e)=>setusername(e.target.value)} value={username} type='text' placeholder='Enter your Name'/>
      <input onChange={(e)=>setpassword(e.target.value)} value={password} type='text' placeholder='Enter your password'/>
      <button onClick={handlesubmisson}>Submit</button>
    </div>
  )
}

export default Login
