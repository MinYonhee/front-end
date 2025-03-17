"use client";
import React, { useState } from "react";

const Dice = ({ roll }) => (
  <img
    src={roll === null ? "assets/image.png" : `assets/dice-${roll}.png` }
    alt={roll === null ? "Logo do jogo" : `Dado ${roll}`}
    width={100}
    height={100}
  />
);

const DiceGame = () => {
  const [playerOneRoll, setPlayerOneRoll] = useState(null);
  const [playerTwoRoll, setPlayerTwoRoll] = useState(null);
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState(null);

  const rollDice = (player) => {
    if (round > 5 || winner) return; 

    const newRoll = Math.floor(Math.random() * 6) + 1;

    if (player === 1) {
      setPlayerOneRoll(newRoll);
    } else if (player === 2) {
      setPlayerTwoRoll(newRoll);
      determineWinner(newRoll);
    }
  };

  const determineWinner = (playerTwoNewRoll) => {
    setTimeout(() => {
      let newScoreOne = scoreOne;
      let newScoreTwo = scoreTwo;

      if (playerOneRoll > playerTwoNewRoll) {
        newScoreOne += 1;
      } else if (playerOneRoll < playerTwoNewRoll) {
        newScoreTwo += 1;
      }

      setScoreOne(newScoreOne);
      setScoreTwo(newScoreTwo);

      if (round === 5) {
        setTimeout(() => {
          if (newScoreOne > newScoreTwo) {
            setWinner("Jogador 1 ganhou!");
          } else if (newScoreOne < newScoreTwo) {
            setWinner("Jogador 2 ganhou!");
          } else {
            setWinner("Empate!");
          }
        }, 1000);
      } else {
        setRound((prevRound) => prevRound + 1);
      }

      setPlayerOneRoll(null);
      setPlayerTwoRoll(null);
    }, 1000);
  };

  const restartGame = () => {
    setPlayerOneRoll(null);
    setPlayerTwoRoll(null);
    setScoreOne(0);
    setScoreTwo(0);
    setRound(1);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6">
      <h1 className="text-2xl font-bold">Rodada {round} / 5</h1>

      <div className="flex space-x-12">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Jogador 1</h2>
          <Dice roll={playerOneRoll} />
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md disabled:opacity-50"
            onClick={() => rollDice(1)} 
            disabled={playerOneRoll !== null || round > 5 || winner}
          >
            Rolar Dado
          </button>
        </div>

        <div className="border-l border-gray-400 h-24"></div>

        <div className="text-center">
          <h2 className="text-lg font-semibold">Jogador 2</h2>
          <Dice roll={playerTwoRoll} />
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md disabled:opacity-50"
            onClick={() => rollDice(2)} 
            disabled={playerOneRoll === null || playerTwoRoll !== null || round > 5 || winner}
          >
            Rolar Dado
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold">Placar: {scoreOne} x {scoreTwo}</h2>

      {winner && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{winner}</h2>
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md mt-4"
            onClick={restartGame}
          >
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}

export default DiceGame;