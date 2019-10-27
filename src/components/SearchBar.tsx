import React from 'react';
import '../less/components/SearchBar.less';

const SearchBar: React.FC = () => {
  return (
    <>
      <input type="search" className="search-bar search-bar__input" />
      <button type="button" className="search-bar search-bar__button">
        szukaj
      </button>
    </>
  );
};

export default SearchBar;
