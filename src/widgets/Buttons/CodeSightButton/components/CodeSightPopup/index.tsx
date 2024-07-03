import React, { ReactElement } from 'react';

import { CodeBlock, dracula } from 'react-code-blocks';
import './CodeSightPopup.css';

type Props = {
  title?: string;
  text?: string;
  code?: string;
  language?: string;
}

const CodeSightPopup = ({ title, text, code, language }: Props): ReactElement => {
  return (
    <div className="CodeSightPopup">
      <h1 className="CodeSightPopup-title">{`${title ?? 'Code Sight'}`}</h1>
      <h6 className="CodeSightPopup-text">
        {`${text ?? 'Use this button to quickly scan through the code of any element on the page 🔍'}`}
      </h6>
      {code ?
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={true}
          theme={dracula}
        />
      : null}
    </div>
  );
};

export default CodeSightPopup;
