import React,{useState} from 'react'

export default function DeleteFlight(props) {
    const [typedFlightNumber,setTypedFlightNumber] = useState("")

    function handleDeleteFlight(){
        const index = props.allFlights.findIndex( val => val.flightNumber === typedFlightNumber)
        if(index === -1){
            throw new Error("flight not exist")
        }else{
            const updatedFlights = props.allFlights.filter(val => val.flightNumber !== typedFlightNumber)
            props.deleteFlight(updatedFlights)
            const totalFlights = updatedFlights.length;
            const totalPassengers = updatedFlights.reduce((acc,current)=> acc + current.passengers,0)
            alert(`Deleted Flight: ${typedFlightNumber} \n Total flights in the air: ${totalFlights} \n Total passengers:${totalPassengers}`)
        }
    }



  return (
    <div>
        <input type="text" placeholder='enter flight number' onChange={(e)=>setTypedFlightNumber(e.target.value)}/>
        <br />
        <button onClick={handleDeleteFlight}>Delete</button>
    </div>
  )
}
