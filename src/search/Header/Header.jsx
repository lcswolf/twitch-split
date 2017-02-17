import React, { Component, PropTypes } from 'react';
import './Header.scss';

class Header extends Component {
  static defaultProps = { className: '' };

  static propTypes = { className: PropTypes.node };

  render() {
    return (
      <header className={`search-header ${this.props.className}`}>
        <h1>
          twitch split
        </h1>
      </header>
    );
  }
}

export default Header;
