import cards from "../cardData";
import Card from "./Card";
import { useState } from "react";

export default function Game({ difficulty, backToMenuFn }) {
    const [cardList, setCardList] = useState(cards.slice(0, difficulty.cardAmount - 1))
    const [cardsClicked, setCardsClicked] = useState([])
    const [isFlipped, setIsFlipped] = useState(true)
    //  const [isAnimating, setIsAnimating] = useState(false)

    const [highScore, setHighScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)

    function randomCards(playTurn) {
        const cardEls = cardList.map((card) => {
            return (
                <Card 
                    key={card.alt}
                    alt={card.alt}
                    src={card.src}
                    playTurnFn={playTurn}
                    isFlipped={isFlipped}
                />
            )
        })

        const allCardsRandomized = cardEls.sort(() => Math.random() - 0.5)
        const cardsToDisplay = allCardsRandomized.slice(0, difficulty.displayAmount)

        return cardsToDisplay
    }

    function playTurn(characterName) {
        setIsFlipped(false)

        setTimeout(() => {
            setIsFlipped(true)

            if (cardsClicked.includes(characterName)) {
                console.log("Game Over!")
    
                currentScore > highScore ? setHighScore(currentScore) : null
                setCurrentScore(0)
                setCardsClicked([])
            }
    
            if (!cardsClicked.includes(characterName)) {
                setCardsClicked((prev) => [...prev, characterName])
                setCurrentScore((prev) => prev + 1)
                console.log("Goob yob")
            }
        }, 750)
    }

    function resetGame() {
        setCardList([])
        setCardsClicked([])
        setCurrentScore(0)
        backToMenuFn()
    }

    return (
        <div className="game-container">
            <button className="back-to-menu" onClick={() => resetGame()}>Back to menu</button>
            <div className="score-container">
                <p className="high-score">Highscore: {highScore}</p>
                <p className="current-score">Current: {currentScore}</p>
            </div>
            <div className="card-container">
                {randomCards(playTurn)}
            </div>
            <div className="counter">{`${cardsClicked.length} / ${difficulty.cardAmount}`}</div>
        </div>
    )
}