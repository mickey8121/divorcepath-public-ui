/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import numeral from 'numeral';
import get from 'lodash/get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import ChildExpenses from 'components/calculations/components/ChildExpenses/ChildExpenses';

import useCalculationContext from 'hooks/useCalculationContext';
import useModalContext from 'hooks/useModalContext';

import { defaultChildExpense } from 'components/calculations/utils/defaultValues';

const ChildExpensesContainer = () => {
  const { values, setFieldError } = useFormikContext();
  const { type } = useCalculationContext();
  const { toggle } = useModalContext();

  const pathToAllChildExpenses = useMemo(() => `childExpenses.${type}.all.${type}`, [type]);

  const childExpenses = useMemo(() => get(values, pathToAllChildExpenses), [
    values,
    pathToAllChildExpenses,
  ]);

  const childExpensesError = false;
  const totalExpensesAmount = childExpenses?.reduce?.(
    (acc, childExpense) => acc + (childExpense?.data?.userAmount || childExpense.userAmount || 0),
    0,
  );

  return (
    <FieldArray name={pathToAllChildExpenses}>
      {({ remove, push }) => (
        <div className="child-expenses-container">
          {childExpenses?.map((expense, index) => (
            <ChildExpenses
              key={index}
              index={index}
              remove={() => remove(index)}
              type={type}
              expense={expense}
              pathToAllChildExpenses={pathToAllChildExpenses}
            />
          ))}

          <div className="mt-3">
            <span>Total Expenses: </span>
            {numeral(totalExpensesAmount).format('($0,0')}
          </div>

          <Button
            style={{ border: childExpensesError ? '1px solid red' : '1px solid transparent' }}
            className="btn-icon-label mt-3"
            color="secondary"
            size="md"
            onClick={() => {
              setFieldError(pathToAllChildExpenses, false);
              push(defaultChildExpense);
              toggle();
            }}
          >
            <span className="btn-inner--text">
              Add Expense
              <FontAwesomeIcon
                icon="plus"
                className="ml-2"
                style={{ width: '14px', height: '16px' }}
              />
            </span>
          </Button>
          <div style={{ color: childExpensesError ? 'red' : 'black' }} className="small">
            {childExpensesError}
          </div>
        </div>
      )}
    </FieldArray>
  );
};

export default ChildExpensesContainer;
