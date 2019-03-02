import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Result, { resultProps } from '../Result';
import './ResultsList.scss';

export const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(resultProps)).isRequired,
  showResultsList: PropTypes.bool.isRequired,
};

class ResultList extends Component {
  static propTypes = {
    ...propTypes,
    onResultClicked: PropTypes.func.isRequired,
  };

  render() {
    const results = this.props.results.map(stream => (
      <Result
        key={stream.id}
        {...stream}
        onClick={this.props.onResultClicked}
      />
    ));

    // Only show result list when search input has focus.
    const style = {};
    if (!this.props.showResultsList) style.display = 'none';

    return (
      <section
        className="result-list"
        style={style}
        ref={(div) => { this.div = div; }}
      >
        <ul>
          {results}
        </ul>
      </section>
    );
  }
}

export default ResultList;
