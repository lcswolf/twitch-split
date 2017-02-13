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
    {...props}
  />)
);

describe('<Input />', () => {
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

  it('calls onBlur/onFocus when input focus is gained/lost', (done) => {
    const onBlur = sinon.spy();
    const onFocus = sinon.spy();
    const wrapper = input({ onBlur, onFocus });
    wrapper.find('input').simulate('blur');
    setTimeout(() => {
      expect(onBlur).to.have.property('callCount', 1);
      wrapper.find('input').simulate('focus');
      expect(onFocus).to.have.property('callCount', 1);
      done();
    }, 120);
  });
});