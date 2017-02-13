import React from 'react';
import { connect } from 'react-redux';
import Description from './Description';

/* eslint-disable react/prop-types */
const DescriptionContainer = props => (
  <Description visible={props.visible} />
);

const mapStateToProps = state => ({
  visible: !state.showSearchResults || state.currentSearch === '',
});

export default connect(mapStateToProps)(DescriptionContainer);
