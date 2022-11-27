import React, { useState, useCallback } from 'react';

import ModalContextProvider from 'context/ModalContext/ModalContextProvider';

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return <ModalContextProvider value={{ toggle, isOpen }}>{children}</ModalContextProvider>;
};

export default ModalContainer;
