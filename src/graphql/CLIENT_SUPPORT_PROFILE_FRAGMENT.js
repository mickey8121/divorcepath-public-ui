import AMOUNT_ARRAY_RESULT_FRAGMENT from 'graphql/AMOUNT_ARRAY_RESULT_FRAGMENT';

const CLIENT_SUPPORT_PROFILE_FRAGMENT = [
  'id',
  'gender',
  'residence',
  'hasNewPartner',
  'firstName',
  'birthDate',
  'lastName',
  'northernResident',
  'ruralResident',
  'disabled',
  'energyCosts',
  'propertyCosts',
  'partnerIncome',
  {
    income: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    hardship: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    adjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    federalBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    provincialBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    federalDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    provincialDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    federalCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
  },
  {
    provincialCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
  }
];

export default CLIENT_SUPPORT_PROFILE_FRAGMENT;
