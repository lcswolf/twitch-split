import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import './Input.scss';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool.isRequired,

    // ESLint does not detect the usage of prop in componentWillReceiveProps.
    // https://github.com/yannickcr/eslint-plugin-react/issues/814
    // eslint-disable-next-line react/no-unused-prop-types
    value: PropTypes.string.isRequired,
  };

  static defaultProps = { className: '' };

  componentDidMount() {
    this.input.focus();
  }

  componentWillReceiveProps(nextProps) {
    // Clear the input box when an item has been selected from the dropdown
    // list.
    if (nextProps.value === '') this.input.value = '';
  }

  render() {
    return (
      <section
        className={classNames('search-input', this.props.className)}
      >
        <form
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <input
            type="text"
            ref={(c) => { this.input = c; }}
            onChange={(e) => { this.props.onChange({ value: e.target.value }); }}
            disabled={this.props.disabled}
          />
        </form>
      </section>
    );
  }
}

export default Input;
