import { useState } from "react"
import React from 'react'
import Flight from "./Flight" //!קומפוננטה שמחזירה את נתוני הטיסה 

export default function SortFlights(props) {

    const [filteredFlights,setFilteredFlights] = useState(props.allFlights)//! מכניסה את מערך כל הטיסות למערך שנוכל לסנן
    const [sortBy,setSortBy] = useState("default") //! מחזיקה את הסלקט

    function handleInputChange(e){ //!פונקציה שמפעילה את הכתיבה באינפוט 
      if (props.allFlights) {
          const filtered = props.allFlights.filter(val => val.airLine && val.airLine.includes(e.target.value))
          //!מערך מסונן בתוך משתנה
          setFilteredFlights(filtered) //! מעדכנת את המערך למערך מסונן
      }
  }
  //!מעתיקה מערך של טיסות מסוננות  //! ממיינת לפי קטן גדול ולהפך
    function sortFlights(){
        const sorted = [...filteredFlights] 
        sorted.sort((a,b)=>{ 
            if(sortBy === 'asc'){
                return a.passengers - b.passengers
            }else if(sortBy === 'des'){
                return b.passengers - a.passengers
            }
        })
        setFilteredFlights(sorted)
    }
    //!מעתיקה מערך של טיסות מסוננות  //! ממיינת לפי קטן גדול ולהפך

  return (
    <div>
        <input type="text" placeholder='Enter airline' onChange={handleInputChange}/>
        <br />
        <select onChange={(e)=>setSortBy(e.target.value)}> 
            <option value="default">Choose sorting</option>
            <option value="asc">Small to Large</option>
            <option value="des">Large to small</option>
        </select>
        <button onClick={sortFlights}>Sort</button>
     
        <div className="flight-grid">
        {filteredFlights.map((val,index)=>{ //!עוברת על המערך המסונן ומייבאת את הערך ואת האינדקס 
            return <Flight val={val} key={index} /> //!מחזירה את קומפונטטת פלייט שמציגה את הערכים של הטיסות 
        })}
        </div>
    </div>
  )
}
