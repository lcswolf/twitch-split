import React, { Component } from 'react';
import './app.scss';
import placeholder from './350.jpg';

export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="hello-world">
        Hello world: {this.state.count}
        <img src={placeholder} alt="placeholder" />
      </div>
    );
  }
}
