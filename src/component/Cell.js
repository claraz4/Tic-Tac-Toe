import React from "react"
import "../styles.css"

/*
The board:

1   2   3
4   5   6
7   8   9

*/

export default function Cell(props) {
    const text = props.cells[props.order - 1].player
    
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

    function isFull(board) {
        let occupied = 0

        // Count all the occupied places
        for (const cell of board) {
            if (cell !== "") {
                occupied++
            }
        }

        // The board is full (we don't take into consideration the cell just occupied)
        if (occupied === 8) {
            return true
        }

        return false
    }

    function checkWinner(player, position) {
        let gameOn = props.gameOn

        // Every time a player sets a cell, I need to check the diagonal, vertical and horizontal
        for (const combination of winningCombinations) {
            let isWinner = true

            if (combination.includes(position + 1)) {
                for (let i = 0; i < combination.length && isWinner; i++) {
                    // We need to check whether the combinations containing the actual position are all true 
                    // or they hold the player's sign
                    if (combination[i] - 1 !== position && props.board[combination[i] - 1] !== player) {
                        // We ignore the current element in this if condition
                        isWinner = false
                    }
                }
                if (isWinner) {
                    // Stop the game and announce the winner
                    props.stopGame(player, false)
                    gameOn = false
                }
            }
        }

        if (gameOn && isFull(props.board)) {
            // No one wins. It's a tie
            props.stopGame(player, true)
        } else if (gameOn) {
            // We change the player only after making sure that there is no winner nor tie
            props.changePlayer()
        }
    }

    function updateCell() {
        // I need to change the text only if the cell is not already occupied
        if (props.gameOn) {
            if (text === "") {
                props.updateBoard()
                checkWinner(props.currentPlayer, props.order - 1)
            }
        }
    }


    // Choose the style of the text color of the X or O depending on the player
    let style = {color: "#000000"}
    style = {
        color: props.player === "X" ? "#3e3ef1" : "#E24141"
    }

    return (
        <div 
            className={`${props.className}`}
            id={props.id} 
            onClick={updateCell}
            style={style}
        >
            {text}
        </div>
    )
}