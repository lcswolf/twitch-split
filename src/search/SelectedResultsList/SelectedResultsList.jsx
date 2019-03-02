import React from "react";
import Link from "next/link";
import SelectedResult from "../SelectedResult";
import "./SelectedResultsList.scss";

/* eslint-disable react/prop-types */
const SelectedResultsList = props => {
  const selectedResults = props.results.map(result => (
    <SelectedResult
      key={result.id}
      {...result}
      onResultClicked={props.onResultClicked}
    />
  ));

  const streamsURL = props.results.reduce(
    (url, result, index) =>
      `${url}${index > 0 ? "," : ""}${result.name.toLowerCase()}`,
    "/streams?s=",
  );

  let goButton = (
    <Link href={streamsURL}>
      <button className="go-button">
        split
        <i className="fa fa-arrow-right" aria-hidden="true" />
      </button>
    </Link>
  );
  if (selectedResults.length < 2) goButton = <div />;
  const style = {};
  if (!props.visible) style.display = "none";

  return (
    <section className="selected-results" style={style}>
      <div>{selectedResults}</div>
      {goButton}
    </section>
  );
};

export default SelectedResultsList;
