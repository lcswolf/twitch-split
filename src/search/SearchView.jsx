import React from 'react';
import SearchHeader from './SearchHeader';
import SearchForm from './SearchForm';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <SearchHeader className="search-view__header" />
    <div className="search-view__form-wrapper">
      <SearchForm />
    </div>
  </div>
);

export default SearchView;
