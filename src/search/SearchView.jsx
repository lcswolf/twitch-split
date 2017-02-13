import React from 'react';
import SearchHeader from './SearchHeader';
import SelectedResultsList from './SelectedResultsList';
import SearchForm from './SearchForm';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <div className="container">
      <SearchHeader className="search-view__header" />
      <SelectedResultsList />
      <SearchForm />
    </div>
  </div>
);

export default SearchView;
