import React from "react";
import pt from "prop-types";

export class Unimportant extends React.PureComponent {
  static propTypes = {
    itemsCount: pt.number,
    paused: pt.bool
  };

  static getDerivedStateFromProps = (props, state) => {
    if (state.itemsCount !== props.itemsCount) {
      return {
        itemsCount: props.itemsCount,
        items: Array(props.itemsCount).fill(0)
      };
    }

    return null;
  };

  state = {
    items: []
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      if (!this.props.paused) {
        this.setState({
          items: this.state.items.map(val => val + Math.random())
        });
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        {this.state.items.map((val, i) => (
          <div key={i}>{`${i}: ${val}`}</div>
        ))}
      </div>
    );
  }
}
