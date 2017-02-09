import React, { Component, PropTypes } from 'react';
import './SearchInput.scss';

class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = { className: '' };

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <div
        className={`search-input ${this.props.className}`}
      >
        <form
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <input
            type="text"
            ref={(c) => { this.input = c; }}
            onChange={(e) => { this.props.onChange({ value: e.target.value }); }}
            onBlur={() => { this.props.onBlur(); }}
            onFocus={() => { this.props.onFocus(); }}
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
