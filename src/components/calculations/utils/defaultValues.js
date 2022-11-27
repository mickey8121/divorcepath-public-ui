import getSchoolDates from 'utils/getSchoolDates';

export const defaultChildExpense = {
  userInputs: {
    create: [
      { floatData: 0, name: 'client' },
      { floatData: 0, name: 'ex' },
    ],
  },
  key: 'other',
  amount: 0,
  userAmount: 0,
};

export const defaultIncome = {
  key: 'employment_t4',
  amount: 0,
  userAmount: 0,
};

export const defaultAdjustment = {
  key: 'union_professional',
  amount: 0,
  userAmount: 0,
};

export const defaultHardship = {
  key: 'high_debts',
  amount: 0,
  userAmount: 0,
};

const { defaultSchoolStartDate, defaultSchoolEndDate } = getSchoolDates(new Date());

export const defaultChildren = {
  birthDate: new Date(),
  claimAsDependent: null,
  firstName: '',
  gender: 'FEMALE',
  parenting: 'SHARED',
  isOfRelationship: true,
  disabled: false,
  isDependent: true,
  priorRelationship: true,
  supportedBy: 'EX',
  supportType: 'GUIDELINE',
  supportDeductible: false,
  supportAmount: null,
  childIncome: 0,
  startSchoolDate: defaultSchoolStartDate,
  endSchoolDate: defaultSchoolEndDate,
};

export const freeIncomeOptions = [
  {
    key: 'employment_t4',
    label: 'T4 Employment',
    description:
      'Employment income for which you receive a T4. Reported on lines 10100-10200 of your tax return.',
    reference:
      'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t4-slips/t4-statement-remuneration-paid.html',
  },
];

export const defaultRelationship = {
  cohabitationDate: new Date(),
  separationDate: new Date(),
};
