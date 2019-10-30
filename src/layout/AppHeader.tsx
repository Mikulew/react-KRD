import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import NumberCases from '../components/NumberCases';
import '../less/layout/AppHeader.less';

const AppHeader: React.FC = () => {
  return (
    <header className="l-header-container">
      <div className="l-header-container-box l-header-container-box--left">
        <p className="l-header-text">podaj numer sprawy, nazwę lub nip dłużnika</p>
        <SearchBarContainer />
      </div>
      <div className="l-header-container-box l-header-container-box--right">
        <p className="l-header-text l-header-text--red">całkowita liczba spraw</p>
        <p className="l-header-text l-header-text--large">
          <NumberCases />
        </p>
      </div>
    </header>
  );
};

export default AppHeader;
