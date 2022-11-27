/* eslint-disable react/no-array-index-key */

import React, { useMemo } from 'react';
import numeral from 'numeral';
import customGet from 'utils/get';
import getMergedAmounts from './getMergedAmounts';
import getCalculationContext from './calculationContext';
import AmountResultsTable from './AmountResultsTable';

const TaxesAndDeductionsTable = ({ supportCalculation, scenario, showSpousalSupport }) => {
  const context = getCalculationContext(supportCalculation);
  const federalDeductions = getMergedAmounts('deductions', 'federal', scenario, context);
  const provincialDeductions = getMergedAmounts('deductions', 'provincial', scenario, context);
  const federalCredits = getMergedAmounts('credits', 'federal', scenario, context);
  const provincialCredits = getMergedAmounts('credits', 'provincial', scenario, context);
  const federalAdjustments = getMergedAmounts('taxAdjustments', 'federal', scenario, context);
  const provincialAdjustments = getMergedAmounts('taxAdjustments', 'provincial', scenario, context);
  const rows = useMemo(
    () =>
      [
        {
          label: 'Line 15000 Income',
          type: 'tax-total',
          client: numeral(customGet(scenario, `clientSpousalSupport.income.total`)).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.income.total`)).format('($0,0')
        },
        {
          label: 'CPP/EI Source Deductions',
          type: 'tax-total',
          client: numeral(customGet(scenario, `clientSpousalSupport.cppEi`)).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.cppEi`)).format('($0,0')
        },
        {
          label: 'Federal Deductions',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.federalDeductions.total`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.federalDeductions.total`)).format(
            '($0,0'
          )
        },
        ...federalDeductions,
        showSpousalSupport && {
          label: 'Spousal Support',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport', 0) * 12
          ).format('($0,0'),
          ex: numeral(customGet(scenario, 'exSpousalSupport.monthlySpousalSupport', 0) * 12).format(
            '($0,0'
          )
        },
        {
          label: 'Federal Taxable Income',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.income.federalTaxableIncome`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.income.federalTaxableIncome`)).format(
            '($0,0'
          )
        },
        {
          label: 'Federal Tax Credits',
          type: 'tax-total',
          client: numeral(customGet(scenario, `clientSpousalSupport.federalCredits.total`)).format(
            '($0,0'
          ),
          ex: numeral(customGet(scenario, `exSpousalSupport.federalCredits.total`)).format('($0,0')
        },
        ...federalCredits,
        federalAdjustments.length > 0 && {
          label: 'Federal Tax Adjustments',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.federalAdjustments.total`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.federalAdjustments.total`)).format(
            '($0,0'
          )
        },
        ...federalAdjustments,
        {
          label: 'Federal Tax',
          type: 'tax-total',
          client: numeral(customGet(scenario, `clientSpousalSupport.federalTax`)).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.federalTax`), 0.0).format('($0,0')
        },
        {
          label: 'Provincial Deductions',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.provincialDeductions.total`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.provincialDeductions.total`)).format(
            '($0,0'
          )
        },
        ...provincialDeductions,
        {
          label: 'Provincial Taxable Income',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.income.federalTaxableIncome`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.income.federalTaxableIncome`)).format(
            '($0,0'
          )
        },
        {
          label: 'Provincial Tax Credits',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.provincialCredits.total`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.provincialCredits.total`)).format(
            '($0,0'
          )
        },
        ...provincialCredits,
        provincialAdjustments.length > 0 && {
          label: 'Provincial Tax Adjustments',
          type: 'tax-total',
          client: numeral(
            customGet(scenario, `clientSpousalSupport.provincialAdjustments.total`)
          ).format('($0,0'),
          ex: numeral(customGet(scenario, `exSpousalSupport.provincialAdjustments.total`)).format(
            '($0,0'
          )
        },
        ...provincialAdjustments,
        {
          label: 'Provincial Tax',
          type: 'tax-total',
          client: numeral(customGet(scenario, `clientSpousalSupport.provincialTax`)).format(
            '($0,0'
          ),
          ex: numeral(customGet(scenario, `exSpousalSupport.provincialTax`)).format('($0,0')
        }
      ].filter(d => d),
    [
      federalDeductions,
      federalCredits,
      federalAdjustments,
      provincialDeductions,
      provincialCredits,
      provincialAdjustments,
      scenario,
      showSpousalSupport
    ]
  );

  return <AmountResultsTable name={scenario.name} rows={rows} context={context} />;
};

export default TaxesAndDeductionsTable;
