import React, { FC } from 'react';

export const CopyRight: FC = () => {
  const currentYears = new Date().getFullYear();
  return <span>2021-{currentYears} xunserver 出品</span>;
};
