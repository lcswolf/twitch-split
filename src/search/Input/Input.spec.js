import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

const input = props => (
  shallow(<Input
    onChange={() => {}}
    onBlur={() => {}}
    onFocus={() => {}}
    disabled={false}
    value={''}
    {...props}
  />)
);

describe('<Input />', () => {
  it('renders input form', () => {
    const wrapper = input();
    expect(wrapper.node.type).to.equal('section');
    expect(wrapper.node.props.className).to.equal('search-input');
    const form = wrapper.node.props.children;
    expect(form.type).to.equal('form');
    const inputEl = form.props.children;
    expect(inputEl.type).to.equal('input');
  });

  it('adds className prop to div', () => {
    const wrapper = input({ className: 'test' });
    expect(wrapper.find('.search-input.test')).to.have.length(1);
  });

  it('should prevent form submission', () => {
    const wrapper = input();
    expect(wrapper.find('.search-input form').props().onSubmit).to.exist;
  });

  it('calls onChange on text changes', () => {
    const onChange = sinon.spy();
    const wrapper = input({ onChange });
    wrapper.find('input').simulate('change', { target: { value: 'test' } });
    expect(onChange).to.have.property('callCount', 1);
    expect(onChange.calledWith({ value: 'test' })).to.be.true;
  });

  it('calls onBlur on focus loss', (done) => {
    const onBlur = sinon.spy();
    const wrapper = input({ onBlur });
    wrapper.find('input').simulate('blur');
    setTimeout(() => {
      expect(onBlur.called).to.be.true;
      done();
    }, 350);
  });

  it('calls onFocus', () => {
    const onFocus = sinon.spy();
    const wrapper = input({ onFocus });
    wrapper.find('input').simulate('focus');
    expect(onFocus.called).to.be.true;
  });

  it('disables input when disabled is true', () => {
    const wrapper = input({ disabled: true });
    expect(wrapper.find('input').node.props.disabled).to.be.true;
  });
});
