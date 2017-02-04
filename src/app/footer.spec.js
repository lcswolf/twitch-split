import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Footer from './Footer';

describe('Footer', () => {
  it('should be a footer', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Footer />);
    const result = renderer.getRenderOutput();
    console.log(result); // eslint-disable-line no-console
    // const footer = TestUtils.renderIntoDocument(<Footer />);
    // const footerNode = ReactDOM.findDOMNode(footer);
    // expect(footerNode.tagName).toEqual('FOOTER');
  });
});
