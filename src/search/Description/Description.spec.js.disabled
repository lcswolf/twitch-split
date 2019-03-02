import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Description from './Description';
import features from './features.json';

const description = props => (
  shallow(<Description
    visible
    {...props}
  />)
);

describe('<Description />', () => {
  it('renders unordered list with project descriptions', () => {
    const wrapper = description();
    expect(wrapper.node.type).to.equal('article');
    expect(wrapper.node.props.className).to.equal('description');
    expect(wrapper.find('ul').length).to.equal(1);
    const listItems = wrapper.find('li').nodes.map(li => li.props.children);
    expect(listItems).to.deep.equal(features);
  });

  it('is hidden when search results are visible', () => {
    let wrapper = description();
    expect(wrapper.node.props.style.display).to.not.exist;

    wrapper = description({ visible: false });
    expect(wrapper.node.props.style.display).to.equal('none');
  });
});
