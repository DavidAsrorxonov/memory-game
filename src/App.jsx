import { useEffect, useState } from "react";
import { cardValues } from "../constants/cardValues";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

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

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        alert("Match!");
      } else {
        setTimeout(() => {
          const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);

          setFlippedCards([]);
        }, 1000);
      }
    }
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
