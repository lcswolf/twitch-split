import React, { Component } from 'react';
import propTypes from '../propTypes';
import ChatTabs from '../ChatTabs';
import ChatEmbs from '../ChatEmbs';
import './Chats.scss';

class Chats extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  tabClicked = (index) => {
    this.setState({ active: index });
  }

  render() {
    return (
      <div className={`${this.props.className} chats`}>
        <ChatTabs
          className="chats__tabs"
          streams={this.props.streams}
          active={this.state.active}
          tabClicked={this.tabClicked}
        />
        <ChatEmbs
          className="chats__panels"
          streams={this.props.streams}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default Chats;
