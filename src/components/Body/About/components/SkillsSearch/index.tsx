import React, { ReactElement } from 'react';

import SearchBar from '../../../../../widgets/SearchBar';
import './SkillsSearch.css';

const SkillsSearch = (): ReactElement => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <>
      <h6 className="About-text">Think I could be a good fit? Search a skill to see if it's a match 🚀</h6>
      <div className="SkillsSearch">
        <SearchBar onChange={onChange} placeholder="Search a skill your org needs!" />
      </div>
    </>
  );
};

export default SkillsSearch;
