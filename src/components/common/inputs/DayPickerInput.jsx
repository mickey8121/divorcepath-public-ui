import React from 'react';

import InputValidationWrapper from './InputValidationWrapper';
import DatePicker from './DatePicker';

const DayPickerInput = ({
  name,
  placeholder,
  label,
  disabled,
  hint,
  hintComponent,
  isValidate,
  className,
  touchable,
  handleChange,
  maxDate,
  minDate
}) => (
  <InputValidationWrapper
    type="date"
    name={name}
    maxDate={maxDate}
    minDate={minDate}
    touchable={touchable}
    placeholder={placeholder}
    label={label}
    disabled={disabled}
    hint={hint}
    className={className}
    hintComponent={hintComponent}
    isValidate={isValidate}
    handleChange={handleChange}
  >
    <DatePicker />
  </InputValidationWrapper>
);

export default DayPickerInput;
