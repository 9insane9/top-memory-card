import cards from "../cardData";
import Card from "./Card";
import { useState } from "react";

export default function Game({ difficulty, backToMenuFn }) {
    const [cardList, setCardList] = useState(cards.slice(0, difficulty.cardAmount - 1))
    const [cardsClicked, setCardsClicked] = useState([])
    const [isFlipped, setIsFlipped] = useState(true)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)

    const [highScore, setHighScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)

    function randomCards(playTurn) {
        return cardList
            .map((card) => (
                <Card 
                    key={card.alt}
                    alt={card.alt}
                    src={card.src}
                    playTurnFn={playTurn}
                    isFlipped={isFlipped}
                />
            ))
            .sort(() => Math.random() - 0.5)
            .slice(0, difficulty.displayAmount)
    }

    function playTurn(characterName) {
        if (isClickDisabled) return
        
        setIsClickDisabled(true)
        setIsFlipped(false)

        setTimeout(() => {
            setIsClickDisabled(false)
        }, 650)

        setTimeout(() => {
            setIsFlipped(true)

            if (cardsClicked.includes(characterName)) {
                console.log("Game Over!")
                setIsGameOver(true)
                setIsClickDisabled(true)
    
                currentScore > highScore ? setHighScore(currentScore) : null
                setCurrentScore(0)
                setCardsClicked([])
            }
    
            if (!cardsClicked.includes(characterName)) {
                setCardsClicked((prev) => [...prev, characterName])
                setCurrentScore((prev) => prev + 1)
                console.log("Goob yob")
            }
        }, 650)
    }

    function resetGame() {
        setCardsClicked([])
        setCurrentScore(0)
        setIsGameOver(false)
        setIsClickDisabled(false)
    }

    function endGame() {
        setCardList([])
        resetGame()
        backToMenuFn()
    }

    return (
        <div className="game-container">
            <div className="top-bar">
                <button className="back-to-menu" onClick={() => endGame()}>↵ Back</button>
                <div className="counter">{`${cardsClicked.length} / ${difficulty.cardAmount}`}</div>
                <p className="high-score">Best: {highScore}</p>
            </div>
            <div className={`card-container ${isClickDisabled ? "disabled" : ""}`}>
                {randomCards(playTurn)}
            </div>
            {isGameOver && 
                <div className="game-over">
                    <h2>Game over!</h2>
                    <button className="restart" onClick={resetGame}>Restart</button>
                </div>
            }
        </div>
    )
}

