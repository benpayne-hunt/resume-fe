import React, { ReactElement } from 'react';

import './ImageBadge.css';

type Props = {
  src: string;
  alt: string;
}

const ImageBadge = ({ src, alt }: Props): ReactElement => {
  return (
    <div className="ImageBadge">
      <img className="Image" src={src} alt={alt} />
    </div>
  );
};

export default ImageBadge;
