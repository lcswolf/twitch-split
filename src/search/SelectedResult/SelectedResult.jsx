import PropTypes from "prop-types";
import React from "react";
import "./SelectedResult.scss";

const SelectedResult = props => {
  const preview = props.previewTemplate
    .replace("{width}", "160")
    .replace("{height}", "90");

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <article
      className="selected-result"
      style={{
        backgroundImage: `url(${preview})`,
      }}
      onClick={() => {
        props.onResultClicked(props.id);
      }}
    >
      <div className="selected-result__caption">
        <span>{props.displayName}</span>
      </div>

      <i className="selected-result__cross fa fa-times" aria-hidden="true" />
    </article>
  );
};

SelectedResult.propTypes = {
  previewTemplate: PropTypes.string.isRequired,
  onResultClicked: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default SelectedResult;
