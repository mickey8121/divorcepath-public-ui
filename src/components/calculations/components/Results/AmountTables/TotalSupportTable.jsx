/* eslint-disable react/no-array-index-key */

import React, { useMemo } from 'react';
import numeral from 'numeral';
import customGet from 'utils/get';
import getCalculationContext from './calculationContext';
import AmountResultsTable from './AmountResultsTable';

const TotalSupportTable = ({
  supportCalculation,
  scenario,
  showSpousalSupport,
  showChildSupportResults
}) => {
  const context = getCalculationContext(supportCalculation);
  const rows = useMemo(
    () => [
      showChildSupportResults && {
        label: 'Child Support',
        type: 'tax-section'
      },
      showChildSupportResults && {
        label: 'Annual s.3 Basic Child Support',
        type: 'tax-amount',
        client: numeral(
          customGet(
            supportCalculation,
            `calculationResult.childSupport.clientChildSupport.netAnnualSupport`
          )
        ).format('($0,0'),
        ex: numeral(
          customGet(
            supportCalculation,
            `calculationResult.childSupport.exChildSupport.netAnnualSupport`
          )
        ).format('($0,0')
      },
      showChildSupportResults && {
        label: 'Annual s.7 Expense Support',
        type: 'tax-amount',
        client: numeral(
          customGet(scenario, `clientSpousalSupport.childExpenses.monthlySupport`) * 12.0
        ).format('($0,0'),
        ex: numeral(
          customGet(scenario, `exSpousalSupport.childExpenses.monthlySupport`) * 12.0
        ).format('($0,0')
      },
      showSpousalSupport && {
        label: 'Spousal Support',
        type: 'tax-section'
      },
      showSpousalSupport && {
        label: 'Annual Spousal Support',
        type: 'tax-amount',
        client: numeral(
          customGet(scenario, `clientSpousalSupport.monthlySpousalSupport`) * 12.0
        ).format('($0,0'),
        ex: numeral(customGet(scenario, `exSpousalSupport.monthlySpousalSupport`) * 12.0).format(
          '($0,0'
        )
      },
      {
        label: 'Annual Total Support',
        type: 'tax-total',
        client: numeral(customGet(scenario, `clientSpousalSupport.totalSupport`)).format('($0,0'),
        ex: numeral(customGet(scenario, `exSpousalSupport.totalSupport`)).format('($0,0')
      },
      {
        label: 'Monthly Total Support',
        type: 'tax-total',
        client: numeral(
          customGet(scenario, `clientSpousalSupport.monthlyTotalSupport`),
          0.0
        ).format('($0,0'),
        ex: numeral(customGet(scenario, `exSpousalSupport.monthlyTotalSupport`), 0.0).format(
          '($0,0'
        )
      }
    ],
    [scenario, showSpousalSupport, showChildSupportResults, supportCalculation]
  );

  return <AmountResultsTable name={scenario.name} rows={rows} context={context} />;
};

export default TotalSupportTable;
