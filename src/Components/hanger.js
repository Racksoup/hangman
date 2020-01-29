import React from "react";
import "../ComponentCss/hanger.css";

// loop upto player misses returning array of images showing
// the current hang-man player miss stage
// naming for image source was tricky. webpack wouldn't allow normal naming
// had to set variable with require() rather than import
function HangImage(props) {
  let list = [];
  for (let i = 0; i <= props.missCount; i++) {
    let src = require(`../Images/stage${i}.png`);
    list.push(<img src={src} alt={`stage${i}`} className="stage" />);
  }
  return list;
}

// displays HangImage and number of player miss
function Hanger(props) {
  return (
    <div className="hanger">
      <HangImage missCount={props.missCount} />
      <div style={{ fontSize: "100px", position: "absolute" }}>
        {props.missCount}
      </div>
    </div>
  );
}

export default Hanger;
