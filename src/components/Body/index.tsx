import React, { ReactElement } from 'react';

import About from './About';
import Bio from './Bio';
import './Body.css';

const Body = (): ReactElement => {
  return (
    <div className="Body">
      <About />
      <Bio />
    </div>
  );
};

export default Body;
