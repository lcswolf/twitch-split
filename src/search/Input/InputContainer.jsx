import PropTypes from 'prop-types';
import React from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { actions } from '../../store';
import Input from './Input';

// Improve search responsiveness by limiting search queries.
const updateQuery = debounce(
  (dispatch, value) => {
    dispatch(actions.setCurrentSearch(value));
    dispatch(actions.streamSearch(value));
  },
  200,
);

const InputContainer = props => (
  <Input
    onChange={({ value }) => {
      updateQuery(props.dispatch, value);
    }}

    className={props.className}

    value={props.currentSearch}

    disabled={props.disabled}
  />
);

InputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
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
