import React from "react";
import { DragSource, DragPreviewImage } from "react-dnd";
import knightImage from "../../assets/images/knightImage";
import Component from "./Knight.component";

const KNIGHT = "knight";

const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => (
  <>
    <DragPreviewImage connect={connectDragPreview} src={knightImage} />
    <Component connectDragSource={connectDragSource} isDragging={isDragging} />
  </>
);

export default DragSource(KNIGHT, { beginDrag: _ => ({}) }, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(Knight);
