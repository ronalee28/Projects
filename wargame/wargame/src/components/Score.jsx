import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Score(props) {

    const nav = useNavigate()

    const checkWinner =()=>{
        if(props.playerPoints >= props.computerPoints){
            return <p> {props.player.name} you won!</p>
        }else if(props.computerPoints > props.playerPoints){
            return <p> YOU LOSTTTTTTTTTT </p>
        }
    }
    const updateScoreToAll=()=>{
        let index = props.allPlayers.findIndex(val=>val.name == props.player.name)
        let user = props.allPlayers.find(val => val.name == props.player.name)
        user.win += props.player.win
        user.lost += props.player.lost

        let newArr =[...props.allPlayers]
        newArr.splice(index,1)
        newArr.push(user)
        props.setAllPlayers([...newArr])


    }

    const tryAgain = ()=>{
        props.setComputerPoints(0)
        props.setPlayerPoints(0)
        props.createDeck()
        updateScoreToAll()
        props.player.win =0
        props.player.lost =0
        nav('/gamepage')
    }


    const exitAndReset = () =>{
        props.setComputerPoints(0)
        props.setPlayerPoints(0)
        props.createDeck()
        updateScoreToAll()
        props.player.win =0
        props.player.lost =0
        nav('/');
    }
  return (
    <div>
        {checkWinner()}
        <button onClick={()=>tryAgain()}>Try again</button>
        <button onClick={()=>exitAndReset()}>יציאה</button>
    </div>
    
  )
}
