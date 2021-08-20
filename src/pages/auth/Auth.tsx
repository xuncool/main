import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { LoginLayout } from './components/LoginLayout';
import { Login } from './Login';

export const Auth = () => {
  const { url, path } = useRouteMatch();
  return (
    <LoginLayout>
      {path}
      <Switch>
        <Route path={`${url}/login`} exact component={Login} />
      </Switch>
    </LoginLayout>
  );
};
