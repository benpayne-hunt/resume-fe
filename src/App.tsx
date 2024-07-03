import React, { ReactElement } from 'react';

import './App.css';
import Body from './components/Body';
import Header from './components/Header';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
