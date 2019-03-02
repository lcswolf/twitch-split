import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import './Header.scss';

class Header extends Component {
  static defaultProps = { className: '' };
  static propTypes = { className: PropTypes.node };

  render() {
    return (
      <header className={classNames('search-header', this.props.className)}>
        <h1>
          twitch split
        </h1>
      </header>
    );
  }
}

export default Header;
