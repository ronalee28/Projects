import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFlight(props) {
    const [flightNumber,setFlightNumber] = useState("")
    const [airline,setAirline] = useState("")
    const [passengers,setPassengers] = useState("")

    const nav = useNavigate()

    function addFlightHandler(){
        if(flightNumber.length > 5 || flightNumber.length === 0){
            alert("Flight Number invalid");
            return;
        }
        if(airline.length === 0){
            alert("Please type something in airline");
            return;
        }
        if(passengers < 1 || passengers > 450){
            alert("passengers not valid");
            return;
        }

        const isDuplicateFlightNumber = props.allFlights.some( val => val.flightNumber === flightNumber)
        if(isDuplicateFlightNumber){
            alert('ALREADY EXISTS, DUPLICATE!')
        }else{
            props.addFlight(flightNumber,airline,passengers);
            nav('/controlpanel')
        }

    }

  return (
    <div className='addflight'>
        <h1>Add flights</h1>
        <input type="text" onChange={(e)=>setFlightNumber(e.target.value)} placeholder='flight number'/>
        <input type="text" onChange={(e)=>setAirline(e.target.value)} placeholder='airline'/>
        <input type="text" onChange={(e)=>setPassengers(e.target.value)} placeholder='passengers'/>
        <button onClick={addFlightHandler}>Add flight please</button>
    </div>
  )
}
