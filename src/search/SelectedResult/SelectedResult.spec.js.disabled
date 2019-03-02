import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SelectedResult from './SelectedResult';

const selectedResult = props => (
  shallow(<SelectedResult
    previewTemplate="https://example.com/preview-{width}-{height}.png"
    onResultClicked={() => {}}
    id={123}
    displayName="Some Streamer"
    {...props}
  />)
);

describe('<SelectedResult />', () => {
  it('renders selected result', () => {
    const wrapper = selectedResult();
    expect(wrapper.type()).to.equal('article');
    expect(wrapper.props().className).to.equal('selected-result');
    const expectedBackground = 'url(https://example.com/preview-160-90.png)';
    expect(wrapper.props().style.backgroundImage).to.equal(expectedBackground);
    const caption = wrapper.find('div.selected-result__caption span');
    expect(caption.node.props.children).to.equal('Some Streamer');
  });

  it('calls onResultClicked with id', () => {
    const onResultClicked = sinon.spy();
    const wrapper = selectedResult({ onResultClicked });
    wrapper.simulate('click');
    expect(onResultClicked.calledWith(123)).to.be.true;
  });
});
