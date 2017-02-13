import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import Input from './Input';

const InputContainer = props => (
  <Input
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

InputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentSearch: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

InputContainer.defaultProps = {
  className: '',
};

const mapStateToProps = (state, props) => ({
  className: props.className,
  currentSearch: state.currentSearch,
  disabled: state.selectedStreams.length > 2,
});

export default connect(mapStateToProps)(InputContainer);
