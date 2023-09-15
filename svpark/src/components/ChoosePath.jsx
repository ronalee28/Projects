import React from 'react'
import { Link } from 'react-router-dom'

export default function ChoosePath() {
  return (
    <div className='choosePath'>
        <Link to={'/signin'}><button>Already Have A User</button></Link>
        <Link to={'/register'}><button>SignUp Dont Have A User</button></Link>
    </div>
  )
}
