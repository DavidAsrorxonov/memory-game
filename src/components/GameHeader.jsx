import React from "react";

const GameHeader = () => {
  return (
    <div className="game-header">
      <h1>Memory Card Game</h1>
      <div className="stats">
        <div className="stat-item">Score: 0</div>
        <div className="stat-item">Moves: 0</div>
      </div>
    </div>
  );
};

export default GameHeader;
