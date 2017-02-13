import React from 'react';
import Header from './Header';
import SelectedResultsList from './SelectedResultsList';
import Form from './Form';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <div className="container">
      <Header className="search-view__header" />
      <SelectedResultsList />
      <Form />
    </div>
  </div>
);

export default SearchView;
