/* eslint-disable max-len */
import React, { useMemo } from 'react';

import numeral from 'numeral';
import find from 'lodash/find';
import get from 'lodash/get';

import useCalculationContext from 'hooks/useCalculationContext';

import PublicAmountModal from './PublicAmountModal';

const AmountModal = ({
  amount,
  fieldType,
  show,
  index,
  options,
  remove,
  toggleActiveRow,
  pathToAllAmount
}) => {
  const { type, mutationLoading } = useCalculationContext();

  const amountData = amount.data || amount;

  const formattedFieldType = fieldType.slice(0, -1);

  const newAmount = amountData?.key.includes('default_');

  const selectOptions = useMemo(
    () =>
      options.map(({ key, label }) => ({
        value: key,
        label
      })),
    [options]
  );

  const displayedValue = useMemo(
    () => {
      if (fieldType.includes('Deduction')) {
        if (['northern_residents', 'other_payments_deduction'].includes(amountData?.key)) {
          if (amountData?.userInputs?.update?.length) {
            return numeral(amountData.amount).format(' ($0,0)');
          }

          return numeral(amountData.defaultAmount || 0).format(' ($0,0)');
        }
        return numeral(
          amountData.userAmount || get(amountData, `defaultInputs.${type}.0.data.floatData`)
        ).format(' ($0,0)');
      }

      if (
        [
          'ontario_energy_and_property_tax_credit_seniors',
          'ontario_energy_and_property_tax_credit'
        ].includes(amountData?.key)
      ) {
        return numeral(amountData?.amount || amountData?.defaultAmount || 0).format(' ($0,0)');
      }

      if (fieldType.includes('Credit')) {
        return numeral(
          (amountData.userInputs &&
            find(amountData.userInputs[type], { data: { name: 'base_credit' } })?.data
              ?.floatData) ||
            (amountData.defaultInputs &&
              find(amountData?.defaultInputs[type], { data: { name: 'base_credit' } })?.data
                ?.floatData) ||
            get(amountData, 'amount')
        ).format(' ($0,0)');
      }

      return numeral(amountData?.userAmount || amountData?.amount).format('($0,0');
    },
    [fieldType, amountData, type]
  );

  const selectValue = useMemo(
    () => ({
      value: amountData?.key,
      label: amountData?.label
    }),
    [amountData]
  );

  const amountLabel = useMemo(
    () => {
      if (newAmount) {
        if (fieldType.includes('Benefit')) {
          return 'New Benefit';
        }
        if (fieldType.includes('Credit')) {
          return 'New Credit';
        }

        return 'New Deduction';
      }

      return amountData?.label;
    },
    [amountData.label, fieldType, newAmount]
  );

  return (
    <PublicAmountModal
      show={show}
      toggleActiveRow={toggleActiveRow}
      displayedValue={displayedValue}
      amountLabel={amountLabel}
      mutationLoading={mutationLoading}
      amount={amount}
      amountData={amountData}
      index={index}
      formattedFieldType={formattedFieldType}
      remove={remove}
      pathToAllAmount={pathToAllAmount}
      selectOptions={selectOptions}
      fieldType={fieldType}
      selectValue={selectValue}
    />
  );
};

export default AmountModal;
