import React from 'react';
import classnames from 'classnames';

import { Button as BSButton } from 'reactstrap';

const Button = ({ children, className, color, ...props }) => (
  <BSButton
    type="button"
    color={color || 'primary'}
    className={classnames('custom-button', className)}
    {...props}
  >
    {children}
  </BSButton>
);

export default Button;
