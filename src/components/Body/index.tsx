import React, { ReactElement } from 'react';

import About from './About';
import './Body.css';

const Body = (): ReactElement => {
  return (
    <div className="Body">
      <About />
    </div>
  );
};

export default Body;
