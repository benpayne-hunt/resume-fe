import React, { ReactElement } from 'react';

import SearchBar from '../../../../../widgets/SearchBar';
import './SkillsSearch.css';

const SkillsSearch = (): ReactElement => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div className="SkillsSearch">
      <SearchBar onChange={onChange} />
    </div>
  );
};

export default SkillsSearch;
