import React, { ReactElement } from 'react';

import './TextButton.css';

type Props = {
  text: string;
  onClick: () => void;
}

const TextButton = ({ text, onClick }: Props): ReactElement => {
  return (
    <div className="TextButton" onClick={onClick}>
      {text}
    </div>
  );
};

export default TextButton;
