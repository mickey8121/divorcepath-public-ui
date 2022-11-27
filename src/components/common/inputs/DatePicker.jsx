import React, { useCallback } from 'react';
import classnames from 'classnames';

import RDatePicker from 'react-datepicker';
import MaskedInput from 'react-text-mask';

const DatePicker = ({
  disabled,
  name,
  value,
  isInvalid,
  setFieldValue,
  setFieldTouched,
  maxDate,
  minDate,
  handleChange
}) => {
  const customHandleChange = useCallback(
    inputValue => {
      try {
        handleChange(inputValue);
      } catch (error) {
        setFieldValue(name, inputValue);

        setTimeout(() => {
          setFieldTouched(name, true);
        }, 0);
      }
    },
    [setFieldValue, name, setFieldTouched, handleChange]
  );

  return (
    <RDatePicker
      customInput={
        <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} />
      }
      name={name}
      selected={value.isValid?.() ? value.toDate() : null}
      onChange={customHandleChange}
      onYearChange={customHandleChange}
      onMonthChange={customHandleChange}
      maxDate={maxDate}
      minDate={minDate}
      className={classnames('custom-date-picker', { 'is-invalid': isInvalid })}
      placeholderText="YYYY-MM-DD"
      dateFormat="yyyy-MM-dd"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      disabled={disabled}
      autoComplete="off"
    />
  );
};

export default DatePicker;
