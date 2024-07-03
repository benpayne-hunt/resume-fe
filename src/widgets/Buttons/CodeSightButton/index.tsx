import React, { ReactElement, useState } from 'react';

import CodeSightPopup from './components/CodeSightPopup';
import codeSight from './codeSight.svg';
import { CodeData } from '../../../types/codeData';
import './CodeSightButton.css';

type Props = {
  onClick: () => CodeData;
}

const CodeSightButton = ({ onClick }: Props): ReactElement => {
  const [openPopup, setOpenPopup] = useState(false);
  const [codeData, setCodeData] = useState<CodeData>({ language: 'tsx', code: '' });

  const handleClick = (): void => {
    setCodeData(onClick());
    setOpenPopup(!openPopup);
  };

  return (
    <>
      <div className="CodeSightButton" onClick={handleClick}>
        <img src={codeSight} alt="code sight" />
      </div>
      {openPopup ?
        <CodeSightPopup
          codeData={codeData}
        />
      : null}
    </>
  );
};

export default CodeSightButton;
