import React from "react";

const INITIAL_ITEMS_COUNT = 1000;
const MAX_ITEMS_COUNT = 3000;
const STEP = 10;

export class Unimportant extends React.PureComponent {
  state = Unimportant.getStateFromItemsCount(INITIAL_ITEMS_COUNT);

  static getStateFromItemsCount = itemsCount => ({
    itemsCount,
    items: Array(itemsCount).fill(0)
  });

  handleChange = event => {
    this.setState(
      Unimportant.getStateFromItemsCount(event.currentTarget.valueAsNumber)
    );
  };

  componentDidMount() {
    setInterval(() =>
      this.setState({
        items: this.state.items.map(val => val + Math.random())
      })
    );
  }

  render() {
    return (
      <div className="unimportant">
        <input
          type="range"
          min={0}
          max={MAX_ITEMS_COUNT}
          step={STEP}
          value={this.state.itemsCount}
          onChange={this.handleChange}
        />
        <ul>
          {this.state.items.map((val, i) => (
            <li key={i}>{`${i}: ${val}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
