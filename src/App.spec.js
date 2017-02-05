import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('it is a DIV', () => {
    expect(shallow(<App />).find('div').length).to.equal(1);
  });
});
