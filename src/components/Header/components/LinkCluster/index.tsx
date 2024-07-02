import React, { ReactElement, ReactNode } from 'react';
import './LinkCluster.css';

type Props = {
  children: ReactNode;
}

const LinkCluster = ({ children }: Props): ReactElement => {
  return (
    <div className="LinkCluster">
      {children}
    </div>
  );
};

export default LinkCluster;
