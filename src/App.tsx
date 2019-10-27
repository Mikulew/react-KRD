import React from 'react';
import './less/App.less';
import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';
import { Provider } from 'react-redux';
import store from './duck/store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </Provider>
    </div>
  );
};

export default App;
