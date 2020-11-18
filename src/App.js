import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { CategoriesPage } from './pages/CategoriesPage';
import Routes from './routes';

import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path={Routes.HOME} component={HomePage} exact />
        <Route path={Routes.HISTORY} component={HistoryPage} />
        <Route path={Routes.CATEGORIES} component={CategoriesPage} />
      </Switch>
    </Router>
  );
};

export default App;
