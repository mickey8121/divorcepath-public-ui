import React from 'react';

import CalculationContext from './CalculationContext';

const CalculationContextProvider = ({ children, value }) => (
  <CalculationContext.Provider value={value}>{children}</CalculationContext.Provider>
);

export default CalculationContextProvider;
