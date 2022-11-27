/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import NextLink from 'next/link';

const Link = ({ to, children, state, ...props }) => {
  const internal = useMemo(() => /^\/(?!\/)/.test(to), [to]);

  if (internal) {
    return (
      <NextLink to={to || ''} state={state} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default Link;
