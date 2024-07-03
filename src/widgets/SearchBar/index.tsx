import React, { ReactElement } from 'react';

import './SearchBar.css';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: Props): ReactElement => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
