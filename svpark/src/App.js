
import './App.css';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ChoosePath from './components/ChoosePath';
import Register from './components/Register';
import Signin from './components/Signin';

import Parking from './components/Parking';

import History from './components/History'
import Menu from './components/Menu';
import ParkingActive from './components/ParkingActive';


function App() {
  const [users,setUsers] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [parkingactive,setParkingActive] = useState(true)
  const [parking, setParking] = useState(''); // חניה פעילה
  const [parkingHistory, setParkingHistory] = useState([]); // היסטוריה
  
 
  return (
    <div className="App">
      <h1>Sv Parking</h1>
    

      <div className='center'>
      <BrowserRouter>
      
       {isLoggedIn ? <Menu setIsLoggedIn={setIsLoggedIn} users={users} parkingactive={parkingactive} /> : null}
      <Routes>
      <Route path='/' element={<ChoosePath/>}/>
      <Route path='/signin' element={<Signin users={users} setIsLoggedIn={setIsLoggedIn}  />}/>
      <Route path='/register' element={<Register setUsers={setUsers}/>}/>
      <Route path='/history' element={<History parkingHistory={parkingHistory} />}/>
      <Route path='/startparking' element={<Parking users={users} setParking={setParking} setParkingActive={setParkingActive} />}/>
      <Route path='/parking' element={<ParkingActive setParkingActive={setParkingActive} parking={parking} users={users} setParking={setParking} parkingHistory={parkingHistory} setParkingHistory={setParkingHistory} />}/>
      </Routes >
      
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
