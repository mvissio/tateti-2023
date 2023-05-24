import React from 'react';
import { Button } from '@mui/material';

const Square = ({ value, onClick, isWinningSquare }) => {
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
