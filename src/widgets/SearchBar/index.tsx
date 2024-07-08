import React, { ReactElement, useState } from "react";

import { Skill } from "../../types/skill";
import "./SearchBar.css";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => Promise<Skill[] | []>;
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<Skill[] | []>;
  placeholder: string;
};

type Result = Record<string, string | number>;

const SearchBar = ({ onChange, onFocus, onEnter, placeholder }: Props): ReactElement => {
  const [results, setResults] = useState<Result[] | []>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event);
  };

  const handleFocus = async (event: React.FocusEvent<HTMLInputElement>): Promise<void> => {
    setResults(await onFocus(event));
  };

  const handleBlur = async (event: React.FocusEvent<HTMLInputElement>): Promise<void> => {
    setResults([]);
  };

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    setResults(await onEnter(event));
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnter}
      />
      {results.length > 0 ? (
        <div className="SearchBar-results">
          {results.map((result, index) => (
            <div key={index}>{result.name}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
