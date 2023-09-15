import React from 'react'
import { useState } from 'react';

export default function History(props) {


  return (
    <div className='history'>
    <h2>היסטוריית חניות</h2>
    <div className='parkingBoxContainer'>
      {props.parkingHistory.map((parking, index) => (
        <div key={index} className='parkingBox'>
          <p> CarNumber : {parking.carnumber}</p>
          <p> CarType : {parking.cartype}</p>
          <p> Start :  {new Date(parking.startTime).toLocaleString()}</p>
          <p> End : {new Date(parking.endTime).toLocaleString()}</p>
          <br />
        </div>
      ))
      }
      </div>
  </div>
);
}

