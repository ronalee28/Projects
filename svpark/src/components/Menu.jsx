import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Menu(props) { 

    const nav = useNavigate()
        const Logout=()=>{
          props.setIsLoggedIn(false);
        }

        const checkActivePark = ()=>{
          if (props.parkingactive){
            nav('/startparking')
          }else  {
            nav('/parking')
          }
        }
        
        return (
      
       
          <div className='Manu'>
            <div className='name'>
               Hello {props.users.username}</div>
          

            <button onClick={checkActivePark}>Parking</button>
            
            <Link to={'/history'}><button>History</button></Link>
       
            <Link to={'/'}> <button onClick={Logout}>Exit</button></Link> 
        
            
        </div>
  )
}
