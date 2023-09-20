import React from "react"
import "../styles.css"

export default function Winner(props) {
    let output
    
    // Fixing the style and creating the displayed result for the results of the round
    if (props.winner === "none") {
        output = <h2 className="dark-grey">Tie!</h2>
    } else if (props.winner !== "") {
        const classPlayer = props.winner === "X" ? "color--player1" : "color--player2"
        output = <h2 className={classPlayer}>{props.winner} is the winner!</h2>
    }

    // Incrementing the winner's score
    let {endGame, setWins, winner} = props
    const playerNo = props.winner === "X" ? 0 : 1;

    React.useEffect(() => {
        // Setting the player number
        if (winner !== "none") {
            setWins(prevWins => {
                return prevWins.map((score, idx) => {
                    return idx === playerNo ? score + 0.5 : score
                })
            })
        }
    }, [endGame, playerNo, setWins, winner])

    return (
        <div className="winner--result">
            {output}
        </div>
    )
}