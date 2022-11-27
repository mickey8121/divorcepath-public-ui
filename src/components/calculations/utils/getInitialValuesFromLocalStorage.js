const getInitialValuesFromLocalStorage = (initialValues, calculatorType) => {
  if (typeof window !== 'object') return initialValues;

  const stringValues = localStorage.getItem(calculatorType);

  try {
    const values = JSON.parse(stringValues || '');

    if (typeof values !== 'object') return initialValues;

    return values;
  } catch (err) {
    return initialValues;
  }
};

export default getInitialValuesFromLocalStorage;
