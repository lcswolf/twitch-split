import React from "react";
import { connect } from "react-redux";
import Description, { propTypes } from "./Description";

const DescriptionContainer = props => <Description visible={props.visible} />;

DescriptionContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  // Hide description section when search results are visible to prevent page
  // height from expanding beyond 100vh.
  visible: !state.showSearchResults || state.currentSearch === "",
});

export default connect(mapStateToProps)(DescriptionContainer);
