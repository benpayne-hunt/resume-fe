import React, { ReactElement } from 'react';

import './Title.css';

type Props = {
  text: string;
}

const Title = ({ text }: Props): ReactElement => {
  return (
    <div className="Title-container">
      <h1 className="Title">{text}</h1>
    </div>
  );
};

export default Title;
