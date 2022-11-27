import React from 'react';

import Button from 'components/common/Button';

import useModalContext from 'hooks/useModalContext';

const UpgradeButton = ({ children, size = 'md', ...props }) => {
  const { toggle } = useModalContext();

  return (
    <Button id="upgradeButton" size={size} onClick={toggle} {...props}>
      {children || 'Upgrade'}
    </Button>
  );
};

export default UpgradeButton;
