import React, { ReactElement } from 'react';

import CodeSightButton from '../../../../../widgets/Buttons/CodeSightButton';
import SearchBar from '../../../../../widgets/SearchBar';
import { CodeData } from '../../../../../types/codeData';
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

  const handleClick = (): CodeData => {
    console.log('CodeSightButton');
    // call api for code snippets
    //
    // mocked
    return { language: 'tsx', code: 'const test = 1;' };
  };

  return (
    <>
      <h6 className="About-text">Think I could be a good fit? Search a skill to see if it's a match 🚀</h6>
      <div className="SkillsSearch">
        <SearchBar onChange={handleChange} onFocus={handleFocus} onEnter={handleEnter} placeholder="Search a skill your org needs!" />
        <div className="SkillsSearch-codeSight">
          <CodeSightButton onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default SkillsSearch;
