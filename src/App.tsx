import React from 'react';
import './App.less';
import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
};

export default App;
