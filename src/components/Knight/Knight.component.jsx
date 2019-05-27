import React from "react";

const knightStyles = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};

const Knight = ({ connectDragSource, isDragging }) => (
  <div ref={connectDragSource} style={Object.assign({}, knightStyles, { opacity: isDragging ? 0.5 : 1 })}>
    ♘
  </div>
);

export default Knight;
