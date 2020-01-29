import React from "react";
import "./App.css";
import Keyboard from "./Components/keyboard";
import Hanger from "./Components/hanger";
import ChosenWord from "./Components/chosenWord";
let randomWords = require("random-words");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randWord: "",
      showData: [],
      guessed: [],
      turnCount: 0,
      missCount: 0
    };
    this.keyClick = this.keyClick.bind(this);
    this.restart = this.restart.bind(this);
  }

  // Sets randWord on initial load.
  // Needs if statement otherwise new word loads every page refresh
  componentDidMount() {
    if (this.state.randWord === "") {
      this.setState({ randWord: randomWords() });
    }
  }

  // Setting these values on the keyClick() function does not work
  // the app does not re-render on every state change, so these functions
  // that use recently changed state values to change other state values
  // run without the value of state, or with the previous state value.
  // to fix componentDidUpdate runs whenever state gets updated.
  // giving us the new state values
  // if statement to stop infinite update loop
  // setstate of showData. map every letter of randWord
  // if guessed letters === the letter of randword it returns the letter to
  // showData ,otherwise inplace of the letter a '_' is returned to showData
  // missCount is counted here by subtracing number of correct guesses from
  // turnCount
  componentDidUpdate(prepProps, prevState) {
    if (prevState.turnCount !== this.state.turnCount) {
      const arrWord = this.state.randWord.split("");
      this.setState({
        showData: arrWord.map(e => {
          if (this.state.guessed.includes(e)) {
            return e;
          } else {
            return "_";
          }
        }),
        missCount: this.state.turnCount - this.state.guessed.length
      });
    }
  }

  // On restart click, reset state values
  restart() {
    this.setState({
      randWord: randomWords(),
      showData: [],
      guessed: [],
      turnCount: 0,
      missCount: 0
    });
  }

  // When keyClick is called increment turnCount,
  // add to state.guessed array. take old state.guessed and add to
  // new array that filters the letters in randWord for the
  // letter === too the value passed from the target (e.target.value)
  // ...new Set() is for an array with no repeat values
  keyClick(e) {
    e.preventDefault();
    const arrWord = this.state.randWord.split("");
    this.setState({
      turnCount: this.state.turnCount + 1,
      guessed: [
        ...this.state.guessed,
        ...new Set(arrWord.filter(letter => letter === e.target.value))
      ]
    });
  }

  // renders out 1 function and passes all needed data
  render() {
    console.log(this.state.randWord);
    return (
      <div className="App">
        <div className="text">Hang A Man</div>
        <Display
          missCount={this.state.missCount}
          showData={this.state.showData}
          randWord={this.state.randWord}
          keyClick={this.keyClick}
          restart={this.restart}
        />
      </div>
    );
  }
}

// if the player guesses all letters, Winner! show restart button
// if the player still has guess left, show game elements
// else the player didn't guess all the letters and has no guess
// left. Game Over. show restart button
function Display(props) {
  if (props.showData.join("") === props.randWord) {
    return (
      <div>
        <h1>Winner!</h1>
        <h2>{props.showData}</h2>
        <button onClick={props.restart}>Restart</button>
      </div>
    );
  }
  if (props.missCount <= 6) {
    return (
      <div className="display">
        <Hanger missCount={props.missCount} />
        <ChosenWord randWord={props.randWord} showData={props.showData} />
        <Keyboard keyClick={props.keyClick} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Game Over!</h1>
        <h2>{props.randWord}</h2>
        <button onClick={props.restart}>Restart</button>
      </div>
    );
  }
}

export default App;
