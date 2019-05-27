import React from "react";

const squareStyle = {
  width: "100%",
  height: "100%"
};

const Square = ({ isBlack, children }) => {
  const fill = isBlack ? "black" : "white";
  const stroke = isBlack ? "white" : "black";
  return <div style={Object.assign({}, squareStyle, { color: stroke, backgroundColor: fill })}>{children}</div>;
};

export default Square;
