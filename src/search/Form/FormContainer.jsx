import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import Form from './Form';

const FormContainer = props => (
  <Form
    onBlur={() => { props.dispatch(actions.searchResultsHide()); }}
    onFocus={() => { props.dispatch(actions.searchResultsShow()); }}
  />
);

FormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(FormContainer);
