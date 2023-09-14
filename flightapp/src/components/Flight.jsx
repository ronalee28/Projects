import React from 'react'

export default function Flight(props) {
  return (
    <div className='flight-box'>
        <p>{props.val.flightNumber}</p>
        <p>{props.val.airLine}</p>
        <p>{props.val.passengers}</p>
    </div>
  )
}
