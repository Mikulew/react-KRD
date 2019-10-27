import React from 'react';
import SearchBar from '../components/SearchBar';
import '../less/layout/AppHeader.less';

const AppHeader: React.FC = () => {
  return (
    <header className="l-header-container">
      <div className="l-header-container-box l-header-container-box--left">
        <p className="l-header-text">podaj numer sprawy, nazwę lub nip dłużnika</p>
        <SearchBar />
      </div>
      <div className="l-header-container-box l-header-container-box--right">
        <p className="l-header-text l-header-text--red">całkowita liczba spraw</p>
        <p className="l-header-text l-header-text--large">88</p>
      </div>
    </header>
  );
};

export default AppHeader;
