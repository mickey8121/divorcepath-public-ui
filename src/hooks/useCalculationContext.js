import { useContext } from 'react';

import CalculationContext from 'context/CalculationContext/CalculationContext';

const useCalculationContext = () => useContext(CalculationContext);

export default useCalculationContext;
