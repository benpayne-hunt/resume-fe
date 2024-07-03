import React, { ReactElement, useState } from 'react';

import CodeSightPopup from './components/CodeSightPopup';
import codeSight from './codeSight.svg';
import './CodeSightButton.css';

type Props = {
  onClick: () => void;
}

const CodeSightButton = ({ onClick }: Props): ReactElement => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleClick = (): void => {
    onClick();
    setOpenPopup(!openPopup);
  };

  return (
    <>
      <div className="CodeSightButton" onClick={handleClick}>
        <img src={codeSight} alt="code sight" />
      </div>
      {openPopup ?
        <CodeSightPopup />
      : null}
    </>
  );
};

export default CodeSightButton;
