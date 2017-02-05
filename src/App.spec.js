import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('it is a SPAN', () => {
    expect(shallow(<App />).find('span').length).to.equal(1);
  });
});
