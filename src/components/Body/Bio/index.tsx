import React, { ReactElement } from 'react';

import './Bio.css';

const Bio = (): ReactElement => {
  return (
    <div className="Bio">
      <div className="Bio-container">
        <div className="Bio-slogan-container">
          <h1 className="Bio-slogan-1">Frontend. </h1>
          <h1 className="Bio-slogan-2">Backend. </h1>
          <h1 className="Bio-slogan-3">Fullstack.</h1>
        </div>
        <div className="Bio-text-container">
          <h1 className="Bio-title">Behind the keyboard 🧠</h1>
          <h6 className="Bio-text">
            I've been primarily working on complex React.js front-end web applications with Node.js or PHP laravel backends, but have a soft spot for Go, Rust and the right tool for the job ⚛️
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Bio;
