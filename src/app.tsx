import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Auth } from './pages/auth';

const App: FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
