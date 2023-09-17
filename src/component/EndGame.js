import React from "react"
import "../styles.css"
import cellData from "../CellData"

export default function EndGame(props) {
    // Start a new round
    function clickNewRound() {
        props.setGameOn(true)
        props.setEndGame(false)
        props.setBoard(Array(9).fill(""))
        props.setCells(cellData)
        props.setRounds(prevRounds => prevRounds + 1)
    }

    // Reset and start a new game
    function resetGame() {
        window.location.reload();
    }

    return (
        <div className="endgame--container">
            <button onClick={clickNewRound}>New Round</button>
            <button onClick={resetGame}>New Game</button>
        </div>
    )
}