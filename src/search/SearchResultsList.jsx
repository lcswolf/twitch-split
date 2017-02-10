import React, { Component, PropTypes } from 'react';
import SearchResult from './SearchResult';
import './SearchResultsList.scss';
import resultsJSON from './test-fixtures/results.json';

let results = resultsJSON;
results.streams.sort((a, b) => {
  if (a.viewers < b.viewers) return -1;
  if (b.viewers > a.viewers) return 1;
  return 0;
});
results = results.streams.map(stream => ({
  id: stream._id, // eslint-disable-line no-underscore-dangle
  previewTemplate: stream.preview.template,
  displayName: stream.channel.display_name,
  status: stream.channel.status,
  game: stream.channel.game,
}));

function clicked(id) {
  console.log(id); // eslint-disable-line no-console
}

class SearchResultList extends Component {
  static propTypes = { results: PropTypes.object }; // eslint-disable-line react/forbid-prop-types
  static defaultProps = { results };
  state = { maxHeight: 100 };

  componentDidMount() {
    window.addEventListener('resize', this.updateMaxHeight);
    this.updateMaxHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMaxHeight);
  }

  updateMaxHeight = () => {
    const rect = this.div.getBoundingClientRect();
    this.setState({
      maxHeight: window.innerHeight - rect.top - 20,
    });
  }

  render() {
    const searchResults = this.props.results.map(stream => (
      <SearchResult {...stream} onClick={clicked} />
    ));

    return (
      <div
        className="result-list"
        style={{
          border: '1px solid black',
          maxHeight: `${this.state.maxHeight}px`,
        }}
        ref={(div) => { this.div = div; }}
      >
        <ul>
          {searchResults}
        </ul>
      </div>
    );
  }
}

export default SearchResultList;
