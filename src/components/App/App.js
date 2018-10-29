import React from "react";
import { Unimportant } from "../Unimportant";
import styles from "./App.css";

const INITIAL_ITEMS_COUNT = 1000;
const MAX_ITEMS_COUNT = 5000;
const STEP = 10;

export default class App extends React.PureComponent {
  state = {
    itemsCount: INITIAL_ITEMS_COUNT,
    fiber: false,
    paused: false
  };

  handleLagChange = event => {
    this.setState({
      itemsCount: event.currentTarget.valueAsNumber
    });
  };

  handleFiberChange = event => {
    this.setState({
      fiber: event.currentTarget.checked
    });
  };

  handlePausedChange = event => {
    this.setState({
      paused: event.currentTarget.checked
    });
  };

  render() {
    const AsyncMode = React.unstable_ConcurrentMode;
    let content = (
      <div className={styles.main}>
        <div className={styles.settings}>
          Adjust lag:
          <br />
          <input
            type="range"
            min={0}
            max={MAX_ITEMS_COUNT}
            step={STEP}
            value={this.state.itemsCount}
            onChange={this.handleLagChange}
          />
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.fiber}
              onChange={this.handleFiberChange}
            />
            Fiber
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.paused}
              onChange={this.handlePausedChange}
            />
            Pause
          </label>
        </div>
        <div className={styles.important}>
          Type in this field should not lag:
          <br />
          <input type="text" defaultValue="Important input" />
        </div>
        <div className={styles.unimportant}>
          {" "}
          <Unimportant
            itemsCount={this.state.itemsCount}
            paused={this.state.paused}
          />
        </div>
      </div>
    );

    if (this.state.fiber) {
      content = <AsyncMode>{content}</AsyncMode>;
    }

    return content;
  }
}
