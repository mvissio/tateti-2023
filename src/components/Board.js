import React from 'react';
import Square from './Square';

// Este componente representa el tablero de juego
const Board = ({ squares, onClick, winningSquares }) => {
  // Esta función renderiza un cuadrado en el tablero
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinningSquare={winningSquares.includes(i)}
      />
    );
  }

  // Estilo para el tablero del juego
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
  };

  return (
    <div style={style}>
      {Array(9).fill(null).map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;
