import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './components/SignIn';
import AllFlights from './components/AllFlights';
import SortFlights from './components/SortFlights';
import AddFlights from './components/AddFlights';
import DeleteFlight from './components/DeleteFlight';
import Main from './components/Main';


function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [allFlights,setAllFlights]=useState([
   {flightNumber:"UA123",airLine:'united Airlines',passengers:390},
   {flightNumber:'EL627',airLine:'El Al',passengers:280},
   {flightNumber:'SW186',airLine:'Smart Wings',passengers:140}])

   const addFlight=(f,a,p)=>{
    let temp={flightNumber:f,airLine:a,passengers:p}
    setAllFlights([...allFlights,temp])
   }

   const deleteFlight=(updatedFlights)=>{
    setAllFlights(updatedFlights)
   }

  return (
    <div className="App">
 <BrowserRouter>

<div className='child-left'>
    {isLoggedIn && <Main setIsLoggedIn={setIsLoggedIn}/>}
</div>

<div className='child-right'> 
  <Routes>
   <Route path='/' element={<SignIn setIsLoggedIn={setIsLoggedIn}/>}/>
   <Route path='/controlpanel' element={<AllFlights allFlights={allFlights}/>} />
   <Route path='/controlpanel/sort' element={<SortFlights allFlights={allFlights}/>} />
   <Route path='/controlpanel/add' element={<AddFlights addFlight={addFlight} allFlights={allFlights}/>} />
   <Route path='/controlpanel/delete' element={<DeleteFlight deleteFlight={deleteFlight} allFlights={allFlights}/>} />
  </Routes>
</div>

</BrowserRouter>
    </div>
  );
}

export default App;
