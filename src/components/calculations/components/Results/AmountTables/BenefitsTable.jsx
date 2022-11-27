/* eslint-disable react/no-array-index-key */

import React, { useMemo } from 'react';
import numeral from 'numeral';
import customGet from 'utils/get';
import getMergedAmounts from './getMergedAmounts';
import getCalculationContext from './calculationContext';
import AmountResultsTable from './AmountResultsTable';

const BenefitsTable = ({ supportCalculation, scenario }) => {
  const context = getCalculationContext(supportCalculation);
  const federalAmounts = getMergedAmounts('benefits', 'federal', scenario, context);
  const provincialAmounts = getMergedAmounts('benefits', 'provincial', scenario, context);
  const rows = useMemo(
    () => [
      {
        label: 'Federal Benefits',
        type: 'tax-total',
        client: numeral(
          customGet(scenario, `clientSpousalSupport.federalBenefits.total`),
          0.0
        ).format('($0,0'),
        ex: numeral(customGet(scenario, `exSpousalSupport.federalBenefits.total`), 0.0).format(
          '($0,0'
        )
      },
      ...federalAmounts,
      {
        label: 'Provincial Benefits',
        type: 'tax-total',
        client: numeral(
          customGet(scenario, `clientSpousalSupport.provincialBenefits.total`),
          0.0
        ).format('($0,0'),
        ex: numeral(customGet(scenario, `exSpousalSupport.provincialBenefits.total`), 0.0).format(
          '($0,0'
        )
      },
      ...provincialAmounts
    ],
    [federalAmounts, provincialAmounts, scenario]
  );

  return <AmountResultsTable name={scenario.name} rows={rows} context={context} />;
};

export default BenefitsTable;
