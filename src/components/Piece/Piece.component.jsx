import React from "react";
import { Knight } from "..";

const Piece = ({ isKnight }) => (isKnight ? <Knight /> : null);

export default Piece;
