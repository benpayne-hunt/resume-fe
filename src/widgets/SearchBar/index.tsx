import React, { ReactElement } from 'react';

import './SearchBar.css';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar = ({ onChange, placeholder }: Props): ReactElement => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
