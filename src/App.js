import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import Scoreboard from './components/Scoreboard';
import { Container, Button, Box, Typography } from '@mui/material';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo.winner;

  useEffect(() => {
    if (winner === 'X') {
      setScores((scores) => ({ ...scores, X: scores.X + 1 }));
    } else if (winner === 'O') {
      setScores((scores) => ({ ...scores, O: scores.O + 1 }));
    } else if (!board.includes(null)) {
      setScores((scores) => ({ ...scores, draw: scores.draw + 1 }));
    }
  }, [winner, board]);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  // Esta función reinicia el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  }

  return (
    <Container maxWidth="xs">
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          TA-TE-TI - Marcos Vissio
        </Typography>
        <Scoreboard scores={scores} />
        <Board squares={board} winningSquares={winnerInfo.line} onClick={handleClick} />
        <Box my={2}>
          <Typography variant="h6">
            {winner ? 'Ganador: ' + winner : !board.includes(null) ? 'Empate' : 'Siguiente Jugador: ' + (xIsNext ? 'X' : 'O')}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={resetGame}>
          Reiniciar Juego
        </Button>
      </Box>
    </Container>
  );
};

export default App;
