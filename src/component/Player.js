import React from "react"
import "../styles.css"
                
// This will render the player's name and score
export default function Player(props) {
    return (
        <div className="player--info">
                <h2 className={`player--name ${props.classPlayer}`}>{props.playerNames[props.playerNo - 1]}</h2>
                <div className="player--score">
                    <h2 className="player--score-text">Score:</h2>
                    <h1 className="player--score-no">{props.wins[props.playerNo - 1]}</h1>
                </div>
        </div>
    )
}