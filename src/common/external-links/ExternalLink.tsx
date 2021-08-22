import React, { FC } from 'react';

interface Props {
  link: string;
  text?: string;
  title?: string;
}

export const ExternalLink: FC<Props> = ({ text, link, title, children }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' title={title}>
      {text || children}
    </a>
  );
};
