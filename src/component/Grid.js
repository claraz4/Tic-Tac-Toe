import React from "react"
import "../styles.css"
import Cell from "./Cell"
import Winner from "./Winner"

export default function Grid(props) {
    const {player, setPlayer} = props
    const [gridCells, setGridCells] = React.useState([])

    // Switch from X player to O and vice-versa
    function changePlayer() {
        setPlayer(player => {
            if (player === "X") {
                return "O"
            } else {
                return "X"
            }
        })
    }

    // Updating the board
    function updateBoard(order) { 
        props.setBoard(prevBoard => {
            return prevBoard.map((cell, idx) => {
                if (idx === order - 1) {
                    return player
                } else {
                    return cell
                }
            })
        })

        updatePlayer(order)
    }

    // Update the player's cell state to place their sign
    function updatePlayer(order) {
        props.setCells(prevCells => {
            return prevCells.map((cell) => {
                return cell.order === order ? {...cell, player: `${player}`} : cell
            })
        })
    }

    // Stopping the game the game and storing the winner
    const [winner, setWinner] = React.useState("")
    function stopGame(player, isTie) {
        props.setGameOn(false)
        props.setEndGame(true)
        if (isTie) {
            setWinner("none")
        } else {
            setWinner(player)
        }
    }

    // Constructing the array to render the cells 
    React.useEffect(() => {
        const newGridCells = props.cells.map((cell) => {
          return (
            <Cell
              className="cell"
              key={cell.order}
              changePlayer={changePlayer}
              updateBoard={() => updateBoard(cell.order)}
              board={props.board}
              id={cell.id}
              order={cell.order}
              stopGame={stopGame}
              gameOn={props.gameOn}
              player={cell.player}
              currentPlayer={player}
              cells={props.cells}
            />
          );
        });
        setGridCells(newGridCells);
    }, [props.cells, props.board, player, props.gameOn])
     
    return (
        <div className="grid--container-results">
            <div className="grid--container">{gridCells}</div>
            {props.endGame &&
                <Winner 
                    winner={winner}
                    setWins={props.setWins}
                    endGame={props.endGame}
                />
            }
        </div>
    )
}