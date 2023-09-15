import React, { useState } from 'react';
import './homepage.css';


export default function Homepage(props) {
  const [name, setName] = useState('');
  const [isTableVisible, setTableVisible] = useState(false);

  const handleButtonClick = () => {
    setTableVisible(!isTableVisible);
  };


  return (
    <div className='main'>
      <div className='content'>
        <h1>Redy for war</h1>
        <br />
        <div className='details'>
          <input
            className='inpt'
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder='Enter Name'
          />
          <button className='btn' onClick={() => { props.validName(name) }}>
            Start!
          </button>
          <br />
        </div>
        <br />
        <hr />
        <br />
        <div>
          <button onClick={handleButtonClick}>
            {isTableVisible ? 'Hide Score Table' : 'Show Score Table'}
          </button>
          {isTableVisible && (
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Round</th>
                  <th>Score</th>
                </tr>
                </thead>
          {props.allPlayers.map((val,index)=>(
 <tbody>
 <tr key={index}>
   <td>{val.fullName}</td>
   <td>{val.round}</td>
   <td>{val.Win}</td>
 </tr>
</tbody>
          ))}
             
             
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
