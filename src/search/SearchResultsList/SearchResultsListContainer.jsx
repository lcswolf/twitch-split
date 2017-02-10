import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import SearchResultsList, { propTypes } from './SearchResultsList';

const SearchResultsListContainer = props => (
  <SearchResultsList
    results={props.results}
    onResultClicked={(id) => { props.dispatch(actions.streamSelect(id)); }}
    showResultsList={props.showResultsList}
  />
);
SearchResultsListContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  results: state.queries[state.currentSearch] || [],
  showResultsList: state.showSearchResults,
});

export default connect(mapStateToProps)(SearchResultsListContainer);
