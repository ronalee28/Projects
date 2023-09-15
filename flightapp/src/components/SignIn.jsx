import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn(props) {
    const [pass,setPass] =useState("")

    const nav = useNavigate()

    function inputHandler(){
        if(pass === '12345'){
            props.setIsLoggedIn(true)
            nav("/controlpanel")
        }else{
            alert('Incorrect')
        }
    }

  return (
    <div className='signin'>
        <h1>Sign in page</h1><br/>
        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='enter pass'/>
        <button onClick={inputHandler}>Sign in!!!</button>

    </div>
  )
}
