import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return <div>Hello world: {this.state.count}</div>;
  }
}
