import React, { useState, Fragment, useMemo } from 'react';
import { useFormikContext } from 'formik';

import customGet from 'utils/get';

import allTaxTables from 'utils/taxTables';
import useCalculationContext from 'hooks/useCalculationContext';
import AmountTable from './AmountTable';
import AmountTablesNavBar from './AmountTablesNavBar';

const mergeByKey = (a1, a2) =>
  a1?.map(
    itm =>
      itm.data
        ? {
            ...itm,
            data: {
              ...itm.data,
              ...a2?.find(item => item.key === itm.data?.key)
            }
          }
        : { ...a2?.find(item => item.key === itm.key), ...itm }
  );

const AmountTables = ({ partyType, supportCalculation }) => {
  const { values } = useFormikContext();
  const [activeTab, toggleActiveTab] = useState('credits');

  const taxTables = useMemo(() => allTaxTables[values.taxYear], [values.taxYear]);

  const { type } = useCalculationContext();

  const residence = customGet(values, `${partyType}.${type}.residence`, []);

  const federalBenefitsOptions = taxTables.federal.benefits;
  const provincialBenefitsOptions = customGet(taxTables, `provincial.${residence}.benefits`, []);
  const federalDeductionsOptions = taxTables.federal.deductions;
  const provincialDeductionsOptions = customGet(
    taxTables,
    `provincial.${residence}.deductions`,
    []
  );
  const federalCreditsOptions = taxTables.federal.credits;
  const provincialCreditsOptions = customGet(taxTables, `provincial.${residence}.credits`, []);

  const savedFederalBenefits = customGet(
    values,
    `${partyType}.${type}.federalBenefits.${type}.all.${type}`,
    []
  );
  const federalBenefits = mergeByKey(savedFederalBenefits, federalBenefitsOptions);

  const savedFederalCredits = customGet(
    values,
    `${partyType}.${type}.federalCredits.${type}.all.${type}`,
    []
  );

  const federalCredits = mergeByKey(savedFederalCredits, federalCreditsOptions);

  const savedFederalDeductions = customGet(
    values,
    `${partyType}.${type}.federalDeductions.${type}.all.${type}`,
    []
  );

  const federalDeductions = mergeByKey(savedFederalDeductions, federalDeductionsOptions);

  const savedProvincialBenefits = customGet(
    values,
    `${partyType}.${type}.provincialBenefits.${type}.all.${type}`,
    []
  );
  const provincialBenefits = mergeByKey(savedProvincialBenefits, provincialBenefitsOptions);

  const savedProvincialCredits = customGet(
    values,
    `${partyType}.${type}.provincialCredits.${type}.all.${type}`,
    []
  );
  const provincialCredits = mergeByKey(savedProvincialCredits, provincialCreditsOptions);

  const savedProvincialDeductions = customGet(
    values,
    `${partyType}.${type}.provincialDeductions.${type}.all.${type}`,
    []
  );
  const provincialDeductions = mergeByKey(savedProvincialDeductions, provincialDeductionsOptions);

  const benefitsCount = federalBenefits.length + provincialBenefits.length;
  const deductionsCount = federalDeductions.length + provincialDeductions.length;
  const creditsCount = federalCredits.length + provincialCredits.length;

  return (
    <Fragment>
      <AmountTablesNavBar
        partyType={partyType}
        activeTab={activeTab}
        toggleActiveTab={toggleActiveTab}
        benefitsCount={benefitsCount}
        deductionsCount={deductionsCount}
        creditsCount={creditsCount}
      />

      <div className="tab-content mb-4">
        <AmountTable
          active={activeTab === 'credits'}
          partyType={partyType}
          residence={residence}
          federalAmounts={federalCredits}
          provincialAmounts={provincialCredits}
          federalOptions={federalCreditsOptions}
          provincialOptions={provincialCreditsOptions}
          fieldType="credits"
          amountLabel="Tax Credits"
          supportCalculation={supportCalculation}
        />
        <AmountTable
          active={activeTab === 'deductions'}
          partyType={partyType}
          residence={residence}
          federalAmounts={federalDeductions}
          provincialAmounts={provincialDeductions}
          federalOptions={federalDeductionsOptions}
          provincialOptions={provincialDeductionsOptions}
          fieldType="deductions"
          amountLabel="Tax Deductions"
          supportCalculation={supportCalculation}
        />
        <AmountTable
          active={activeTab === 'benefits'}
          partyType={partyType}
          residence={residence}
          federalAmounts={federalBenefits}
          provincialAmounts={provincialBenefits}
          federalOptions={federalBenefitsOptions}
          provincialOptions={provincialBenefitsOptions}
          fieldType="benefits"
          amountLabel="Benefits"
          supportCalculation={supportCalculation}
        />
      </div>
    </Fragment>
  );
};

export default AmountTables;
