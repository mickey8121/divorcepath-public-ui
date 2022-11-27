import CHILD_SUPPORT_FRAGMENT from 'graphql/CHILD_SUPPORT_FRAGMENT';
import SPOUSAL_SUPPORT_FRAGMENT from 'graphql/SPOUSAL_SUPPORT_FRAGMENT';

const SUPPORT_CALCULATION_RESULT_FRAGMENT = [
  'id',
  'createdAt',
  {
    childSupport: [
      'formula',
      'payee',
      'payor',
      {
        clientChildSupport: CHILD_SUPPORT_FRAGMENT
      },
      {
        exChildSupport: CHILD_SUPPORT_FRAGMENT
      }
    ]
  },
  {
    spousalSupport: SPOUSAL_SUPPORT_FRAGMENT
  }
];

export default SUPPORT_CALCULATION_RESULT_FRAGMENT;
