import React from 'react';

import InputValidationWrapper from './InputValidationWrapper';
import Text from './Text';

const TextInputComponent = React.memo(
  ({
    type,
    name,
    placeholder,
    label,
    disabled,
    hint,
    hintComponent,
    isValidate,
    touchable,
    className,
    labelClassName,
    append,
    prepend,
    onBlur,
    onFocus,
    onClick,
    handleChange,
    isValueNegative,
    disabledOnClick,
    min,
  }) => (
    <InputValidationWrapper
      name={name}
      type={type}
      placeholder={placeholder}
      label={label}
      touchable={touchable}
      hint={hint}
      hintComponent={hintComponent}
      isValidate={isValidate}
      className={className}
      append={append}
      prepend={prepend}
      handleChange={handleChange}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={onClick}
      labelClassName={labelClassName}
      isValueNegative={isValueNegative}
      disabledOnClick={disabledOnClick}
      min={min}
    >
      <Text />
    </InputValidationWrapper>
  ),
);

export default TextInputComponent;
