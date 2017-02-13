import React from 'react';
import Header from './Header';
import SelectedResultsList from './SelectedResultsList';
import Input from './Input';
import ResultsList from './ResultsList';
import Description from './Description';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <div className="search-view__container">
      <Header className="search-view__header" />
      <Input />
      <ResultsList />
      <SelectedResultsList />
      <Description />
    </div>
  </div>
);

export default SearchView;
