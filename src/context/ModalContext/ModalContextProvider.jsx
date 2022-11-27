import React from 'react';

import ModalContext from 'context/ModalContext/ModalContext';

const ModalContextProvider = ({ children, value }) => (
  <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
);

export default ModalContextProvider;
