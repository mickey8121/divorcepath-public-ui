import React, { useCallback, useMemo, useState } from 'react';
import { connect, getIn } from 'formik';

import classnames from 'classnames';
import dayjs from 'dayjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputValidationWrapper = ({
  children,
  type,
  formik,
  label,
  name,
  hintComponent,
  options,
  hint,
  labelClassName,
  className,
  append,
  prepend,
  handleChange,
  onClick,
  onBlur,
  onFocus,
  placeholder,
  isValueNegative = false,
  touchable = true,
  disabled = false,
  isValidate = true,
  disabledOnClick,

  ...props
}) => {
  const {
    errors,
    touched,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    setFieldError,
    values,
  } = formik;
  const [focused, setFocus] = useState('');
  const [textInput, setRef] = useState('');
  const [isOpenEye, setOpenEye] = useState(false);
  const hasError = getIn(errors, name, false);
  const isTouched = getIn(touched, name, false);
  const value = getIn(values, name);

  const inputClassName = useMemo(
    () =>
      classnames('form-control', className, {
        'is-invalid': isValidate && hasError && isTouched,
      }),
    [className, isValidate, isTouched, hasError],
  );

  const customHandleBlur = e => {
    if (onBlur) onBlur(e);
    handleBlur(e);
    setFocus('');
  };

  const customHandleFocus = useCallback(
    e => {
      if (onFocus) onFocus(e);
      if (
        type === undefined &&
        (value === 'You' || value === 'Client' || value === 'Ex' || value?.startsWith('Child'))
      )
        formik.handleChange({
          target: { name: e.target.name, value: '' },
        });
      if (type === 'number' && value === '0')
        formik.handleChange({
          target: { name: e.target.name, value: '' },
        });
      setFocus('custom-focused');
    },
    [onFocus, type, value, formik],
  );

  const liftRef = ref => {
    setRef(ref);
  };

  const handleTouched = () => setFieldTouched(name, true);

  const customHandleChange = useCallback(
    e => {
      if (type === 'number' && isValueNegative) {
        formik.handleChange({
          target: { name: e.target.name, value: Math.abs(e.target.value || 0) * -1 },
        });
      } else if (type === 'number') {
        formik.handleChange({
          target: { name: e.target.name, value: parseFloat(e.target.value || 0, 10) },
        });
      } else {
        formik.handleChange(e);
      }
    },
    [isValueNegative, formik, type],
  );

  const inputValue = useMemo(() => {
    if (type === 'number' && value === 0) return '';
    if (type === 'number') return parseFloat(value || 0, 10);

    if ([null, NaN, undefined].includes(value)) return '';
    if (type === 'date') return dayjs(value);

    return value;
  }, [value, type]);

  const childrenWithProps = React.cloneElement(children, {
    ...props,
    disabled,
    name,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    liftRef,
    placeholder: type === 'number' && !placeholder && value === 0 ? '0' : placeholder,
    isInvalid: isValidate && hasError && isTouched,
    type: type === 'password' ? (isOpenEye ? 'text' : 'password') : type,
    value: inputValue,
    options: options || null,
    className: `input-sm ${inputClassName}`,
    handleChange: handleChange || customHandleChange,
    handleBlur: customHandleBlur,
    onClick: touchable && handleTouched,
    handleFocus: customHandleFocus,
  });

  const handleFocus = useCallback(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, [textInput]);

  const handleClickOnEye = useCallback(() => {
    handleFocus();
    setOpenEye(!isOpenEye);
  }, [isOpenEye, handleFocus]);

  const inputIconStyle = useMemo(() => classnames('input-group-text', 'custom-is-valid', focused), [
    focused,
  ]);
  const prependContainerStyle = useMemo(
    () =>
      classnames('input-group-prepend', 'custom-is-valid', {
        'is-invalid': hasError && isTouched,
      }),
    [hasError, isTouched],
  );

  return (
    <div
      className={classnames('form-group custom-input ', {
        'disabled-active': disabled && disabledOnClick,
      })}
      onClick={() => disabled && disabledOnClick && disabledOnClick()}
    >
      {append || prepend || type === 'password' ? (
        <div className="input-group input-group-transparent">
          {prepend && (
            <div className={prependContainerStyle} onClick={handleFocus}>
              <span className={inputIconStyle}>
                <FontAwesomeIcon icon={prepend} />
              </span>
            </div>
          )}

          {childrenWithProps}

          {append && (
            <div className={prependContainerStyle} onClick={handleFocus}>
              <span className={inputIconStyle}>
                <FontAwesomeIcon icon={append} />
              </span>
            </div>
          )}

          {type === 'password' && (
            <div className={prependContainerStyle} onClick={handleClickOnEye}>
              <span className={inputIconStyle}>
                <FontAwesomeIcon icon={isOpenEye ? 'eye' : 'eye-slash'} />
              </span>
            </div>
          )}
        </div>
      ) : (
        childrenWithProps
      )}

      <div
        className={classnames('invalid-feedback fade', {
          show: isValidate && hasError && isTouched,
        })}
      >
        {isValidate && hasError && isTouched && hasError}
      </div>

      {hintComponent && hintComponent}

      {hint && <small className="form-text text-muted mt-1">{hint}</small>}
    </div>
  );
};

export default connect(InputValidationWrapper);
