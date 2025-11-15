import { useEffect, useState } from "react";
import { cardValues } from "../constants/cardValues";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
    setIsLocked(false);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    ) {
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
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);

          setScore((prev) => prev + 1);

          setCards((prev) =>
            prev.map((c) => {
              if (c.id === firstCard.id || c.id === card.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);

          setIsLocked(false);
        }, 500);
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

          setIsLocked(false);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

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
