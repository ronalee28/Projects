import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import GamePage from './components/GamePage';
import Score from './components/Score';


function App() {

  const [allPlayers, setAllPlayers] = useState([])
  const [player,setPlayer] = useState({})
  const [playerDeck, setPlayerDeck] =useState([])
  const [computerDeck, setComputerDeck] = useState([])
  const [playerPoints,setPlayerPoints] = useState(0)
  const [roundWin,setRoundWin] = useState(0) 
  const [roundLost,setRoundLost] = useState(0) 
  const [computerPoints, setComputerPoints] = useState(0)



  const addPlayer =(name,pass)=>{
    let temp ={
      name:name,
      pass:pass,
      win: 0,
      lost: 0,
      games: 0,
      cards: []
    }
    setAllPlayers([...allPlayers,temp])
  }

  const createDeck =()=>{

    let deck =[]
    let playerDeck =[]
    let computerDeck =[]
    let rnd;

    for(let i=1, cardValue =1; i<53; i++){
        deck.push(cardValue);
        if(i % 4 === 0){
            cardValue ++ ;
        }
    }
    
    for(let i=0; i<26; i++){
        rnd = Math.floor(Math.random() * deck.length)
        playerDeck.push(deck[rnd])
        deck.splice(rnd,1)
    }

    for(let i=0; i<26; i++){
        rnd = Math.floor(Math.random() * deck.length)
        computerDeck.push(deck[rnd])
        deck.splice(rnd,1)
    }

    setPlayerDeck([...playerDeck])
    setComputerDeck([...computerDeck])
}

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn roundWin={roundWin} roundLost={roundLost} allPlayers={allPlayers} setPlayer={setPlayer} createDeck={createDeck}/>}/>
        <Route path='/register' element={<Register setAllPlayers={setAllPlayers} allPlayers={allPlayers} addPlayer={addPlayer}/>}/>
        <Route path='/gamepage' element={<GamePage setComputerPoints = {setComputerPoints} setPlayerPoints={setPlayerPoints} player={player} playerDeck={playerDeck} computerDeck={computerDeck} createDeck={createDeck}/>}/>
        <Route path ='/score' element = {<Score setAllPlayers={setAllPlayers} allPlayers={allPlayers} setRoundWin={setRoundWin} setRoundLost={setRoundLost} setPlayerPoints={setPlayerPoints} setComputerPoints={setComputerPoints} player={player} createDeck={createDeck} playerPoints={playerPoints} computerPoints={computerPoints}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;