import React from "react";
import { DropTarget } from "react-dnd";
import Component from "./Square.component";
import { canMoveKnight, moveKnight } from "../../Game";
import { Overlay } from "..";

const KNIGHT = "knight";

const boardSquareStyle = {
  position: "relative",
  width: "100%",
  height: "100%"
};

const Square = ({ x, y, connectDropTarget, isOver, canDrop, children }) => {
  const isBlack = (x + y) % 2 === 1;
  return connectDropTarget(
    <div style={boardSquareStyle}>
      <Component isBlack={isBlack}>{children}</Component>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};

export default DropTarget(
  KNIGHT,
  {
    canDrop: props => canMoveKnight(props.x, props.y),
    drop: props => moveKnight(props.x, props.y)
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: !!monitor.isOver(),
    canDrop: !!monitor.canDrop()
  })
)(Square);
