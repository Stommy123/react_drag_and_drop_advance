import React, { useState } from 'react';
import { Knight, Square } from './components';

const Board = _ => {
  const [knightPosition, updateKnightPosition] = useState([0, 0]);
  const renderSquare = (x, y, [knightX, knightY]) => {
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;
  };
  return (
    <div className="board">
      <Square isBlack>
        <Knight />
      </Square>
    </div>
  );
};

export default Board;
