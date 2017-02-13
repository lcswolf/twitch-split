import React, { Component, PropTypes } from 'react';
import Input from '../Input';
import ResultsList from '../ResultsList';
import './Form.scss';

/* eslint-disable no-console, class-methods-use-this */

class SearchForm extends Component {
  static propTypes = {
    onResultClick: PropTypes.func,
  };

  static defaultProps = {
    onResultClick: (result) => { console.log(result); },
  };

  onInputChanged({ value }) {
    console.log(value);
  }

  render() {
    return (
      <div className="search-form">
        <Input />
        <ResultsList />
      </div>
    );
  }
}

export default SearchForm;
