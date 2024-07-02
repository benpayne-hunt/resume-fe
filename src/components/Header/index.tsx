import React, { ReactElement } from 'react';

import LinkCluster from './components/LinkCluster';
import Title from './components/Title';
import './Header.css';

const Header = (): ReactElement => {
  return (
    <header className="App-header">
      <Title text="Ben Payne Hunt" />
      <LinkCluster>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </LinkCluster>
    </header>
  );
};

export default Header;
