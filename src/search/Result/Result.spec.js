import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Result from './Result';

describe('<Result />', () => {
  let wrapper;
  let onClick;
  const expectedID = 123;
  const expectedBackground = 'http://example.com/image_160x90';
  const expectedDisplayName = 'user name';
  const expectedStatus = 'stream status';
  const expectedGame = 'some game';

  beforeEach(() => {
    onClick = spy();
    wrapper = shallow(<Result
      id={expectedID}
      onClick={onClick}
      previewTemplate="http://example.com/image_{width}x{height}"
      displayName={expectedDisplayName}
      status={expectedStatus}
      game={expectedGame}
    />);
  });

  it('emits click with stream id', () => {
    wrapper.find('li').simulate('click');
    expect(onClick.firstCall.args[0]).to.equal(expectedID);
  });

  it('renders streamer\'s name', () => {
    const el = wrapper.find('.search-result__section--name').node;
    expect(el.props.children).to.equal(expectedDisplayName);
  });

  it('renders stream status', () => {
    const el = wrapper.find('.search-result__section').nodes[1];
    expect(el.props.children).to.equal(expectedStatus);
  });

  it('renders stream\'s game', () => {
    const el = wrapper.find('.search-result__section--game').node;
    expect(el.props.children).to.equal(expectedGame);
  });

  it('sets background image to preview image', () => {
    const background = wrapper.find('.search-result__content')
      .node.props.style.backgroundImage;
    expect(background).to.equal(`url(${expectedBackground})`);
  });
});
