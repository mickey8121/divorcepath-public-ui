import INPUT_RESULT_FRAGMENT from 'graphql/INPUT_RESULT_FRAGMENT';

const AMOUNT_RESULT_FRAGMENT = [
  'id',
  'key',
  'amount',
  'userAmount',
  'defaultAmount',
  'childSupport',
  'spousalSupport',
  'createdAt',
  'status',
  {
    userInputs: INPUT_RESULT_FRAGMENT
  },
  {
    defaultInputs: INPUT_RESULT_FRAGMENT
  }
];

export default AMOUNT_RESULT_FRAGMENT;
