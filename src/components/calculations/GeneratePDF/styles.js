export const customStyles = {
  container: provided => ({ ...provided, height: 48, width: 220 }),
  valueContainer: provided => ({ ...provided, height: 48, width: 220 }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms'
  })
};

export const customStylesSmall = {
  control: provided => ({ ...provided, height: 32 }),
  container: provided => ({ ...provided, height: 32, width: 220 }),
  valueContainer: provided => ({ ...provided, height: 32, width: 220, fontSize: '0.8rem' }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms'
  })
};