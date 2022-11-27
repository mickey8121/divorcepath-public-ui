import React from 'react';
import classnames from 'classnames';

const Badge = ({ children, circle, color }) => {
  const className = classnames('badge', color ? `$badge-${color}` : 'badge-secondary', {
    'badge-circle': circle,
  });
  return <span className={className}>{children}</span>;
};

export default Badge;
