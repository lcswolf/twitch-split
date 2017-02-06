import React from 'react';

const Layout = props => (
  <div>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
