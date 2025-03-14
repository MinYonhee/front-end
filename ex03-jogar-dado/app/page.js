"use client"
import React, { useState } from "react";

const Dice = () => {

  const [playerOne, setPlayerOne] = useState(1);
  const [playerTwo, setPlayerTwo] = useState(1);
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);

  const rollingDices = () => {
    const newPlayerOne = Math.floor(Math.random() * 6) + 1;
    const newPlayerTwo = Math.floor(Math.random() * 6) + 1;
   
    setPlayerOne(newPlayerOne);
    setPlayerTwo(newPlayerTwo);
  };

  if (newPlayerOne > newPlayerTwo) {
    setWinner("Joagador Número 1 é o VENCEDOR!!!");
    setScoreOne = (scoreOne + 1);
  } else if (newPlayerOne < newPlayerTwo) {
    setWinner("Joagador Número 2 é o VENCEDOR!!!");
    setScoreTwo = (scoreTwo + 1);

  }

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      textAlign: "center", 
      height: "100vh",
      gap: "20px",
    }}>
      <h1>Go! Roll the Dice!</h1>
      <img src={`assets/dice-${value}.png`} alt={`Dice ${value}`} width={200}/>

    <br/>

    <button onClick={rollingDices} style={{
      marginTop:"0px",
      padding: "10px 10px",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      adding: "12px 24px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
      transition: "0.3s"

    }}>
      Roll the Dice!
    </button>

    </div>
)};

  export default Dice;