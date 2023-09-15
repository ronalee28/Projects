import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Parking(props) {

    const [cityChoose,setCityChoose] = useState('')
    const nav = useNavigate()

    const startParking = ()=>{
        if(cityChoose == 'def'){
            alert('Please Select City')
            return;
        }
        if(cityChoose == 'TLV'){
            alert('U Choose TLV is 150 Shekel Parking')
            const newParking = {
                carnumber: props.users.carnumber,
                cartype: props.users.cartype,
                city:cityChoose,
                startTime: new Date(),
              };
            props.setParking(newParking)
            props.setParkingActive(false)
            nav('/Parking')
        }
        if(cityChoose == 'Rehovot'){
            alert('U Choose Rehovot is 100 Shekel Parking')
            const newParking = {
                carnumber: props.users.carnumber,
                cartype: props.users.cartype,
                city:cityChoose,
                startTime: new Date(),
              };
              props.setParking(newParking)
              props.setParkingActive(false)
            nav('/Parking')
        }
        if(cityChoose == 'Ashdod'){
            const newParking = {
                carnumber: props.users.carnumber,
                cartype: props.users.cartype,
                city:cityChoose,
                startTime: new Date(),
              };
            alert('U Choose Ashdod is 50 Shekel Parking')
            props.setParking(newParking)
            props.setParkingActive(false)
            nav('/Parking')
        
        }
    }




  return (
    <div className='choosePath'><h1>Start Parking</h1>
    <br />
    <div className='parag'>CarNumber : {props.users.carnumber}</div>
    <br />
    <div className='parag'>CarNumber : {props.users.cartype}</div>
    <br />
    <select onChange={(e)=>setCityChoose(e.target.value)}>
        <option value="def">Choose City</option>
        <option value="TLV">תל אביב</option>
        <option value="Rehovot">רחובות</option>
        <option value="Ashdod">אשדוד</option>
    </select>
    <br />
   <button onClick={startParking}>Start</button>
    
    
    
    </div>
  )
}
