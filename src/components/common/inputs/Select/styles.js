export default {
  container: provided => ({
    ...provided,
    width: 180
  }),
  valueContainer: provided => ({
    ...provided,
    height: 48,
    width: 180
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow:
      state.isFocused &&
      'inset 0 1px 1px rgba(31,45,61,.075), 0 0 20px rgba(110,0,255,.1) !important',
    borderColor: state.isFocused && 'rgba(110, 0, 255, 0.4) !important'
  }),
  menu: provided => ({
    ...provided,
    zIndex: 20
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '230px'
  })
};
