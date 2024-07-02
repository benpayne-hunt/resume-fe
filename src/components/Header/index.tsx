import React, { ReactElement } from 'react';

import ActionButton from '../../widgets/Buttons/ActionButton';
import LinkCluster from './components/LinkCluster';
import TextButton from '../../widgets/Buttons/TextButton';
import Title from './components/Title';
import './Header.css';

const Header = (): ReactElement => {
  return (
    <header className="App-header">
      <Title text="Ben Payne Hunt" />
      <LinkCluster>
        <TextButton text="Home" onClick={() => console.log('Home')} />
        <TextButton text="About" onClick={() => console.log('About')} />
        <ActionButton text="Contact" onClick={() => console.log('Contact')} />
      </LinkCluster>
    </header>
  );
};

export default Header;
