import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signin(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

   const handleLogin = ()=>{
    if (username === props.users.username && password === props.users.password){
        props.setIsLoggedIn(true);
        
        nav('/startparking')
    } else{ alert('Invalid username or password, or user not registered.');
    }
   }

  return (
    <div className='choosePath'>
      <h1>Signin</h1>
    <br />
        <input type="text" placeholder='Enter Name' onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>SignIn</button>
        <Link to={'/register'}><button>Register</button></Link>
    </div>
  )
}
