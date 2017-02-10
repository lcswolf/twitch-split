import React, { Component, PropTypes } from 'react';
import './SearchHeader.scss';

class SearchHeader extends Component {
  static defaultProps = { className: '' };

  static propTypes = { className: PropTypes.node };

  render() {
    return (
      <h1 className={`search-header ${this.props.className}`}>
        twitch split
      </h1>
    );
  }
}

export default SearchHeader;
