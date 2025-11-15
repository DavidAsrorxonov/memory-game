import { useEffect, useState } from "react";
import { cardValues } from "../constants/cardValues";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

function App() {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <>
      <div className="app">
        <GameHeader score={3} moves={10} />

        <div className="cards-grid">
          {cardValues.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
