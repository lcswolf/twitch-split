import React from 'react';
import Header from './Header';
import SelectedResultsList from './SelectedResultsList';
import Form from './Form';
import Description from './Description';
import './SearchView.scss';

const SearchView = () => (
  <div className="search-view">
    <aside className="search-view__background" />
    <div className="search-view__container">
      <Header className="search-view__header" />
      <Form />
      <SelectedResultsList />
      <Description />
    </div>
  </div>
);

export default SearchView;
