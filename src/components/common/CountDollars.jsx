import React from 'react';
import CountUp from 'react-countup';

const CountDollars = ({ amount }) => (
  <CountUp start={0} end={amount} decimals={0} prefix="$" delay={0}>
    {({ countUpRef }) => <span ref={countUpRef} />}
  </CountUp>
);

export default CountDollars;
