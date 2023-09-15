import React from 'react'



export default function Score(props) {

  const CheckWinner=()=>{
  if(props.playerPoints > props.computerPoints){
    return <h1>You Won :)</h1>
  }else if(props.computerPoints > props.playerPoints){
    return <h1>You Lost :(</h1>
  }
  }


  return (
    <div className='main'>
    <div className='content'>
      {CheckWinner()}
      <h2> Wins: {props.player.win} Lose:{props.player.lost}</h2>
      <button onClick={()=>{props.tryAgain()}}>Try Again!</button>
    </div>
    </div>
  )
}
