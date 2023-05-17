import React from 'react';
import { Button } from '@mui/material';

// Este componente representa un cuadrado en el tablero
const Square = ({ value, onClick, isWinningSquare }) => {
  // Si el cuadrado es parte de la línea ganadora, se le asigna el color de éxito (verde)
  return (
    <Button
      variant="outlined"
      color={isWinningSquare ? "success" : "primary"}
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}>
      {value}
    </Button>
  );
};

export default Square;
