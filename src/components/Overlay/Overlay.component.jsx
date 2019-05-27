import React from "react";

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 1,
  opacity: 0.5
};

const Overlay = ({ color }) => <div style={Object.assign({}, overlayStyles, { backgroundColor: color })} />;

export default Overlay;
