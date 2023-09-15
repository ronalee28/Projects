import { useState } from "react";
import "./App.css";
import GamePage from "./components/Game/GamePage";
import HomePage from "./components/Home/HomePage";
import Score from "./components/Score/Score";
import background from './backgroundWarCard.mp4'

function App() {
  const [pages, setPages] = useState(0);
  const [computerDeck, setComputerDeck] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [player, setPlayer] = useState({});
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [allPlayers, setAllPlayers] = useState([]);


  const showPage = () => {
    if (pages === 0)
      return (
        <HomePage
          validName={validName}
          allPlayers={allPlayers}
          player={player}        />
      );
    else if (pages === 1)
      return (
        <GamePage
          computerDeck={computerDeck}
          playerDeck={playerDeck}
          player={player}
          finishGame={finishGame}
          allPlayers = {allPlayers}
          setAllPlayers = {setAllPlayers}
        />
      );
    else if (pages === 2)
      return (
        <Score
          player={player}
          playerPoints={playerPoints}
          computerPoints={computerPoints}
          tryAgain={tryAgain}
          setPages={setPages}
        />
      );
  };

  const validName = (name) => {
    if (name.length > 0) {
      setPlayer({ fullName: name, win: 0, lost: 0});

      let temp;
      let findName = allPlayers.find((existingNames) => existingNames.fullName === name);
      if (findName === undefined) {
        temp = [...allPlayers]; 
        temp.push({ fullName: name, win: 0, lose: 0});
        setAllPlayers(temp);
      }

      setPages(1); 
      createDeck(); 
    } else alert("please enter name");
  };
  

  const createDeck = () => {
    let temp = [];
    for (let i = 1, cardValue = 1; i < 53; i++) {
      temp.push(cardValue);
      if (i % 4 === 0) {
        cardValue++;
      }
    }

    let rnd;
    let compDeck = [];
    let playDeck = [];

    for (let i = 0; i < 26; i++) {
      rnd = Math.floor(Math.random() * temp.length);
      compDeck.push(temp[rnd]);
      temp.splice(rnd, 1);

      rnd = Math.floor(Math.random() * temp.length);
      playDeck.push(temp[rnd]);
      temp.splice(rnd, 1);
    } 

    setComputerDeck([...compDeck]);
    setPlayerDeck([...playDeck]);
  };

  

  const finishGame = (c, p) => {
    setComputerPoints(c);
    setPlayerPoints(p);
    setPages(2);
  };

  

  const tryAgain = () => {
    setPlayerPoints(0);
    setComputerPoints(0);
    setPages(1);
    createDeck();
  };
 

  return <div className="App">{showPage()}
  <div>
    <video src={background} autoPlay loop muted /></div>
    </div>;
}

export default App;
