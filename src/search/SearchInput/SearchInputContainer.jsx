import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import SearchInput from './SearchInput';

const SearchInputContainer = props => (
  <SearchInput
    onChange={({ value }) => {
      props.dispatch(actions.setCurrentSearch(value));
      props.dispatch(actions.streamSearch(value));
    }}

    onBlur={() => { props.dispatch(actions.searchResultsHide()); }}

    onFocus={() => { props.dispatch(actions.searchResultsShow()); }}

    className={props.className}

    value={props.currentSearch}

    disabled={props.disabled}
  />
);

SearchInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentSearch: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

SearchInputContainer.defaultProps = {
  className: '',
};

const mapStateToProps = (state, props) => ({
  className: props.className,
  currentSearch: state.currentSearch,
  disabled: state.selectedStreams.length > 2,
});

export default connect(mapStateToProps)(SearchInputContainer);
