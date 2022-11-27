import React, { Fragment, useState } from 'react';
import { FieldArray } from 'formik';

import { startCase } from 'lodash';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useCalculationContext from 'hooks/useCalculationContext';

import AmountModal from './AmountModal';
import regionIcons from './regionIcons';

const AmountSubTable = ({
  fieldType,
  amountLabel,
  partyType,
  amounts,
  amountModalOptions,
  amountModalOtherOptions,
  residence,
  formattedFieldType,
  supportCalculation,
}) => {
  const { type } = useCalculationContext();

  const pathToAllAmount = `${partyType}.${type}.${fieldType}.${type}.all.${type}`;

  const [show, setShow] = useState({});

  return (
    <Fragment>
      <div className="amount-table-header">
        <img
          src={regionIcons[residence]}
          alt={`${residence} ${fieldType}`}
          className="avatar avatar-sm mr-3"
          width="31"
          height="31"
        />
        <strong>{`${residence} ${amountLabel}`}</strong>
      </div>

      <FieldArray name={pathToAllAmount}>
        {arrayHelpers => (
          <React.Fragment>
            {amounts?.length > 0 ? (
              amounts.map((amount, index) => (
                <AmountModal
                  key={amount?.where?.id || index}
                  index={index}
                  amount={amount}
                  pathToAllAmount={pathToAllAmount}
                  show={show}
                  toggleActiveRow={setShow}
                  fieldType={fieldType}
                  options={amountModalOptions}
                  remove={() => arrayHelpers.remove(index)}
                />
              ))
            ) : supportCalculation?.calculationResult ? (
              <div className="amount-table-row">
                <i>None</i>
              </div>
            ) : (
              <div className="amount-table-row">
                <i>Calculate support to view benefits, credits & deductions</i>
              </div>
            )}

            <div
              className={classNames('amount-table-row', {
                disabled: !amountModalOptions?.length || !amountModalOtherOptions?.length,
              })}
              onClick={() => {
                if (!amountModalOptions?.length || !amountModalOtherOptions?.length) return;

                arrayHelpers.push({
                  key: `default_${formattedFieldType}`,
                  amount: 0,
                  defaultAmount: 0,
                  userInputs: {},
                  status: 'USER_ADDED',
                });

                setShow({ ...show, [amounts?.length]: true });
              }}
            >
              <em>
                {`Add ${startCase(fieldType)} `}
                <FontAwesomeIcon
                  icon="plus"
                  className="mr-2"
                  style={{ width: '14px', height: '16px' }}
                />
              </em>
            </div>
          </React.Fragment>
        )}
      </FieldArray>
    </Fragment>
  );
};

export default AmountSubTable;
