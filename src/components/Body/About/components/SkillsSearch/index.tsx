import React, { ReactElement } from 'react';

import SearchBar from '../../../../../widgets/SearchBar';
import { Skill } from '../../../../../types/skill';
import './SkillsSearch.css';

type Props = {
  scrollTo: () => void;
};

const SkillsSearch = ({ scrollTo }: Props): ReactElement => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): Skill[] => {
    console.log(event.target.value);
    return [{
      name: 'JavaScript',
      experienceYears: 5,
      experienceLevel: 'Production',
    }]
  };

  const handleBlur = (): void => {
    scrollTo();
  };

  return (
    <>
      <h6 className="About-text">Think I could be a good fit? Search a skill to see if it's a match 🚀</h6>
      <div className="SkillsSearch">
        <SearchBar onChange={handleChange} onBlur={handleBlur} placeholder="Search a skill your org needs!" />
      </div>
    </>
  );
};

export default SkillsSearch;
