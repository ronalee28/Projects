import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ParkingActive(props) {
  const nav = useNavigate();

 const handleStopParking = () => {
  const stoppedParking = {
    ...props.parking,
    ...props.users,
    endTime: new Date(),};
    props.setParkingHistory([...props.parkingHistory, stoppedParking]);
    props.setParking('');
    props.setParkingActive(true)
    nav('/startparking')
  };


  return (
    <div className='choosePath'><h1>ParkingActive</h1>
    <br />
    <div className='parkingactiveBox'>
  <p> Car Number : {props.users.carnumber}</p>
  <p> Car Type : {props.users.cartype} </p>
  <p> City : {props.parking.city} </p>
  <p> Start : {new Date(props.parking.startTime).toLocaleString()}</p>
  <button onClick={handleStopParking}>Stop Parking</button>
</div>
    </div>  
  )
}
