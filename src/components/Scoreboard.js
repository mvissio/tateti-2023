import React from 'react';
import { Typography } from '@mui/material';

const Scoreboard = ({ scores }) => (
  <div>
    <Typography variant="h6">Marcador:</Typography>
    <Typography variant="body1">X ha ganado: {scores.X}</Typography>
    <Typography variant="body1">O ha ganado: {scores.O}</Typography>
    <Typography variant="body1">Empates: {scores.draw}</Typography>
  </div>
);

export default Scoreboard;
