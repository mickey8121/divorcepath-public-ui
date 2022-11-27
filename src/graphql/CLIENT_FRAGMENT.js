import PROFILE_FRAGMENT from 'graphql/PROFILE_FRAGMENT';
import RELATIONSHIP_FRAGMENT from 'graphql/RELATIONSHIP_FRAGMENT';
import CHILDREN_FRAGMENT from 'graphql/CHILDREN_FRAGMENT';
import PROFESSIONAL_FRAGMENT from 'graphql/PROFESSIONAL_FRAGMENT';

const CLIENT_FRAGMENT = [
  'id',
  'updatedAt',
  'createdAt',
  { supportCalculations: ['id', 'updatedAt', 'showSpousalSupport'] },
  { user: ['id'] },
  {
    profile: PROFILE_FRAGMENT
  },
  {
    exProfile: PROFILE_FRAGMENT
  },
  {
    relationship: RELATIONSHIP_FRAGMENT
  },
  {
    children: CHILDREN_FRAGMENT
  },
  {
    address: ['city', 'country', 'postal', 'province', 'residence', 'street1', 'street2']
  },
  {
    exAddress: ['city', 'country', 'postal', 'province', 'residence', 'street1', 'street2']
  },
  {
    professionals: PROFESSIONAL_FRAGMENT
  },
  {
    profileProgress: [
      'background',
      'address',
      'children',
      'relationship',
      'exBackground',
      'exAddress'
    ]
  }
];

export default CLIENT_FRAGMENT;
