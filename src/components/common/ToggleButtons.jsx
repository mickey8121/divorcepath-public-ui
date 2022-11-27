import React, { useMemo } from 'react';
import classnames from 'classnames';
import { connect, getIn } from 'formik';

import { ButtonGroup } from 'reactstrap';

import Button from 'components/common/Button';

const ToggleButtons = ({
  buttons,
  disabled,
  formik,
  labelClassName,
  hint,
  hintComponent,
  label,
  name,
  className,
  size = 'lg',
  color = 'secondary',
  value,
  isValidate = true,
  disabledOnClick,
}) => {
  const { setFieldValue, values, errors, touched, isSubmitting, setFieldTouched } = formik;

  const hasError = useMemo(() => getIn(errors, name, false), [errors, name]);
  const isTouched = useMemo(() => getIn(touched, name, false), [touched, name]);
  const uncontrolledValue = useMemo(() => (value === undefined ? getIn(values, name) : value), [
    value,
    values,
    name,
  ]);

  return (
    <div className={classnames('form-group', className)}>
      {!!label && (
        <label
          className={labelClassName || 'form-control-label'}
          style={{ marginBottom: '0.2rem' }}
        >
          {label}
        </label>
      )}
      <ButtonGroup className="custom-btn-group" disabled={disabled || isSubmitting} name={name}>
        {buttons.map(
          ({ value: buttonValue, label: buttonLabel, disabled: isDisabled, onClick }) => (
            <Button
              color={color}
              size={size}
              key={buttonValue}
              value={buttonValue}
              disabled={(disabled || isDisabled) && !disabledOnClick}
              className={classnames({
                active: buttonValue === uncontrolledValue,
                disabled: disabled || isDisabled,
              })}
              onClick={() => {
                if (onClick && !(disabled || isDisabled)) {
                  onClick();
                  return;
                }

                if (disabledOnClick && (disabled || isDisabled)) {
                  disabledOnClick();
                } else {
                  setFieldValue(name, buttonValue);
                  setTimeout(() => setFieldTouched(name, true), 0);
                }
              }}
            >
              {buttonLabel}
            </Button>
          ),
        )}
      </ButtonGroup>
      <div
        className={classnames('invalid-feedback fade', {
          show: isValidate && hasError && isTouched,
        })}
      >
        {isValidate && hasError && isTouched && hasError}
      </div>
      {hintComponent}
      {hint && <small className="form-text text-muted mt-1">{hint}</small>}
    </div>
  );
};

export default connect(ToggleButtons);
