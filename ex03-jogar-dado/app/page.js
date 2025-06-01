"use client";
import React, { useRef, useState } from "react";

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {!mostrarResultado && (
        <h1 style={{ fontWeight: "bold" }}>Rodada {rodadaRef.current} / 5</h1>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          marginTop: "30px",
        }}
      >
        {[0, 1].map((jogador, index) => (
          <React.Fragment key={jogador}>
            <div style={{ textAlign: "center" }}>
              <h2>Jogador {jogador + 1}</h2>
              <img
                src={dados[jogador]}
                alt={`Dado ${jogador + 1}`}
                width="80"
              />
              <br />
              <button
                onClick={() => rolarDado(jogador)}
                disabled={jogador !== jogadorAtivo || mostrarResultado}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#bb6ef5",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  opacity: jogador !== jogadorAtivo || mostrarResultado ? 0.5 : 1,
                }}
              >
                Rolar Dado
              </button>
            </div>

            {index === 0 && (
              <div
                style={{
                  width: "1px",
                  height: "120px",
                  backgroundColor: "#ccc",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Placar sempre visível */}
      <h2 style={{ marginTop: "30px" }}>
        Placar: {vitoriasRef.current[0]} x {vitoriasRef.current[1]}
      </h2>

      {/* Resultado final e botão de reinício */}
      {mostrarResultado && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ color: "black" }}>{vencedorFinal}</h2>
          <button
            onClick={reiniciarJogo}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#1f8f3a",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
