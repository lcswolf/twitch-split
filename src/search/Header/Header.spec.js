import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

const header = props => (
  shallow(<Header {...props} />)
);

describe('<Header />', () => {
  it('renders header text', () => {
    const wrapper = header();
    expect(wrapper.node.type).to.equal('header');
    expect(wrapper.node.props.className).to.equal('search-header');
    expect(wrapper.find('h1').node.props.children).to.equal('twitch split');
  });

  it('appends className from prop', () => {
    const wrapper = header({ className: 'test' });
    expect(wrapper.node.props.className).to.equal('search-header test');
  });
});
