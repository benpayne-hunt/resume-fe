import React, { ReactElement } from 'react';

import ImageBadge from '../../../widgets/ImageBadge';
import SkillsSearch from './components/SkillsSearch';
import './About.css';

const About = (): ReactElement => {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-slogan-container">
          <h1 className="About-slogan-1">Senior. </h1>
          <h1 className="About-slogan-2">Software. </h1>
          <h1 className="About-slogan-3">Engineer.</h1>
        </div>
        <div className="About-greeting">
          <ImageBadge
            src="https://media.licdn.com/dms/image/D4E03AQFnJnEqI7kTWA/profile-displayphoto-shrink_400_400/0/1689328946343?e=1725494400&v=beta&t=Z9F0yelfmMZ_nsJWXi6n9-QkijIB73tCS1dgNzvL-gs"
            alt="Ben Payne Hunt"
          />
          <div className="About-text-container">
            <h1 className="About-title">Hi there 👋</h1>
            <h6 className="About-text">
              I'm a Software Engineer with a passion for running effective, collaborative and fun teams that look to deliver value in every pull request we open 💪
            </h6>
            <SkillsSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
