import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultsList from './ResultsList';
import Result from '../Result';

const sampleResults = [
  { id: 1, previewTemplate: '', displayName: '', status: '', game: '' },
];
sampleResults.push(sampleResults[0]);
sampleResults[1].id += 1;

function resultsList(props) {
  const onClick = () => {};

  return shallow(<ResultsList
    results={sampleResults}
    onResultClicked={onClick}
    showResultsList={false}
    {...props}
  />);
}

describe('<ResultsList />', () => {
  it('renders two <Result>s', () => {
    const wrapper = resultsList();
    expect(wrapper.find(Result)).to.have.length(2);
  });

  it('should be hidden when showResultsList is false', () => {
    const wrapper = resultsList({ showResultsList: false });
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.display).to.equal('none');
  });

  it('should be visible when showResultsList is true', () => {
    const wrapper = resultsList({ showResultsList: true });
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.display).to.not.exist;
  });

  it('should have maxHeight set', () => {
    const wrapper = resultsList();
    const el = wrapper.find('.result-list').node;
    expect(el.props.style.maxHeight).to.exist;
  });
});
