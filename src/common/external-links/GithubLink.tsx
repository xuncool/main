import { GithubOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { ExternalLink } from './ExternalLink';

interface Props {
  username?: string;
  link?: string;
}

export const GithubLink: FC<Props> = ({ username, link, children }) => {
  const userLink = link || `https://github.com/${username}`;

  return (
    <ExternalLink link={userLink}>
      {children || <GithubOutlined />}
    </ExternalLink>
  );
};
