import Tilt from "react-parallax-tilt";
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

export default function Card({ src, alt, playTurnFn, isFlipped }) {
  
  const flipIn = keyframes`
    from {
        transform: perspective(1000px) rotateY(-180deg);
        filter: blur(5px);
    }
    to {
        transform: perspective(1000px) rotateY(0deg);
        filter: blur(0px);
    }
  `

  const flipOut = keyframes`
    from {
        transform: perspective(1000px) rotateY(0);
        filter: blur(0px);
    }
    to {
        transform: perspective(1000px) rotateY(180deg);
        filter: blur(5px);
    }
  `

        const CardFront = styled.div`
            display: inline-block;
            animation-timing-function: cubic-bezier(0.05, 2, 0.98, 1);
            animation: ${({ isFlipped }) => (isFlipped ? flipIn : flipOut)} 0.65s;
            transform-origin: center;
            transform: perspective(1000px) rotateY(0deg);
            backface-visibility: hidden;
            transform-style: preserve-3d;
            `

        const CardBack = styled.div`
            transform: perspective(1000px) rotateY(-180deg);
            display: inline-block;
            animation-timing-function: cubic-bezier(0.05, 2, 0.98, 1);
            animation: ${({ isFlipped }) => (!isFlipped ? flipIn : flipOut)} 0.65s;
            transform-origin: center;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            `

  return (
    <Tilt
        reset={true}
      glareEnable={true}
      glareMaxOpacity={0.4}
      perspective={1000}
      glareBorderRadius="10px"
    >
      <div className="card" onClick={() => playTurnFn(alt)}>
        <CardFront className="card-front" isFlipped={isFlipped}>
          <div className="img-wrapper">
            <img className="card-img" src={src} alt={alt} />
          </div>
          {/* <h2 className="card-title">{alt}</h2> */}
        </CardFront>
        <CardBack className="card-back" isFlipped={isFlipped}></CardBack>
      </div>
    </Tilt>
  );
}
