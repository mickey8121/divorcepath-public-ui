import PROFILE_FRAGMENT from 'graphql/PROFILE_FRAGMENT';
import ORGANIZATION_LOCATION_FRAGMENT from 'graphql/ORGANIZATION_LOCATION_FRAGMENT';

const PROFESSIONAL_FRAGMENT = [
  'id',
  'type',
  {
    profile: PROFILE_FRAGMENT
  },
  'biography',
  {
    degree: ['id', 'institution', 'year', 'degree', 'abbreviation', 'createdAt', 'updatedAt']
  },
  {
    jurisdiction: ['id', 'jurisdiction', 'year', 'createdAt', 'updatedAt']
  },
  {
    locations: ORGANIZATION_LOCATION_FRAGMENT
  },
  'trialEnd',
  'createdAt',
  'updatedAt'
];

export default PROFESSIONAL_FRAGMENT;
