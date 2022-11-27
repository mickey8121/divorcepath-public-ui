/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';

import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import ChildrenForm from 'components/calculations/components/ChildrenForm/ChildrenForm';

import useCalculationContext from 'hooks/useCalculationContext';

import { defaultChildren } from 'components/calculations/utils/defaultValues';

const ChildrenFormContainer = () => {
  const { values, errors, touched } = useFormikContext();

  const { type, calculatorType } = useCalculationContext();

  const children = useMemo(() => values.children?.[type] || [], [type, values]);
  const hasError = useMemo(() => errors.children?.[type] || errors.children, [type, errors]);
  const isTouched = useMemo(() => touched.children?.[type] || touched.children || false, [
    touched,
    type,
  ]);

  const error = useMemo(() => {
    if (calculatorType === 'CHILD' && !isTouched && hasError && !Array.isArray(hasError))
      return hasError;

    if (typeof hasError === 'string' && isTouched) return hasError;

    if (!!Object.keys(hasError || {}).length && !!Object.keys(isTouched || {}).length) {
      if (Array.isArray(hasError)) return null;

      return hasError;
    }

    return null;
  }, [hasError, isTouched, calculatorType]);

  return (
    <div className="pt-2 my-3">
      <FieldArray name={`children.${type}`}>
        {arrayHelpers => (
          <div>
            {children.map((child, index) => (
              <ChildrenForm
                key={index}
                child={child.data || child}
                open={index === children.length - 1}
                index={index}
                remove={() => {
                  arrayHelpers.remove(index);
                }}
              />
            ))}
            <Button
              size="md"
              color="secondary"
              className={classnames('btn-icon-label mt-3', { 'invalid-feedback-btn': !!error })}
              onClick={() => {
                const child = {
                  ...defaultChildren,
                  firstName: `Child ${children.length + 1}`,
                };

                arrayHelpers.push(child);
              }}
            >
              <span className="btn-inner--text">
                <span>Add Child </span>
                <FontAwesomeIcon
                  icon="plus"
                  className="ml-2"
                  style={{ width: '14px', height: '16px' }}
                />
              </span>
            </Button>
          </div>
        )}
      </FieldArray>
      <div className={classnames('invalid-feedback fade', { show: !!error })}>{error}</div>
    </div>
  );
};

export default ChildrenFormContainer;
