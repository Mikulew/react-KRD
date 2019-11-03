import React from 'react';
import 'less/layout/AppMain.less';
import DebtListContainer from 'containers/DebtListContainer';

const AppMain: React.FC = () => {
  return (
    <main className="container l-main-container">
      <DebtListContainer />
    </main>
  );
};

export default AppMain;
