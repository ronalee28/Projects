import React, { useState,} from 'react'

import Card from './Card'
import { useNavigate } from 'react-router-dom'

export default function GamePage(props) {
    const [index,setIndex] = useState(0)
    const [computerPoints, setComputerPoints] = useState(0)
    const [playerPoints,setPlayerPoints] = useState(0)
    const nav = useNavigate()

    const increaseIndex =()=>{
        let player = playerPoints;
        let computer = computerPoints;

        if(props.playerDeck[index] > props.computerDeck[index]){
            player++;
            setPlayerPoints(player)
        }else if(props.playerDeck[index] < props.computerDeck[index]){
            computer++;
            setComputerPoints(computer)
        }

        let round = index;
        round++;
        setIndex(round) 
       

        if(index === 25){
            if(player > computer){
                props.player.win++
            }else if(computer > player){
                props.player.lost++
            }
           finishGame(computer,player) 
        }
    }

    const finishGame =(c,p)=>{
        props.setPlayerPoints(p)
        props.setComputerPoints(c)
        nav('/score')
    }

    const sendCardToComputer =()=>{
        return props.computerDeck[index]
    }

    const sendCardToPlayer =()=>{
        return props.playerDeck[index]
    }
 
  return (
    <div>
        <h1>{props.player.name}, are you ready for war?</h1>
        <br/>
        <h2>Computer</h2>
        <Card cardValue={sendCardToComputer()}/>
        <br/>
        <h1>ROUND: {index+1}/26 </h1>
        <br/>
        <h2>{props.player.name}</h2>
        <br/>
        <Card cardValue = {sendCardToPlayer()}/>
        <br/>
        <button onClick={()=>increaseIndex()}>NEXT</button>
    </div>
  )
}
