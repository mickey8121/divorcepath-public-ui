import dayjs from 'dayjs';
import startCase from 'lodash/startCase';

import { fillChildren, fillIncomeValue, fillSupportProfile } from './initialValues';

const loadInitialValues = ({
  calculatorType,
  residence,
  client,
  hasChildren,
  showChildSupport,
  supportCalculation,
  type = 'create',
  isProfessional
}) => {
  let publicSavedInputs;

  if (typeof document !== 'undefined') publicSavedInputs = localStorage.getItem(calculatorType);

  if (publicSavedInputs && !supportCalculation) {
    try {
      const values = JSON.parse(publicSavedInputs);

      return {
        ...values,
        clientSupportProfile: {
          ...values.clientSupportProfile,
          create: {
            ...values.clientSupportProfile.create,
            firstName: isProfessional ? 'Client' : 'You'
          }
        }
      };
    } catch (err) {}
  }

  const defaultClientResidence =
    supportCalculation?.clientSupportProfile?.residence ||
    client?.address?.residence ||
    startCase(residence) ||
    'Alberta';

  const defaultExResidence =
    supportCalculation?.exSupportProfile?.residence ||
    client?.exAddress?.residence ||
    startCase(residence) ||
    'Alberta';

  const clientHasChildren = !!client?.children?.length > 0;

  const hasChildrenValue =
    typeof hasChildren === 'undefined' || type === 'update'
      ? (type === 'create' && clientHasChildren) ||
        calculatorType === 'CHILD' ||
        supportCalculation?.hasChildren ||
        false
      : hasChildren;

  const initialValues = {
    title: supportCalculation?.title || `Untitled Calculation`,
    agreedChildSupport: supportCalculation?.agreedChildSupport || -1,
    agreedSpousalSupport: supportCalculation?.agreedSpousalSupport || -1,
    showSpousalSupport: supportCalculation?.showSpousalSupport || calculatorType === 'SPOUSAL',
    showChildSupport,
    npvDiscountRate: supportCalculation?.npvDiscountRate || 4,
    npvDuration: supportCalculation?.npvDuration || null,
    taxYear: supportCalculation?.taxYear || dayjs().format('YYYY'),
    hasChildren: hasChildrenValue,

    clientSupportProfile: {
      create: fillSupportProfile({
        supportProfile: supportCalculation?.clientSupportProfile,
        profile: client?.profile,
        defaultName: isProfessional ? 'Client' : 'You',
        defaultResidence: defaultClientResidence
      })
    },

    exSupportProfile: {
      create: fillSupportProfile({
        supportProfile: supportCalculation?.exSupportProfile,
        profile: client?.exProfile,
        defaultName: 'Ex',
        defaultResidence: defaultExResidence
      })
    },

    children: fillChildren(supportCalculation?.children || []),
    childExpenses: fillIncomeValue(supportCalculation?.childExpenses)
  };

  if (calculatorType === 'SPOUSAL') {
    const { __typename, id, ...relationship } =
      supportCalculation?.relationship || client?.relationship || {};

    if (supportCalculation?.relationship) {
      return {
        ...initialValues,
        relationship: {
          create: {
            id,
            ...relationship
          }
        }
      };
    }

    const defaultRelationship = {
      cohabitationDate: null,
      separationDate: null
    };

    const relationshipObj = Object.values(relationship).length ? relationship : defaultRelationship;

    return {
      ...initialValues,
      relationship: {
        create: relationshipObj
      }
    };
  }

  return initialValues;
};

export default loadInitialValues;
