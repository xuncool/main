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

  return <p className='a'>{`Hi, I'm1 computed one, my sum is ${sum}.`}</p>;
}

export default ComputedOne;
