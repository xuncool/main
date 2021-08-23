import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { AuthLayout } from 'Src/layouts/auth/AuthLayout';
import { Login } from './login/Login';

export const Auth = () => {
  const { url } = useRouteMatch();
  return (
    <AuthLayout>
      <Switch>
        <Route path={`${url}/login`} component={Login} />
      </Switch>
    </AuthLayout>
  );
};
