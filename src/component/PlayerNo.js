import React from "react"
import "../styles.css"
import PlayerInfo from "./PlayerInfo"
import Player from "./Player"

export default function PlayerNo(props) {
    // Save the user's input
    function handleInput(event) {
        props.setPlayerNames(prevNames => {
            return prevNames.map((player, idx) => {
                return idx === props.playerNo - 1 ? event.target.value : player
            })
        })
    }

    // Deciding on the text color of the player
    const classPlayer = props.playerNo === 1 ? "color--player1" : "color--player2"

    // Setting the style depending on the player to display the turn of the current player
    const player = props.playerNo === 1 ? "X" : "O" 
    const isActive = props.gameOn && props.currentPlayer === player ? true : false  // checking who's the current player

    let style = ""
    if (isActive) {
        style = props.playerNo === 1 ? "active-blue" : "active-red"
    }

    // Render the opening page if the game is not on and the normal page when the game is
    return (
        <div className={`player--container ${style}`}>
            <h1 className={`${classPlayer} underline`}>Player {props.playerNo}:</h1>
            {props.playerReady[props.playerNo - 1] && 
            <Player 
                playerNo={props.playerNo}
                setPlayerReady={props.setPlayerReady}
                playerNames={props.playerNames}
                setPlayerNames={props.setPlayerNames}
                playerReady={props.playerReady}
                wins={props.wins}
                classPlayer={classPlayer}
                setGameOn={props.setGameOn}
            />}
            {!props.playerReady[props.playerNo - 1] && 
            <PlayerInfo 
                playerNo={props.playerNo}
                setPlayerReady={props.setPlayerReady}
                playerNames={props.playerNames}
                setPlayerNames={props.setPlayerNames}
                playerReady={props.playerReady}
                wins={props.wins}
                classPlayer={classPlayer}
                handleInput={handleInput}
                setGameOn={props.setGameOn}
            />}
        </div>
    )
}