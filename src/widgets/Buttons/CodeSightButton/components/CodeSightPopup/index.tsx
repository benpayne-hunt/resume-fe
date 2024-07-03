import React, { ReactElement } from 'react';

import { CodeData } from '../../../../../types/codeData';
import { CopyBlock, dracula } from 'react-code-blocks';
import './CodeSightPopup.css';

type Props = {
  codeData: CodeData;
  title?: string;
  text?: string;
}

const CodeSightPopup = ({ codeData, title, text }: Props): ReactElement => {
  return (
    <div className="CodeSightPopup">
      <h1 className="CodeSightPopup-title">{`${title ?? 'Code Sight'}`}</h1>
      <h6 className="CodeSightPopup-text">
        {`${text ?? 'Use this button to quickly scan through the code of any element on the page 🔍'}`}
      </h6>
      {codeData ?
        <CopyBlock
          text={codeData?.code}
          language={codeData?.language}
          theme={dracula}
          wrapLongLines={true}
          codeBlock
        />
      : null}
    </div>
  );
};

export default CodeSightPopup;
