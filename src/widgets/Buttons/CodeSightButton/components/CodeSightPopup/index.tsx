import React, { ReactElement } from 'react';

import './CodeSightPopup.css';

type Props = {
  title?: string;
  text?: string;
  codeBlock?: Object;
}

const CodeSightPopup = ({ title, text }: Props): ReactElement => {
  return (
    <div className="CodeSightPopup">
      <h1 className="CodeSightPopup-title">{`${title ?? 'Code Sight'}`}</h1>
      <h6 className="CodeSightPopup-text">
        {`${text ?? 'Use this button to quickly scan through the code of any element on the page 🔍'}`}
      </h6>
    </div>
  );
};

export default CodeSightPopup;
