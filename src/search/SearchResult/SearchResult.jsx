import React, { PropTypes } from 'react';
import './SearchResult.scss';

const SearchResult = (props) => {
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

SearchResult.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  previewTemplate: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

export default SearchResult;
