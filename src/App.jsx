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
    setDifficulty(difficulty)
    setGameStarted(true)
    console.log(`difficulty (card amount) set to ${difficulty}`)
  }

  const menu = <div className="menu">
                  <div className="difficulty">
                    <button onClick={() => startGame(10)}>Easy</button>
                    <button onClick={() => startGame(15)}>Medium</button>
                    <button onClick={() => startGame(20)}>Hard</button>
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
