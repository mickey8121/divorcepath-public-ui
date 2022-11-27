import isString from 'lodash/isString';

const formatAmountKey = amountKey => {
  if (isString(amountKey)) {
    if (amountKey.toLowerCase().includes('benefit')) {
      return 'Benefit';
    }
    if (amountKey.toLowerCase().includes('credit')) {
      return 'Credit';
    }
    if (amountKey.toLowerCase().includes('deduction')) {
      return 'Deduction';
    }
  }

  return '';
};

export default formatAmountKey;
