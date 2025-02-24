import cards from "../cardData";
import Card from "./Card"
import { useState, useEffect } from "react"

export default function Game({ difficulty, backToMenuFn }) {
    const [cardList, setCardList] = useState([])
    const [previousCardList, setPreviousCardList] = useState(null)
    const [cardsClicked, setCardsClicked] = useState([])
    const [isFlipped, setIsFlipped] = useState(true)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [renderCount, setRenderCount] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)

    useEffect(() => {
        if (renderCount === 0) {            
            setCardList(shuffleCards(cards, difficulty.displayAmount))

        } else if (renderCount % 2 !== 0 && previousCardList) {
            setCardList(shuffleCards(cards, difficulty.displayAmount))

        } else {
            setCardList(previousCardList)
        }
    }, [renderCount])

    function shuffleCards(cardPool, amount) {
        return [...cardPool]
            .sort(() => Math.random() - 0.5)
            .slice(0, amount)
    }

    function randomCards(playTurn) {
        return cardList.map((card) => (
            <Card 
                key={card.alt}
                alt={card.alt}
                src={card.src}
                playTurnFn={playTurn}
                isFlipped={isFlipped}
            />
        ))
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
                if (currentScore > highScore) setHighScore(currentScore)
                setCurrentScore(0)
                setCardsClicked([])
            } else {
                setCardsClicked(prev => [...prev, characterName])
                setCurrentScore(prev => prev + 1)
                console.log("Good job")
            } if (cardsClicked.length + 1 === difficulty.cardAmount) {
                console.log("You win!")
                setIsGameOver(true)
                setIsClickDisabled(true)
                if (currentScore + 1 > highScore) setHighScore(currentScore + 1)
                return
            }

            setPreviousCardList(cardList)
            setRenderCount(prev => prev + 1)
        }, 650)
    }

    function resetGame() {
        setCardsClicked([])
        setCurrentScore(0)
        setIsGameOver(false)
        setIsClickDisabled(false)
        setPreviousCardList(null)
        setRenderCount(0)
    }

    function endGame() {
        setCardList([])
        resetGame()
        backToMenuFn()
    }

    return (
        <div className="game-container">
            <div className="top-bar">
                <button className="back-to-menu" onClick={endGame}>↵ Back</button>
                <div className="counter">{`${cardsClicked.length} / ${difficulty.cardAmount}`}</div>
                <p className="high-score">Best: {highScore}</p>
            </div>
            <div className={`card-container ${isClickDisabled ? "disabled" : ""}`}>
                {randomCards(playTurn)}
            </div>
            {isGameOver && 
                <div className="game-over">
                    <h2>{cardsClicked.length === difficulty.cardAmount ? "You win!" : "You lose!"}</h2>
                    <button className="restart" onClick={resetGame}>Restart</button>
                </div>
            }
        </div>
    )
}
