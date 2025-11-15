import { useEffect, useState } from "react";
import { cardValues } from "../constants/cardValues";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "../hooks/useGameLogic";

function App() {
  const { cards, score, moves, isGameOver, initializeGame, handleCardClick } =
    useGameLogic(cardValues);

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

        {isGameOver && <WinMessage moves={moves} />}

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card card={card} key={index} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
