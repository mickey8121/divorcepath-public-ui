/* eslint-disable react/no-array-index-key */
import React, { useState, useMemo } from 'react';
import capitalize from 'lodash/capitalize';
import useCalculationContext from 'hooks/useCalculationContext';

import AmountSubTable from './AmountSubTable';

const AmountTable = ({
  provincialAmounts,
  provincialOptions,
  federalAmounts,
  federalOptions,
  partyType,
  residence,
  fieldType,
  active,
  amountLabel,
  supportCalculation
}) => {
  const { calculatorType } = useCalculationContext();

  const [activeRow, toggleActiveRow] = useState(false);

  // deduction | credit | benefit
  const formattedFieldType = fieldType.slice(0, -1);

  // filter options to remove amounts that have already been claimed
  // we don't want users to be able to enter multiple credits of the same type - recipe for user input errors

  // Use map to get a simple array of "key" values.
  const provincialOptionsFilter = useMemo(
    () => provincialAmounts.map(amount => amount.data?.key || amount.key),
    [provincialAmounts]
  );
  const federalOptionsFilter = useMemo(
    () => federalAmounts.map(amount => amount.data?.key || amount.key),
    [federalAmounts]
  );

  // Use filter and "not" includes to filter the full set of options by the filter dataset's val.
  const filteredProvincialOptions = useMemo(
    () => provincialOptions.filter(option => !provincialOptionsFilter.includes(option.key)),
    [provincialOptions, provincialOptionsFilter]
  );

  const filteredFederalOptions = useMemo(
    () => federalOptions.filter(option => !federalOptionsFilter.includes(option.key)),
    [federalOptions, federalOptionsFilter]
  );

  return (
    <div className={`amount-table tab-pane${active ? 'show active' : ''}`}>
      <div className="p-3">
        {`Click on a ${formattedFieldType} for more information.`}
        {fieldType.includes('Benefits') &&
          calculatorType === 'SPOUSAL' && (
          <p>
            Note: Actual benefit amounts depend on the amount of spousal support. Benefit amounts
            shown below are without spousal support. The calculator will automatically account for
            the impact of spousal support on benefit amounts in each spousal support scenario.
          </p>
        )}
      </div>

      <AmountSubTable
        residence="Canada"
        amountLabel={amountLabel}
        fieldType={`federal${capitalize(fieldType)}`}
        otherFieldType={`provincial${capitalize(fieldType)}`}
        amounts={federalAmounts}
        partyType={partyType}
        activeRow={activeRow}
        toggleActiveRow={toggleActiveRow}
        amountModalOptions={filteredFederalOptions}
        amountModalOtherOptions={filteredProvincialOptions}
        formattedFieldType={formattedFieldType}
        supportCalculation={supportCalculation}
      />

      <AmountSubTable
        residence={residence}
        amountLabel={amountLabel}
        fieldType={`provincial${capitalize(fieldType)}`}
        otherFieldType={`federal${capitalize(fieldType)}`}
        partyType={partyType}
        activeRow={activeRow}
        toggleActiveRow={toggleActiveRow}
        amounts={provincialAmounts}
        amountModalOptions={filteredProvincialOptions}
        amountModalOtherOptions={filteredFederalOptions}
        formattedFieldType={formattedFieldType}
        supportCalculation={supportCalculation}
      />
    </div>
  );
};

export default AmountTable;
