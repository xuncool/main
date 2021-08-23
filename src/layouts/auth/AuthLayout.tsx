import React, { FC } from 'react';
import { ExternalLink } from 'Src/common/external-links/ExternalLink';
import { GithubLink } from 'Src/common/external-links/GithubLink';
import { Icp } from 'Src/common/external-links/Icp';
import './index.scss';

export const AuthLayout: FC = ({ children }) => {
  const footerLinks = [
    <Icp />,
    <GithubLink username='xunserver' />,
    <ExternalLink text="xunserver's blog" link='https://blog.xunserver.cn' />,
  ];
  return (
    <div className='auth-layout'>
      <div className='auth-layout-header'>{process.env.APP_TITLE}</div>
      <div className='auth-layout-content'>{children}</div>
      <div className='auth-layout-footer'>{footerLinks}</div>
    </div>
  );
};
