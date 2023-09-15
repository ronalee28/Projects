import React, { useState } from 'react';
import Card from '../Card/Card';
import gamePage from './gamePage.css';

export default function GamePage(props) {
  const [index, setIndex] = useState(0);
  const [playerPoint, setPlayerPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [round, setRound] = useState(1);

  const increaseIndex = () => {
    let player = playerPoint;
    let computer = computerPoint;

    if (props.computerDeck[index] > props.playerDeck[index]) {
      computer++;
      setComputerPoint(computer);
    } else if (props.playerDeck[index] > props.computerDeck[index]) {
      player++;
      setPlayerPoint(player);
    }

    let temp = index;
    temp++;
    setIndex(temp);
    let allPlayersCopy = [...props.allPlayers];
    let playerIndex = allPlayersCopy.findIndex(playersInTemp => playersInTemp.fullName === props.player.fullName)
    let currentRound = round;
    currentRound++;
    setRound(currentRound);

    if (index === 25)
     {
      if (player > computer) {
      allPlayersCopy[playerIndex].win++
      props.setAllPlayers(allPlayersCopy); 
      props.player.win++;

      }else if (computer > player) 
      {
        allPlayersCopy[playerIndex].lost++
        props.setAllPlayers(allPlayersCopy);
        props.player.lost++;
      }
      props.finishGame(computer, player);
    }
  };

  const sendCardToComputer = () =>
   {
    return props.computerDeck[index];
  };

  const sendCardToPlayer = () => {
    return props.playerDeck[index];
  };

  return (
    <div className="card-container">
    <div className={gamePage.main}>
    
      <div className={gamePage.content}>
        <div className={gamePage.cards}>
          <h1>Computer</h1>
          <hr/>
          <br/>
          <Card cardValue={sendCardToComputer} />
          <p>Score: {computerPoint}</p>
        </div>
        <br />
        <br />
        <br />
        <div className={gamePage.cards}>
        <h1>{props.player.fullName}</h1>
        <hr/>
          <br/>
          <Card cardValue={sendCardToPlayer} />
          <p>Score: {playerPoint}</p>
        </div>
        <br />
        <p>Round: {round} / 26</p>
        <button onClick={increaseIndex}>Next!</button>
      </div>
    </div>
    </div>
  );
}
