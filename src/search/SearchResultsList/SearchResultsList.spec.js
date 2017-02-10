import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchResultsList from './SearchResultsList';
import SearchResult from '../SearchResult';

const sampleResults = [
  { id: 1, previewTemplate: '', displayName: '', status: '', game: '' },
];
sampleResults.push(sampleResults[0]);
sampleResults[1].id += 1;

function searchResultsList(props) {
  const onClick = () => {};

  return shallow(<SearchResultsList
    results={sampleResults}
    onResultClicked={onClick}
    showResultsList={false}
    {...props}
  />);
}

describe('<SearchResultsList />', () => {
  it('renders two <SearchResult>s', () => {
    const wrapper = searchResultsList();
    expect(wrapper.find(SearchResult)).to.have.length(2);
  });

  it('should be hidden when showResultsList is false', () => {
    const wrapper = searchResultsList({ showResultsList: false });
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.display).to.equal('none');
  });

  it('should be visible when showResultsList is true', () => {
    const wrapper = searchResultsList({ showResultsList: true });
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.display).to.not.exist;
  });

  it('should have maxHeight set', () => {
    const wrapper = searchResultsList();
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.maxHeight).to.exist;
  });
});
