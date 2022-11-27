import SUPPORT_CALCULATION_RESULT_FRAGMENT from 'graphql/SUPPORT_CALCULATION_RESULT_FRAGMENT';
import CHILDREN_FRAGMENT from 'graphql/CHILDREN_FRAGMENT';
import CLIENT_FRAGMENT from 'graphql/CLIENT_FRAGMENT';
import CLIENT_SUPPORT_PROFILE_FRAGMENT from 'graphql/CLIENT_SUPPORT_PROFILE_FRAGMENT';
import RELATIONSHIP_FRAGMENT from 'graphql/RELATIONSHIP_FRAGMENT';

const SUPPORT_CALCULATION_FRAGMENT = [
  'id',
  'isReportGenerated',
  'agreedChildSupport',
  'agreedChildSupportPayor',
  'agreedSpousalSupport',
  'hasChildren',
  'npvDiscountRate',
  'npvDuration',
  'showChildSupport',
  'showSpousalSupport',
  'taxYear',
  'title',
  'updatedAt',
  'createdAt',
  'showChildSupport',
  {
    professional: [
      'id',
      { profile: ['id', 'firstName', 'lastName'] },
      { organization: ['id', 'name', 'logo'] }
    ]
  },
  {
    calculationResult: SUPPORT_CALCULATION_RESULT_FRAGMENT
  },
  {
    children: CHILDREN_FRAGMENT
  },
  {
    childExpenses: [
      'id',
      'total',
      {
        all: [
          'id',
          'key',
          'amount',
          'userAmount',
          'createdAt',
          { userInputs: ['id', 'floatData', 'name'] },
          { defaultInputs: ['id', 'floatData'] }
        ]
      }
    ]
  },
  {
    client: CLIENT_FRAGMENT
  },
  {
    clientSupportProfile: CLIENT_SUPPORT_PROFILE_FRAGMENT
  },
  {
    exSupportProfile: CLIENT_SUPPORT_PROFILE_FRAGMENT
  },
  {
    relationship: RELATIONSHIP_FRAGMENT
  }
];

export default SUPPORT_CALCULATION_FRAGMENT;
