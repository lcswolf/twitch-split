import React, { Component, PropTypes } from 'react';
import SearchResult, { resultProps } from '../SearchResult';
import './SearchResultsList.scss';

export const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(resultProps)).isRequired,
  showResultsList: PropTypes.bool.isRequired,
};

class SearchResultList extends Component {
  static propTypes = {
    ...propTypes,
    onResultClicked: PropTypes.func.isRequired,
  };
  state = { maxHeight: 100 };

  // Prevent results list from extending the height of the page by setting its
  // max height to less than the page height.
  componentDidMount() {
    window.addEventListener('resize', this.updateMaxHeight);
    setTimeout(() => {
      this.updateMaxHeight();
    }, 1);
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
      <SearchResult
        key={stream.id}
        {...stream}
        onClick={this.props.onResultClicked}
      />
    ));

    const style = {
      maxHeight: `${this.state.maxHeight}px`,
    };
    if (!this.props.showResultsList) style.display = 'none';

    return (
      <div
        className="result-list"
        style={style}
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
