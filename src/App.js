import React from "react"
import "./styles.css"
import Grid from "./component/Grid"
import EndGame from "./component/EndGame"
import PlayerNo from "./component/PlayerNo"
import cellData from "./CellData"

export default function App() {
    const [gameOn, setGameOn] = React.useState(false)
    const [playerReady, setPlayerReady] = React.useState([false, false])
    const [playerNames, setPlayerNames] = React.useState(["", ""])
    const [wins, setWins] = React.useState([0, 0])
    const [endGame, setEndGame] = React.useState(false)
    const [board, setBoard] = React.useState(Array(9).fill(""))
    const [cells, setCells] = React.useState(cellData)
    const [rounds, setRounds] = React.useState(1)
    const [player, setPlayer] = React.useState(rounds % 2 === 0 ? "O" : "X")

    // Every time a new round starts, a different player starts
    React.useEffect(() => {
        setPlayer(rounds % 2 === 0 ? "O" : "X")
    }, [rounds])

    // Determine when both players are ready to start the game
    React.useEffect(() => {
        // Change the state of the game if both players are ready
        setGameOn(playerReady[0] && playerReady[1])
    }, [playerReady])

    return (
        <div className="app--container">
            <PlayerNo 
                playerNo={1}
                setPlayerReady={setPlayerReady}
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                playerReady={playerReady}
                setGameOn={setGameOn}
                gameOn={gameOn}
                wins={wins}
                currentPlayer={player}
            />
            <Grid 
                gameOn={gameOn}
                setGameOn={setGameOn}
                endGame={endGame}
                setEndGame={setEndGame}
                setWins={setWins}
                board={board}
                setBoard={setBoard}
                cells={cells}
                setCells={setCells}
                rounds={rounds}
                player={player}
                setPlayer={setPlayer}
            />
            {endGame && 
            <EndGame
                endGame={endGame}
                rounds={rounds}
                setEndGame={setEndGame}
                setGameOn={setGameOn}
                setBoard={setBoard}
                setCells={setCells}
                setRounds={setRounds}
                setPlayer={setPlayer}
            />}
            <PlayerNo
                playerNo={2}
                setPlayerReady={setPlayerReady}
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                playerReady={playerReady}
                setGameOn={setGameOn}
                gameOn={gameOn}
                wins={wins}
                currentPlayer={player}
            />
        </div>
    )
}