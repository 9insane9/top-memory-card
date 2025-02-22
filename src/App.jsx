import { useState } from "react"
import Game from "./Components/Game"
import Tilt from "react-parallax-tilt";

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState(null)

  function backToMenu() {
    setGameStarted(false)
    setDifficulty(null)
  }

  function startGame(difficulty) {
    const modes = {
      easy: { cardAmount: 10, displayAmount: 6 },
      medium: { cardAmount: 15, displayAmount: 6 },
      hard: { cardAmount: 20, displayAmount: 6 }
    }

    setDifficulty(modes[difficulty])
    setGameStarted(true)

    console.log(`difficulty set to ${difficulty}`)
  }

const menu =    <div className="difficulty">
                  <h1 className="game-title">Radlands Memory Game</h1>
                  <Tilt perspective={"1000px"}><button onClick={() => startGame("easy")}>Easy</button></Tilt>
                  <Tilt perspective={"1000px"}><button onClick={() => startGame("medium")}>Medium</button></Tilt>
                  <Tilt perspective={"1000px"}><button onClick={() => startGame("hard")}>Hard</button></Tilt>
                </div>

  return (
    <>
      <div className="app-container">
        {!gameStarted 
          ? menu 
          : <Game difficulty={difficulty} backToMenuFn={backToMenu}/>}
      </div>
    </>
  )
}

export default App
