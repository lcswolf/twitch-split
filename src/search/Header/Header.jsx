import React, { Component, PropTypes } from 'react';
import './Header.scss';

class Header extends Component {
  static defaultProps = { className: '' };

  static propTypes = { className: PropTypes.node };

  render() {
    return (
      <div className={`search-header ${this.props.className}`}>
        <h1>
          twitch split
        </h1>
      </div>
    );
  }
}

export default Header;
