import React from 'react';
import SearchHeader from './SearchHeader';
import SelectedResultsList from './SelectedResultsList';
import SearchForm from './SearchForm';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <SearchHeader className="search-view__header" />
    <SelectedResultsList />
    <div className="search-view__form-wrapper">
      <SearchForm />
    </div>
  </div>
);

export default SearchView;
