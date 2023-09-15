import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Main(props) {

  const nav=useNavigate()

  const exit=()=>{
    props.setIsLoggedIn(false)
    nav('/')
   }
  return (
    <div className='main2'>
        <Link to={'/controlpanel'}> <button> All flights </button> </Link> <br/>
        <Link to={"/controlpanel/sort"}> <button> Sort flights </button> </Link><br/>
        <Link to={"/controlpanel/add"}> <button> Add flight </button> </Link><br/>
        <Link to={"/controlpanel/delete"}> <button> Delete flight </button> </Link><br/>
        <button onClick={exit}>  Exit </button>
    </div>
  )
}
