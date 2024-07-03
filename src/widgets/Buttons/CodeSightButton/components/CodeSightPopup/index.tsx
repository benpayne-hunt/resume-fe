import React, { ReactElement } from 'react';

import './CodeSightPopup.css';

const CodeSightPopup = (): ReactElement => {
  return (
    <div className="CodeSightPopup">
      <h1 className="CodeSightPopup-title">Code Sight</h1>
      <h6 className="CodeSightPopup-text">
        Use this button to quickly scan through the code of any element on the page 🔍
      </h6>

    </div>
  );
};

export default CodeSightPopup;
