import React, { ReactNode } from 'react';
import './LinkCluster.css';

type Props = {
  children: ReactNode;
}

const LinkCluster = ({ children }: Props) => {
  return (
    <div className="LinkCluster">
      {children}
    </div>
  );
};

export default LinkCluster;
