import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return <div className="hello-world">Hello world: {this.state.count}</div>;
  }
}
