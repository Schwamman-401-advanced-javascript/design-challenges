import React from 'react';

import './nav.scss';

const Nav = props => {
  return <nav className={props.type}>{props.children}</nav>;
};

export default Nav;

Nav.defaultProps = {
  children: [
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>,
  ],
};
