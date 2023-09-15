import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {


    const [username, setUsername] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carType, setCarType] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    const handleRegister = () => {

        // Check if the username is between 4-8 characters and all characters are lowercase
        if (username.length < 4 || username.length > 8 || username !== username.toLowerCase()) {
            alert('Username must be between 4-8 characters and all lowercase.');
            return;
          }
          // Check if the car number is exactly 7 digits
          if (carNumber.length !== 7 || isNaN(carNumber)) {
            alert('Car number must be exactly 7 digits.');
            return;
          }
          // Check if the password contains at least one special character !@#$
          const specialCharacters = /[!@#$]/;
  if (!specialCharacters.test(password)) {
    alert('Password must contain at least one special character (!@#$).');
    return;
  }

        props.setUsers({ username:username, carnumber:carNumber, cartype:carType, password:password });
        nav('/signin');
      };

  return (
    <div className='choosePath'>
        <h1>Register</h1>
    <br />
        <input type="text" placeholder='Enter User' onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <input type="text" placeholder='Enter Car Number' onChange={(e)=>setCarNumber(e.target.value)}/>
        <br />
        <input type="text" placeholder='Enter Car Type'onChange={(e)=>setCarType(e.target.value)}/>
        <br />
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={handleRegister}>Enter</button>
    </div>
  )
}
