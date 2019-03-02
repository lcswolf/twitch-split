import React, { Component } from "react";
import propTypes from "../propTypes";
import ChatTabs from "../ChatTabs";
import ChatEmbs from "../ChatEmbs";
import "./Chats.scss";

class Chats extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      collapsed: false,
    };
  }

  tabClicked = index => {
    this.setState({ active: index });
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const style = {};
    if (this.state.collapsed) style.display = "none";
    const arrow = this.state.collapsed ? "left" : "right";

    return (
      <aside className={`${this.props.className} chats`}>
        <div className="chats__collapse">
          <button onClick={this.toggleCollapsed}>
            <i className={`fa fa-arrow-${arrow}`} aria-hidden="true" />
          </button>
        </div>
        <div className="chats__wrapper" style={style}>
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
      </aside>
    );
  }
}

export default Chats;
