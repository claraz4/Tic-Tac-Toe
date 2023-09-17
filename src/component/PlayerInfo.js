import React from "react"
import "../styles.css"

// This is the opening page of a new game (set the players' names)
export default function PlayerInfo(props) {
    // Handle the play button click: edit the name of the player and keep track of the change
    function handleClick(event) {
        event.preventDefault()

        props.setPlayerReady(prevPlayerReady => {
            return prevPlayerReady.map((player, idx) => {
                return idx === props.playerNo - 1 ? true : player
            })
        }
        )
    }

    return (
        <div className="player--input-container">
            <input 
                type="text" 
                placeholder={`Player ${props.playerNo}`} 
                autoFocus="on" 
                autoComplete="off"
                onChange={props.handleInput}
                className="player--textbox"
                ></input>
            <button 
                type="button" 
                className={`player--player-button ${props.playerNo === 1 ? "blue-button" : "red-button"}`} 
                onClick={handleClick}>Play</button>
        </div>
    )
}