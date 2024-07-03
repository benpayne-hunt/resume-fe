import React, { ReactElement } from 'react';

import './ActionButton.css';

type Props = {
  text: string;
  onClick: () => void;
}

const ActionButton = ({ text, onClick }: Props): ReactElement => {
  return (
    <div className="ActionButton" onClick={onClick}>
      {text}
    </div>
  );
};

export default ActionButton;
