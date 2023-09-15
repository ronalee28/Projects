import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'


export default function SignIn(props) {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [showTable, setShowTable] = useState(false); 
    const nav = useNavigate()

    const checkIfPlayerExist =()=>{
        let find = props.allPlayers.find(val => val.name === name && val.pass === pass)
        if(find){
            props.setPlayer({name:name, win:0, lost:0})
            props.createDeck()
            nav('/gamepage')
        }else{
            nav('/register')
        }
    }
    const toggleTable = () => {
        setShowTable(!showTable); 
      };
    
      const renderTable = () => {
        if (showTable) {
          return (
            <table >
              <tr >
                <th>Name</th>
                <th>Won</th>
                <th>Lost</th>
              </tr>
              {props.allPlayers.map((val, index) => (
                <tr key={index}>
                  <td>{val.name}</td>
                  <td>{val.win}</td>
                  <td>{val.lost}</td>
                </tr>
              ))}
            </table>
          );
        }
      };
    

  return (
    <div >
        <h1>Welcome to War Game !</h1>
        <input className='inpt' type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)} />
        <br/>
        <input className='inpt' type="password" placeholder='Password' onChange={(e)=> setPass(e.target.value)} />
        <br/>
        <button className='inpt2' onClick={()=>checkIfPlayerExist()}>Sign In</button>
        <Link to={'/register'}><button className='inpt2'>Register</button></Link>
        <br/>
        <button className='inpt3' onClick={toggleTable}>Toggle Score table</button>
        {renderTable()}
    
    </div>
  )
}
