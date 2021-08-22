import React from 'react';
import { ExternalLink } from './ExternalLink';

export const Icp = () => {
  return (
    <ExternalLink
      text={process.env.APP_ICP}
      link='https://beian.miit.gov.cn/'
    />
  );
};
