import { useState } from "react"
import Game from "./Components/Game"

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState(null)

  function backToMenu() {
    setGameStarted(false)
    setDifficulty(null)
  }

  function startGame(difficulty) {
    const modes = {
      easy: { cardAmount: 10, displayAmount: 4 },
      medium: { cardAmount: 15, displayAmount: 6 },
      hard: { cardAmount: 20, displayAmount: 8 }
    }

    setDifficulty(modes[difficulty])
    setGameStarted(true)

    console.log(`difficulty set to ${difficulty}`)
  }

  const menu = <div className="menu">
                  <div className="difficulty">
                    <button onClick={() => startGame("easy")}>Easy</button>
                    <button onClick={() => startGame("medium")}>Medium</button>
                    <button onClick={() => startGame("hard")}>Hard</button>
                  </div>
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
