import React, { ReactElement } from 'react';

import Body from './components/Body';
import Header from './components/Header';
import './App.css';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
