import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Form from './Form';
import Input from '../Input';
import ResultsList from '../ResultsList';

const form = props => (
  shallow(<Form
    onBlur={() => {}}
    onFocus={() => {}}
    {...props}
  />)
);

describe('<Form />', () => {
  it('renders form', () => {
    const wrapper = form();
    expect(wrapper.node.props.className).to.equal('form');
    const input = wrapper.node.props.children[0];
    expect(input.type).to.equal(Input);
    const resultsList = wrapper.node.props.children[1];
    expect(resultsList.type).to.equal(ResultsList);
  });

  it('calls onBlur on focus loss', (done) => {
    const onBlur = sinon.spy();
    const wrapper = form({ onBlur });
    wrapper.simulate('blur');
    setTimeout(() => {
      expect(onBlur.called).to.be.true;
      done();
    }, 350);
  });

  it('calls onFocus', () => {
    const onFocus = sinon.spy();
    const wrapper = form({ onFocus });
    wrapper.simulate('focus');
    expect(onFocus.called).to.be.true;
  });
});
