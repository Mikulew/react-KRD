import React, { useState } from 'react';
import '../less/components/SearchBar.less';

const SearchBar: React.FC = () => {
  const [text, setText] = useState('test');

  const search = () => {
    console.log(text);
  };

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        type="search"
        className="search-bar search-bar__input"
      />
      <button type="button" className="search-bar search-bar__button" onClick={() => search()}>
        szukaj
      </button>
    </>
  );
};

export default SearchBar;
