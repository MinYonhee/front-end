"use client";
import React, { useRef, useState } from "react";
import "./globals.css";

export default function JogoDados() {
  const rodadaRef = useRef(1);
  const placarRef = useRef([0, 0]);
  const vitoriasRef = useRef([0, 0]);
  const [dados, setDados] = useState(["/assets/image.png", "/assets/image.png"]);
  const [vencedorFinal, setVencedorFinal] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [jogadorAtivo, setJogadorAtivo] = useState(0);

  const reiniciarJogo = () => {
    rodadaRef.current = 1;
    placarRef.current = [0, 0];
    vitoriasRef.current = [0, 0];
    setDados(["/assets/image.png", "/assets/image.png"]);
    setVencedorFinal("");
    setMostrarResultado(false);
    setJogadorAtivo(0);
  };

  const rolarDado = (jogador) => {
    const novoDados = [...dados];
    novoDados[jogador] = "/assets/image.png";
    setDados(novoDados);

    setTimeout(() => {
      const valor = Math.floor(Math.random() * 6) + 1;
      novoDados[jogador] = `/assets/dice-${valor}.png`;
      setDados([...novoDados]);

      placarRef.current[jogador] = valor;

      if (placarRef.current[0] !== 0 && placarRef.current[1] !== 0) {
        const vencedorRodada =
          placarRef.current[0] > placarRef.current[1]
            ? 0
            : placarRef.current[0] < placarRef.current[1]
            ? 1
            : null;

        if (vencedorRodada !== null) {
          vitoriasRef.current[vencedorRodada]++;
        }

        placarRef.current = [0, 0];

        const proximaRodada = rodadaRef.current + 1;

        setTimeout(() => {
          setDados(["/assets/image.png", "/assets/image.png"]);

          if (proximaRodada > 5) {
            const final =
              vitoriasRef.current[0] > vitoriasRef.current[1]
                ? "Jogador 1 ganhou!"
                : vitoriasRef.current[0] < vitoriasRef.current[1]
                ? "Jogador 2 ganhou!"
                : "Empate!";
            setVencedorFinal(final);
            setMostrarResultado(true);
          } else {
            rodadaRef.current = proximaRodada;
            setJogadorAtivo(0);
          }
        }, 1200);
      } else {
        setJogadorAtivo(jogador === 0 ? 1 : 0);
      }
    }, 1000);
  };

  return (
    <div className="container">
      {!mostrarResultado && <h1 className="rodada">Rodada {rodadaRef.current} / 5</h1>}

      <div className="gameBoard">
        {[0, 1].map((jogador, index) => (
          <React.Fragment key={jogador}>
            <div className="player">
              <h2>Jogador {jogador + 1}</h2>
              <img src={dados[jogador]} alt={`Dado ${jogador + 1}`} className="dice" />
              <button
                onClick={() => rolarDado(jogador)}
                disabled={jogador !== jogadorAtivo || mostrarResultado}
                className="playButton"
              >
                Rolar Dado
              </button>
            </div>

            {index === 0 && <div className="divider" />}
          </React.Fragment>
        ))}
      </div>

      <h2 className="score">Placar: {vitoriasRef.current[0]} x {vitoriasRef.current[1]}</h2>

      {mostrarResultado && (
        <div className="resultado">
          <h2 className="gameResult">{vencedorFinal}</h2>
          <button onClick={reiniciarJogo} className="resetButton">
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
