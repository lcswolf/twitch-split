import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import SelectedResultsList from './SelectedResultsList';

/* eslint-disable react/prop-types */
const SelectedResultsListContainer = props => (
  <SelectedResultsList
    results={props.results}
    onResultClicked={(id) => { props.dispatch(actions.streamUnselect(id)); }}
    visible={props.visible}
  />
);

const mapStateToProps = state => ({
  results: state.selectedStreams,
  visible: !state.showSearchResults || state.currentSearch === '',
});

export default connect(mapStateToProps)(SelectedResultsListContainer);
