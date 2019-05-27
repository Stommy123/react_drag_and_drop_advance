import React, { useState, useEffect } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Board } from "./components";
import { observe } from "./Game";

const containerStyle = {
  width: 500,
  height: 500,
  border: "1px solid gray"
};

const App = _ => {
  const [knightPos, setKnightPos] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setKnightPos(newPos)));
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div style={containerStyle}>
        <Board knightPosition={knightPos} />
      </div>
    </DragDropContextProvider>
  );
};

export default App;
