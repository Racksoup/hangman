import React from "react";
import "../ComponentCss/chosenWord.css";

// the ChosenWord box needs to show the underscores always
// if showData === "" becuase the player has not guessed yet
// we need to map every letter of randWord and return '_'
// rather than the letter to theWord variable
// then we return theWord
// else the player has guess and showData has a value
// we map every letter of showData and return the letter to theWord variable
// then we return theWord
function ChosenWord(props) {
  if (props.showData.join("") === "") {
    const theWord = props.randWord.split("").map(letter => {
      return <div>_</div>;
    });
    return <div className="chosenWord">{theWord}</div>;
  } else {
    const theWord = props.showData.map(letter => {
      return <div>{letter}</div>;
    });
    return <div className="chosenWord">{theWord}</div>;
  }
}

export default ChosenWord;
