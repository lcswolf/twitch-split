import React, { Component, PropTypes } from 'react';
import SearchInput from '../SearchInput';
import SearchResultsList from '../SearchResultsList';
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
        <SearchInput />
        <SearchResultsList />
      </div>
    );
  }
}

export default SearchForm;
