"use client"
import React, { useState } from "react";

const Dice = ({ valor }) => {
  return (
    <img src={`assets/dice-${valor}.png`} alt={`Dice ${valor}`} width={200} />
  );
};

  const DiceGame = () => {
  const [value, setValue] = useState(1);

  const rollingDice = () => {
    setValue(Math.floor(Math.random() * 6) + 1);
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>Go! Roll the Dice!</h1>
      <Dice valor={value} />

      <button
        onClick={rollingDice}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
          transition: "0.3s",
        }}
      >
        Roll the Dice!
      </button>
    </div>
  );
};

export default DiceGame;