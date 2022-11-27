import React from 'react';

import ToggleCheckbox from 'components/common/inputs/ToggleCheckbox';

import useCalculationContext from 'hooks/useCalculationContext';

const CalculationToggleInput = () => {
  const { isProfessional, handleCalcCheckboxChange } = useCalculationContext();

  return (
    <ToggleCheckbox onChange={handleCalcCheckboxChange} margin="mr-3" isChecked={isProfessional}>
      <p className="toggle-checkbox-text">
        {`${isProfessional ? 'Professional' : 'Personal'} use. `}
        <span className="toggle-checkbox-span">
          {`(Click on the checkbox to switch to ${
            isProfessional ? 'personal' : 'professional'
          } use)`}
        </span>
      </p>
    </ToggleCheckbox>
  );
};
export default CalculationToggleInput;
