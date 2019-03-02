import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store";
import ResultsList, { propTypes } from "./ResultsList";

const ResultsListContainer = props => (
  <ResultsList
    results={props.results}
    onResultClicked={id => {
      props.dispatch(actions.streamSelect(id));
    }}
    showResultsList={props.showResultsList}
  />
);
ResultsListContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  results: state.queries[state.currentSearch] || [],
  showResultsList: state.showSearchResults,
});

export default connect(mapStateToProps)(ResultsListContainer);
