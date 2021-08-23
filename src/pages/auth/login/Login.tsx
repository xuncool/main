import React, { FC } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { LoginLayout } from 'Src/layouts/login/LoginLayout';
import { AccountLogin } from './account/AccountLogin';

export const Login: FC = () => {
  const routes = [
    {
      title: '账户名密码登录',
      component: AccountLogin,
      path: 'account',
    },
    {
      title: '验证码登录',
      component: AccountLogin,
      path: 'captcha',
    },
    {
      title: '一键登录',
      component: AccountLogin,
      path: 'one-key',
    },
  ];

  const { url } = useRouteMatch();
  return (
    <LoginLayout>
      <div className='login-type'>
        {routes.map((route) => (
          <NavLink
            to={`./${route.path}`}
            activeClassName='selected'
            key={route.path}
          >
            {route.title}
          </NavLink>
        ))}
      </div>
      <Switch>
        {routes.map((route) => (
          <Route
            path={`${url}/${route.path}`}
            exact
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </LoginLayout>
  );
};
