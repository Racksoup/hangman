import React from "react";
import "../ComponentCss/keyboard.scss";

// all keys need a value to trigger for visibility
class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    };
    this.clicky = this.clicky.bind(this);
  }

  // when triggered on button press, call
  // props.keyClick(give it the target value)
  // setState of the [same state value as the target value] to 1
  clicky(e) {
    e.preventDefault();
    this.props.keyClick(e);
    this.setState({ [e.target.value]: 1 });
  }

  // 26 keys for keyboard given the letter value, the state value,
  // and the button function
  render() {
    return (
      <div className="keyboard">
        <Key targetKey="a" stateKey={this.state.a} clicky={this.clicky} />
        <Key targetKey="b" stateKey={this.state.b} clicky={this.clicky} />
        <Key targetKey="c" stateKey={this.state.c} clicky={this.clicky} />
        <Key targetKey="d" stateKey={this.state.d} clicky={this.clicky} />
        <Key targetKey="e" stateKey={this.state.e} clicky={this.clicky} />
        <Key targetKey="f" stateKey={this.state.f} clicky={this.clicky} />
        <Key targetKey="g" stateKey={this.state.g} clicky={this.clicky} />
        <Key targetKey="h" stateKey={this.state.h} clicky={this.clicky} />
        <Key targetKey="i" stateKey={this.state.i} clicky={this.clicky} />
        <Key targetKey="j" stateKey={this.state.j} clicky={this.clicky} />
        <Key targetKey="k" stateKey={this.state.k} clicky={this.clicky} />
        <Key targetKey="l" stateKey={this.state.l} clicky={this.clicky} />
        <Key targetKey="m" stateKey={this.state.m} clicky={this.clicky} />
        <Key targetKey="n" stateKey={this.state.n} clicky={this.clicky} />
        <Key targetKey="o" stateKey={this.state.o} clicky={this.clicky} />
        <Key targetKey="p" stateKey={this.state.p} clicky={this.clicky} />
        <Key targetKey="q" stateKey={this.state.q} clicky={this.clicky} />
        <Key targetKey="r" stateKey={this.state.r} clicky={this.clicky} />
        <Key targetKey="s" stateKey={this.state.s} clicky={this.clicky} />
        <Key targetKey="t" stateKey={this.state.t} clicky={this.clicky} />
        <Key targetKey="u" stateKey={this.state.u} clicky={this.clicky} />
        <Key targetKey="v" stateKey={this.state.v} clicky={this.clicky} />
        <Key targetKey="w" stateKey={this.state.w} clicky={this.clicky} />
        <Key targetKey="x" stateKey={this.state.x} clicky={this.clicky} />
        <Key targetKey="y" stateKey={this.state.y} clicky={this.clicky} />
        <Key targetKey="z" stateKey={this.state.z} clicky={this.clicky} />
      </div>
    );
  }
}

// if key not pressed before show button with value===letter,
// the clicky onClick function, and displays letter
// else return a disabled button with same values
// other than css visiblity hidden
function Key(props) {
  if (props.stateKey !== 1) {
    return (
      <button className="a" value={props.targetKey} onClick={props.clicky}>
        {" "}
        {props.targetKey}
      </button>
    );
  } else {
    return (
      <button
        disabled
        className="b"
        value={props.targetKey}
        onClick={props.clicky}
      >
        {" "}
        {props.targetKey}
      </button>
    );
  }
}

export default Keyboard;
