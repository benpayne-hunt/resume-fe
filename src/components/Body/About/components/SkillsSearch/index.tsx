import React, { ReactElement } from 'react';

import SearchBar from '../../../../../widgets/SearchBar';
import { Skill } from '../../../../../types/skill';
import './SkillsSearch.css';

type Props = {
  scrollTo: () => void;
};

const SkillsSearch = ({ scrollTo }: Props): ReactElement => {
  const searchSkills = (): Skill[]|[] => {
    return [{
      name: 'JavaScript',
      experienceYears: 5,
      experienceLevel: 'Production',
    }]
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): Skill[]|[] => {
    return searchSkills();
  };

  const handleFocus = (): void => {
    scrollTo();
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): Skill[]|[] => {
    if (event.key === 'Enter') {
      return searchSkills();
    } else {
      return [];
    }
  };

  return (
    <>
      <h6 className="About-text">Think I could be a good fit? Search a skill to see if it's a match 🚀</h6>
      <div className="SkillsSearch">
        <SearchBar onChange={handleChange} onFocus={handleFocus} onEnter={handleEnter} placeholder="Search a skill your org needs!" />
      </div>
    </>
  );
};

export default SkillsSearch;
