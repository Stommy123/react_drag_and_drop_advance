import React from "react";
import { Piece, Square } from "..";

const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};

const squareStyle = { width: "12.5%", height: "12.5%" };

const Board = ({ knightPosition: [knightX, knightY] }) => {
  const renderSquare = i => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnight = x === knightX && y === knightY;
    return (
      <div key={i} style={squareStyle}>
        <Square x={x} y={y}>
          <Piece isKnight={isKnight} />
        </Square>
      </div>
    );
  };
  const squares = [];
  for (let i = 0; i < 64; i++) squares.push(renderSquare(i));
  return <div style={boardStyle}>{squares}</div>;
};

export default Board;
