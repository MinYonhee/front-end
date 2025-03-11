"use client"
import React, { useState } from "react";

const Dice = () => {

  const [value, setValue] = useState(1);

  const rollingDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setValue(newValue);
  };


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

    <button onClick={rollingDice} style={{
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