/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
// import { useMutation } from '@apollo/client';
import { FieldArray, useFormikContext } from 'formik';

import get from 'lodash/get';
import numeral from 'numeral';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import Income from 'components/calculations/components/Incomes/Income';
import Guidelines from 'components/calculations/components/Incomes/Guidelines';
import Hardships from 'components/calculations/components/Incomes/Hardships';

import useCalculationContext from 'hooks/useCalculationContext';

import customGet from 'utils/get';
import allTaxTables from 'utils/taxTables';
import { defaultIncome } from 'components/calculations/utils/defaultValues';

const IncomesList = ({ partyType }) => {
  const { values, errors } = useFormikContext();
  const { type } = useCalculationContext();

  const options = useMemo(
    () => ({
      incomes: allTaxTables[values.taxYear].income,
      hardships: allTaxTables[values.taxYear].hardship,
      adjustments: allTaxTables[values.taxYear].adjustments,
      childExpenses: allTaxTables[values.taxYear].child_expenses,
    }),
    [values.taxYear],
  );

  const prefix = `${partyType}.${type}`;

  const pathToAllIncome = useMemo(() => `${prefix}.income.${type}.all.${type}`, [prefix, type]);

  const incomes = customGet(values, pathToAllIncome, []);
  const allIncomesError = get(errors, pathToAllIncome);

  const pathToAllAdjustments = useMemo(() => `${prefix}.adjustments.${type}.all.${type}`, [
    prefix,
    type,
  ]);
  const adjustments = customGet(values, pathToAllAdjustments, []);
  const adjustmentIds = useMemo(() => adjustments.map(adjustment => adjustment?.where?.id), [
    adjustments,
  ]);

  const pathToAllHardship = useMemo(() => `${prefix}.hardship.${type}.all.${type}`, [type, prefix]);
  const hardships = useMemo(() => customGet(values, pathToAllHardship, []), [
    values,
    pathToAllHardship,
  ]);
  const hardshipIds = useMemo(() => hardships.map(hardship => hardship?.where?.id), [hardships]);

  const totalIncome = useMemo(
    () =>
      values?.[partyType]?.[type]?.income?.[type]?.all?.[type]?.reduce(
        (acc, item) =>
          acc +
          parseInt(
            item?.data?.userAmount || item?.userAmount || item?.data?.amount || item?.amount || 0,
            10
          ),
        0
      ),
    [values, partyType, type]
  );

  return (
    <div className="income-list-container">
      <FieldArray name={pathToAllIncome}>
        {arrayHelpers => (
          <React.Fragment>
            {incomes?.map((income, index) => (
              <Income
                key={`income.${income?.where?.id || index}`}
                index={index}
                amount={income?.data || income}
                partyType={partyType}
                pathToAll={pathToAllIncome}
                options={options.incomes}
                fieldType="income"
                remove={() => {
                  arrayHelpers.remove(index);
                }}
              />
            ))}
            <div className="pb-2">
              &nbsp;Total Income:&nbsp;
              {numeral(totalIncome).format(' ($0,0')}* <br />
              <small>*Line 15000 on T1 Tax Return</small>
            </div>

            <Button
              size="md"
              color="secondary"
              onClick={() => {
                arrayHelpers.push(defaultIncome);
              }}
            >
              <span className="btn-inner--text">
                Add Income
                <FontAwesomeIcon
                  icon="plus"
                  className="ml-2"
                  style={{ width: '14px', height: '16px' }}
                />
              </span>
            </Button>

            {allIncomesError && (
              <span className="btn-inner--text invalid-feedback" style={{ color: 'red' }}>
                Required
              </span>
            )}
          </React.Fragment>
        )}
      </FieldArray>

      <Guidelines prefix={prefix} partyType={partyType} adjustmentIds={adjustmentIds} />

      <Hardships prefix={prefix} partyType={partyType} hardshipIds={hardshipIds} />
    </div>
  );
};

export default IncomesList;
