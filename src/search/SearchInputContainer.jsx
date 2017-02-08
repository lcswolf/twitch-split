import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import SearchInput from './SearchInput';

const SearchInputContainer = ({ className, dispatch }) => (
  <SearchInput
    onChange={({ value }) => {
      dispatch(actions.setCurrentSearch(value));
      dispatch(actions.streamSearch(value));
    }}

    onBlur={() => { dispatch(actions.searchResultsHide()); }}

    onFocus={() => { dispatch(actions.searchResultsShow()); }}

    className={className}
  />
);

SearchInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SearchInputContainer.defaultProps = {
  className: '',
};

const mapStateToProps = (state, props) => ({
  className: props.className,
});

export default connect(mapStateToProps)(SearchInputContainer);
