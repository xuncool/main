import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { AuthLayout } from 'Src/layouts/Auth/Auth';
import { Login } from './Login';

export const Auth = () => {
  const { url } = useRouteMatch();
  return (
    <AuthLayout>
      <Switch>
        <Route path={`${url}/login`} exact component={Login} />
      </Switch>
    </AuthLayout>
  );
};
