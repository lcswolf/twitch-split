import React, { Component, PropTypes } from 'react';
import Input from '../Input';
import ResultsList from '../ResultsList';
import './Form.scss';

class Form extends Component {
  onBlur = (e) => {
    // Skip check when run during unit tests where no DOM is available.
    if (document && document.activeElement) {
      // Internet Explorer blurs text input when scrollbar on results list is
      // clicked. Work around the issue by ignoring blur events.
      if (document.activeElement.classList.contains('form')) {
        e.target.focus();
        return;
      } else if (e.target.classList.contains('form')) return;
    }

    // Add a small delay so click handlers in dropdown component have a chance
    // to fire.
    setTimeout(() => {
      this.props.onBlur();
    }, 300);
  }

  render() {
    return (
      <div
        className="form"
        onBlur={this.onBlur}
        onFocus={this.props.onFocus}
      >
        <Input ref={(c) => { this.input = c; }} />
        <ResultsList ref={(c) => { this.list = c; }} />
      </div>
    );
  }
}

Form.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default Form;
