import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CloseButton = ({ toggle, children }) => (
  <div onClick={toggle} className="close-btn small">
    <FontAwesomeIcon
      icon="window-close"
      className="mr-2"
      style={{ width: '12.797px', height: '12.797px' }}
    />
    {children}
  </div>
);

export default CloseButton;
