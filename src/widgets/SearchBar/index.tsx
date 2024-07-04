import React, { ReactElement, useState } from 'react';

import { Skill } from '../../types/skill';
import './SearchBar.css';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Skill[]|[];
  onFocus: () => void;
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => Skill[]|[];
  placeholder: string;
}

type Result = {
  name: string;
};

const SearchBar = ({ onChange, onFocus, onEnter, placeholder }: Props): ReactElement => {
  const [results, setResults] = useState<Result[]|[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setResults(onChange(event));
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    setResults(onEnter(event));
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyDown={handleEnter}
      />
      {results.length > 0 ?
        <div className="SearchBar-results">
          {results.map((result, index) => (
            <div key={index}>
              {result.name}
            </div>
          ))}
        </div>
      : null}
    </div>
  );
};

export default SearchBar;
