import React from 'react';
import { add } from 'Utils/math';
import '../test.less';

interface IProps {
  a: number;
  b: number;
}

function ComputedOne(props: IProps) {
  const { a, b } = props;
  const sum = add(a, b);

  return (
    <p className='a'>{`122Hi, I1'm1 com23put1ed o234ne, my sum is1 ${sum}.`}</p>
  );
}

export default ComputedOne;
