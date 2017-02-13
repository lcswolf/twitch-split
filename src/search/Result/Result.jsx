import React, { PropTypes } from 'react';
import './Result.scss';

const Result = (props) => {
  const preview = props.previewTemplate
    .replace('{width}', '160')
    .replace('{height}', '90');

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <li
      className="search-result"
      onClick={() => { props.onClick(props.id); }}
    >
      <div
        className="search-result__content"
        style={{ backgroundImage: `url(${preview})` }}
      >
        <p className="search-result__section search-result__section--name">
          {props.displayName}
        </p>

        <p className="search-result__section">
          {props.status}
        </p>

        <p className="search-result__section search-result__section--game">
          {props.game}
        </p>
      </div>
    </li>
  );
};

export const resultProps = {
  id: PropTypes.number.isRequired,
  previewTemplate: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

Result.propTypes = {
  ...resultProps,
  onClick: PropTypes.func.isRequired,
};

export default Result;
