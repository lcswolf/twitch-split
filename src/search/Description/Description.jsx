import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import './Description.scss';
import features from './features.json';

const featureListItems = features.map(feature => (
  <li key={uuid()}>{feature}</li>
));

const Description = (props) => {
  // Hide when search results are visible.
  const style = {};
  if (!props.visible) style.display = 'none';

  return (
    <article className="description" style={style}>
      <ul>
        {featureListItems}
      </ul>
    </article>
  );
};

export const propTypes = {
  visible: PropTypes.bool.isRequired,
};

Description.propTypes = propTypes;

export default Description;
