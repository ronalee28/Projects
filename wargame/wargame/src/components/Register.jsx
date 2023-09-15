import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("") 
    const nav = useNavigate()

    const CheckInputsValid =()=>{

        let find = props.allPlayers.find(val => val.name === name && val.pass === pass)
        if(!find){
           if(name.length < 3){
                alert("Name is too sort - at least 4 chars")
           }else if(!(pass.length <=6)){
                alert("Pass should include big letter and maximum 6 chars")
           }else{
            props.addPlayer(name,pass)
            nav('/')
           }
          
           
        }else{
            alert("User already exist")
            nav('/')
        }
    }

  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)}/>
        <input type="password" placeholder='Enter password' onChange={(e) => setPass(e.target.value)} />
        <button onClick={CheckInputsValid}>Register</button>
    </div>
  )
}
