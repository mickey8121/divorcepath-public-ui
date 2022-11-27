/* eslint-disable react/no-array-index-key */

import React, { useMemo } from 'react';
import numeral from 'numeral';
import customGet from 'utils/get';
import getMergedAmounts from './getMergedAmounts';
import getCalculationContext from './calculationContext';
import AmountResultsTable from './AmountResultsTable';

const IncomeTable = ({
  supportCalculation,
  scenario,
  showSpousalSupport,
  showChildSupportResults
}) => {
  const context = getCalculationContext(supportCalculation);
  const incomes = getMergedAmounts('income', '', scenario, context);
  const adjustments = getMergedAmounts('adjustments', '', scenario, context);
  const rows = useMemo(
    () =>
      [
        {
          label: 'Income',
          type: 'tax-section'
        },
        ...incomes,
        {
          label: 'Line 15000 Income',
          type: 'tax-subtotal',
          client: numeral(customGet(scenario, `clientSpousalSupport.income.total`)).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.income.total`)).format('($0,0')
        },
        {
          label: 'Guideline Income Adjustments',
          type: 'tax-section'
        },
        ...adjustments,
        {
          label: 'Total Adjustments',
          type: 'tax-subtotal',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.adjustments.total`),
            0.0
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.adjustments.total`), 0.0).format(
            '($0,0'
          )
        },
        showSpousalSupport && {
          label: 'Spousal Support Guideline Income',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.monthlyGuidelineIncome`) * 12.0
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.monthlyGuidelineIncome`) * 12.0).format(
            '($0,0'
          )
        },
        showChildSupportResults && {
          label: 'Child Support Guideline Income',
          type: 'tax-total',
          client: numeral(
            customGet(
              supportCalculation,
              'calculationResult.childSupport.clientChildSupport.guidelineIncome'
            )
          ).format('($0,0'),
          ex: numeral(
            customGet(
              supportCalculation,
              'calculationResult.childSupport.exChildSupport.guidelineIncome'
            )
          ).format('($0,0')
        }
      ].filter(d => d),
    [
      incomes,
      adjustments,
      scenario,
      showSpousalSupport,
      showChildSupportResults,
      supportCalculation
    ]
  );

  return <AmountResultsTable name={scenario.name} rows={rows} context={context} />;
};

export default IncomeTable;
