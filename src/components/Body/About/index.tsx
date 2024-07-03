import React, { ReactElement } from 'react';

import ImageBadge from '../../../widgets/ImageBadge';
import './About.css';

const About = (): ReactElement => {
  return (
    <div className="About">
      <ImageBadge
        src="https://media.licdn.com/dms/image/D4E03AQFnJnEqI7kTWA/profile-displayphoto-shrink_400_400/0/1689328946343?e=1725494400&v=beta&t=Z9F0yelfmMZ_nsJWXi6n9-QkijIB73tCS1dgNzvL-gs"
        alt="Ben Payne Hunt"
      />
    </div>
  );
};

export default About;
