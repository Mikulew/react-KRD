import React from 'react';
import '../less/layout/AppMain.less';
import DebtList from '../components/DebtList';

const AppMain: React.FC = () => {
  return (
    <main className="container l-main-container">
      <DebtList />
    </main>
  );
};

export default AppMain;
