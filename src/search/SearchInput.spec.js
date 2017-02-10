import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SearchInput from './SearchInput';

const searchInput = props => (
  shallow(<SearchInput
    onChange={() => {}}
    onBlur={() => {}}
    onFocus={() => {}}
    {...props}
  />)
);

describe('<SearchInput />', () => {
  it('adds className prop to div', () => {
    const wrapper = searchInput({ className: 'test' });
    expect(wrapper.find('.search-input.test')).to.have.length(1);
  });

  it('should prevent form submission', () => {
    const wrapper = searchInput();
    expect(wrapper.find('.search-input form').props().onSubmit).to.exist;
  });

  it('calls onChange on text changes', () => {
    const onChange = sinon.spy();
    const wrapper = searchInput({ onChange });
    wrapper.find('input').simulate('change', { target: { value: 'test' } });
    expect(onChange).to.have.property('callCount', 1);
    expect(onChange.calledWith({ value: 'test' })).to.be.true;
  });

  // it('renders search icon', () => {
  //   const wrapper = searchInput();
  //   expect(wrapper.find('.fa.fa-search')).to.have.length(1);
  // });

  it('calls onBlur/onFocus when input focus is gained/lost', () => {
    const onBlur = sinon.spy();
    const onFocus = sinon.spy();
    const wrapper = searchInput({ onBlur, onFocus });
    wrapper.find('input').simulate('blur');
    expect(onBlur).to.have.property('callCount', 1);
    wrapper.find('input').simulate('focus');
    expect(onFocus).to.have.property('callCount', 1);
  });
});
