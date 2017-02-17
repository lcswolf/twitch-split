import React from 'react';
import { Link } from 'react-router';
import SelectedResult from '../SelectedResult';
import './SelectedResultsList.scss';

/* eslint-disable react/prop-types */
const SelectedResultsList = (props) => {
  const selectedResults = props.results.map(result => (
    <SelectedResult key={result.id} {...result} onResultClicked={props.onResultClicked} />
  ));

  const streamsURL = props.results.reduce(
    (url, result) => `${url}/${result.name.toLowerCase()}`,
    '',
  );

  let goButton = (
    <Link to={streamsURL}>
      <button className="go-button">
        <i className="fa fa-arrow-right" aria-hidden="true" />
      </button>
    </Link>
  );
  if (selectedResults.length < 2) goButton = <div />;
  const style = {};
  if (!props.visible) style.display = 'none';

  return (
    <section className="selected-results" style={style}>
      {selectedResults}
      {goButton}
    </section>
  );
};

export default SelectedResultsList;
