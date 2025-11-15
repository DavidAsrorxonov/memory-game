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

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
  };

  return (
    <>
      <div className="app">
        <GameHeader score={3} moves={10} />

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
