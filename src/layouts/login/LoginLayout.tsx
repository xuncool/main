import React, { FC } from 'react';
import { LoginByQq } from 'Src/common/third-login/qq/LoginByQq';
import './index.scss';

export const LoginLayout: FC = ({ children }) => {
  const thridLogins = [<LoginByQq />];
  return (
    <div className='login-layout'>
      <div className='login-layout-content'>{children}</div>
      <div className='login-layout-other'>{thridLogins}</div>
    </div>
  );
};
