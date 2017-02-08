import React, { Component, PropTypes } from 'react';
import SearchInputContainer from './SearchInputContainer';
import './SearchForm.scss';

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
        <SearchInputContainer />
      </div>
    );
  }
}

export default SearchForm;
