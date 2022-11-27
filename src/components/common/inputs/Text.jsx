import React, { useEffect, useRef } from 'react';

const Input = ({
  handleChange,
  handleBlur,
  name,
  placeholder,
  className,
  value,
  liftRef,
  handleFocus,
  type,
  disabled,
  onClick,
  min
}) => {
  const ref = useRef(null);

  useEffect(() => liftRef(ref), [liftRef]);

  return (
    <input
      type={type || 'text'}
      pattern={type === 'number' ? '[0-9]+([.,][0-9]+)?' : null}
      inputMode={type === 'number' ? 'decimal' : null}
      name={name}
      value={value}
      ref={ref}
      disabled={disabled}
      onFocus={handleFocus}
      placeholder={placeholder}
      className={className}
      onBlur={handleBlur}
      onChange={handleChange}
      onClick={onClick}
      min={min}
    />
  );
};

export default Input;
