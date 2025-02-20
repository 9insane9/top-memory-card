import Tilt from "react-parallax-tilt";
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

export default function Card({ src, alt, playTurnFn }) {
  const [isFlipped, setIsFlipped] = useState(true)
  
  const flipIn = keyframes`
    from {
        transform: perspective(1000px) rotateY(-180deg);
    }
    to {
        transform: perspective(1000px) rotateY(0deg);
    }
  `

  const flipOut = keyframes`
    from {
        transform: perspective(1000px) rotateY(0);
    }
    to {
        transform: perspective(1000px) rotateY(180deg);
    }
  `

        const CardFront = styled.div`
            display: inline-block;
            animation-timing-function: cubic-bezier(0.32, 1.6, 0.44, 1);
            animation: ${isFlipped ? flipIn : flipOut} 1s;
            transform-origin: cente
            transform: perspective(1000px) rotateY(0deg);
            backface-visibility: hidden;
            transform-style: preserve-3d;
            `

        const CardBack = styled.div`
            transform: perspective(1000px) rotateY(-180deg);
            display: inline-block;
            animation-timing-function: cubic-bezier(0.32, 1.6, 0.44, 1);
            animation: ${!isFlipped ? flipIn : flipOut} 1s;
            transform-origin: center;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            `



  function flipAndPlayTurn() {
    setIsFlipped(false)

    setTimeout(() => {
      setIsFlipped(true)
      playTurnFn(alt)
    }, 1000)    
  }

  return (
    <Tilt
        reset={true}
      glareEnable={true}
      glareMaxOpacity={0.4}
      perspective={1000}
      glareBorderRadius="10px"
    >
      <div className="card" onClick={() => flipAndPlayTurn()}>
        <CardFront className="card-front">
          <div className="img-wrapper">
            <img className="card-img" src={src} alt={alt} />
          </div>
          <h2 className="card-title">{alt}</h2>
        </CardFront>
        <CardBack className="card-back"></CardBack>
      </div>
    </Tilt>
  );
}
