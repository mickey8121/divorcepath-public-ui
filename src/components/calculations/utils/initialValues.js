import dayjs from 'dayjs';

import isObject from 'lodash/isObject';

import getSchoolDates from 'utils/getSchoolDates';

import { defaultIncome } from './defaultValues';

const initialRelationship = (sc, client) => {
  if (isObject(sc?.relationship)) return sc?.relationship;

  const { __typename, ...rest } = client?.relationship || {};

  return rest;
};

const initialIncome = () => ({
  income: {
    create: {
      all: {
        create: [
          {
            key: 'employment_t4',
            userAmount: 0,
            amount: 0,
          },
        ],
      },
    },
  },
});

const fillIncomeValue = (savedIncomeValue, prefill) => {
  if (savedIncomeValue) {
    return {
      create: {
        id: savedIncomeValue?.id,
        total: savedIncomeValue?.total,
        all: {
          create: [...savedIncomeValue?.all]
            ?.sort((a, b) => (dayjs(a?.createdAt).isBefore(b?.createdAt) ? -1 : 1))
            ?.map(
              ({
                key,
                amount,
                createdAt,
                defaultAmount,
                userAmount,
                defaultInputs,
                userInputs,
                status,
              }) => {
                const userInputsForUpdate = userInputs?.length ? userInputs : undefined;

                return {
                  key,
                  amount,
                  createdAt,
                  userAmount,
                  defaultAmount,
                  status,
                  defaultInputs: {
                    create: defaultInputs?.map(
                      // eslint-disable-next-line no-shadow
                      ({ name, floatData, childrenArray, stringData }) => ({
                        name,
                        floatData,
                        stringData,
                        childrenArray: childrenArray?.length > 0 ? { set: childrenArray } : void 0,
                      }),
                    ),
                  },
                  userInputs: {
                    create: userInputsForUpdate?.map(
                      // eslint-disable-next-line no-shadow
                      ({ name, floatData, childrenArray, stringData }) => ({
                        name,
                        floatData,
                        stringData,
                        childrenArray: childrenArray?.length > 0 ? { set: childrenArray } : void 0,
                      }),
                    ),
                  },
                };
              },
            ),
        },
      },
    };
  }

  return {
    create: {
      all: {
        create: prefill ? [defaultIncome] : [],
      },
    },
  };
};

const fillSupportProfile = ({ supportProfile, profile, defaultName, defaultResidence }) => ({
  firstName: defaultName,
  lastName: supportProfile?.lastName || profile?.lastName,
  gender: supportProfile?.gender || profile?.gender || null,
  residence: supportProfile?.residence || defaultResidence,
  northernResident: supportProfile?.northernResident || false,
  ruralResident: supportProfile?.ruralResident || false,
  disabled: supportProfile?.disabled || false,
  energyCosts: supportProfile?.energyCosts || 0,
  propertyCosts: supportProfile?.propertyCosts || 0,
  birthDate: dayjs(supportProfile?.birthDate || profile?.birthDate || void 0).toDate(),

  hasNewPartner: supportProfile?.hasNewPartner || false,
  partnerIncome: supportProfile?.partnerIncome || null,

  income: fillIncomeValue(supportProfile?.income, true),
  hardship: fillIncomeValue(supportProfile?.hardship, false),
  adjustments: fillIncomeValue(supportProfile?.adjustments, false),
  federalBenefits: fillIncomeValue(supportProfile?.federalBenefits),
  provincialBenefits: fillIncomeValue(supportProfile?.provincialBenefits),
  federalDeductions: fillIncomeValue(supportProfile?.federalDeductions),
  provincialDeductions: fillIncomeValue(supportProfile?.provincialDeductions),
  federalCredits: fillIncomeValue(supportProfile?.federalCredits),
  provincialCredits: fillIncomeValue(supportProfile?.provincialCredits),
});

const fillChildren = savedChildren => {
  return {
    create: savedChildren?.map(
      ({
        firstName,
        gender,
        birthDate,
        isOfRelationship,
        claimAsDependent,
        isDependent,
        parenting,
        priorRelationship,
        supportedBy,
        supportDeductible,
        supportAmount,
        supportType,
        childIncome,
        disabled,
        startSchoolDate,
        endSchoolDate,
      }) => {
        const { defaultSchoolStartDate, defaultSchoolEndDate } = getSchoolDates(birthDate);

        return {
          firstName,
          gender,
          birthDate,
          isOfRelationship,
          isDependent: isDependent || true,
          parenting,
          claimAsDependent,
          disabled: disabled || false,
          priorRelationship: priorRelationship || true,
          supportedBy: supportedBy || 'EX',
          supportType: supportType || 'GUIDELINE',
          supportDeductible: supportDeductible || false,
          supportAmount: supportAmount || null,
          childIncome: childIncome || 0,
          startSchoolDate: startSchoolDate || defaultSchoolStartDate || null,
          endSchoolDate: endSchoolDate || defaultSchoolEndDate || null,
        };
      },
    ),
  };
};

export { fillChildren, fillSupportProfile, fillIncomeValue, initialIncome, initialRelationship };
