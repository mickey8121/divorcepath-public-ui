import React, { useCallback, useMemo } from 'react';
import { getIn, useFormikContext } from 'formik';

import classnames from 'classnames';

import Select from 'react-select';

import customStyles from 'components/common/inputs/Select/styles';

import useModalContext from 'hooks/useModalContext';

const CustomSelect = ({
  name,
  className,
  options,
  handleChange,
  placeholder,
  label,
  defaultValue,
  onFocus,
  onBlur,
  disabled,
  isMulti,
  isClearable,
  classNamePrefix,
  disabledOnClick,
  isPremiumOptions,
  ...props
}) => {
  const { setFieldValue, setFieldTouched, values, errors, touched } = useFormikContext();
  const { toggle } = useModalContext();

  const value = useMemo(() => getIn(values, name), [name, values]);
  const hasError = useMemo(() => getIn(errors, name, false), [name, errors]);
  const isTouched = useMemo(() => getIn(touched, name, false), [name, touched]);

  const selectClassName = useMemo(
    () =>
      classnames('w-100', 'custom-select-input', className, {
        'is-invalid': hasError && isTouched,
      }),
    [className, hasError, isTouched],
  );

  const errorMessageStyles = useMemo(
    () =>
      classnames('invalid-feedback fade', {
        show: hasError && isTouched,
      }),
    [hasError, isTouched],
  );

  // const defaultValue = useMemo(() => ({ value: options?.[0]?.value, label: options?.[0]?.name }), [
  //   options
  // ]);

  const selectedValue = useMemo(() => {
    if (isMulti) {
      return value;
    }

    const currentValue = options?.find(opt => opt?.value === value);

    return {
      value,
      label: currentValue?.name || currentValue?.label,
    };
  }, [isMulti, options, value]);

  const handleSelect = useCallback(
    selectValue => {
      if (isPremiumOptions) toggle();

      if (isMulti) {
        setFieldValue(name, selectValue, false);
      } else {
        setFieldValue(name, selectValue.value, false);
        setFieldTouched(name, true, false);
      }
    },
    [isMulti, isPremiumOptions, name, setFieldTouched, setFieldValue, toggle],
  );

  const optionsMapped = useMemo(
    () =>
      options.map(option => ({
        ...option,
        label: option?.name || option?.label,
        value: option?.value,
        isDisabled: option?.isDisabled,
      })),
    [options],
  );

  return (
    <div
      className="form-group custom-input select-input w-100"
      onClick={() => {
        if (disabled && disabledOnClick) disabledOnClick();
      }}
    >
      {label && (
        <label className="form-control-label" style={{ marginBottom: '0.2rem' }}>
          {label}
        </label>
      )}

      <Select
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={disabled}
        placeholder={placeholder}
        name={name}
        className={selectClassName}
        classNamePrefix={classNamePrefix}
        options={optionsMapped}
        value={selectedValue}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange || handleSelect}
        styles={customStyles}
        {...props}
      />

      <div className={errorMessageStyles}>{hasError && isTouched && hasError}</div>
    </div>
  );
};

export default CustomSelect;
