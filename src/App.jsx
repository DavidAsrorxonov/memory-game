import { cardValues } from "../constants/cardValues";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

function App() {
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
