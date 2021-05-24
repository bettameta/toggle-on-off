import React, { Component } from "react";
import Switch from "./Switch";
/* componet class */
class App extends Component {
  /* initialize state */
  state = { on: false };
  /* event handler */
  toggle = () => {
    var isOn = this.state.on;
    this.setState({ on: !isOn });
  };

  render() {
    var wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        {/* event listner */}
        <Switch toggle={this.toggle} />
        <Switch toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
