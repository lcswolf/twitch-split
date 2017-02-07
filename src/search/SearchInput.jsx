import React, { Component, PropTypes } from 'react';
import './SearchInput.scss';

class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = { className: '' };

  onKeyUp = () => {
    this.props.onChange({ value: this.input.value });
  }

  render() {
    return (
      <form
        className={`search-input ${this.props.className}`}
        onSubmit={(e) => { e.preventDefault(); }}
      >
        <input
          type="text"
          ref={(c) => { this.input = c; }}
          onKeyUp={this.onKeyUp}
        />
      </form>
    );
  }
}

export default SearchInput;
