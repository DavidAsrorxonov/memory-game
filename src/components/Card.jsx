import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-back">{card}</div>
    </div>
  );
};

export default Card;
