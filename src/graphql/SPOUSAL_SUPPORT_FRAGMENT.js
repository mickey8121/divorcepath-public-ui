import AMOUNT_ARRAY_RESULT_FRAGMENT from 'graphql/AMOUNT_ARRAY_RESULT_FRAGMENT';

const SPOUSAL_SUPPORT_FRAGMENT = [
  'id',
  'formula',
  'maxDuration',
  'minDuration',
  'payee',
  'payor',
  'ruleOf65',
  'twentyYearRelationship',
  'yearsUntilEndSchool',
  'yearsUntilStartSchool',
  'ageAtSeparation',
  'durationOfRelationship',
  'clientCustodialPayorCs',
  'exCustodialPayorCs',
  'exCustodialPayorCsGrossUp',
  'clientCustodialPayorCsGrossUp',
  'clientAdjustedGuidelineIncome',
  'exAdjustedGuidelineIncome',
  'incomeDifferential',
  'claimAsDependentDefault',
  {
    scenarios: [
      'id',
      'name',
      'percent',
      {
        clientSpousalSupport: [
          'id',
          'annualCash',
          'annualIndi',
          {
            childExpenses: [
              'id',
              'monthlyAdditionalBenefits',
              'monthlyAdjustedIncome',
              'monthlyGuidelineIncome',
              'monthlyNetExpenses',
              'monthlyNetPaid',
              'monthlyPaid',
              'monthlySavings',
              'monthlyShare',
              'monthlySupport',
              'monthlyTaxSavings',
              'monthlyTotalExpenses',
              'netExpenses',
              'netPaid',
              'paid',
              'percentShare',
              'savings',
              'share',
              'support',
              'taxSavings',
              'totalExpenses',
              'additionalBenefits',
              'adjustedIncome',
              'guidelineIncome'
            ]
          },
          {
            federalBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalTaxAdjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          'federalTax',
          {
            income: [
              'id',
              {
                all: ['id', 'key', 'amount', 'userAmount', 'defaultAmount']
              },
              'incomeNetSpousal',
              'partnerIncome',
              'provincialTaxableIncome',
              'provincialTaxableIncomeNoExpenses',
              'provincialTaxableIncomeNoSupport',
              'spousalSupportGuidelineIncome',
              'total',
              'totalNetIncome',
              'adjustedFamilyIncome',
              'childSupportGuidelineIncome',
              'employmentIncome',
              'federalTaxableIncome',
              'federalTaxableIncomeNoExpenses',
              'federalTaxableIncomeNoSupport',
              'selfEmploymentIncome',
              'otherPartyTaxableIncome'
            ]
          },
          'incomeNetSupport',
          'monthlyBenefits',
          'monthlyCash',
          'monthlyChildSupportNet',
          'monthlyChildSupportNotional',
          'monthlyChildSupportTable',
          'formulaMonthlyTableSupport',
          'formulaMonthlyNotionalSupport',
          'monthlyCostSpousalSupport',
          'monthlyGuidelineIncome',
          'monthlyIncomeNetSupport',
          'monthlyIndi',
          'monthlySpousalSupport',
          'monthlyTax',
          'monthlyTotalSupport',
          'netSpousalSupport',
          'npvChildSupport',
          'npvSpousalSupport',
          'percentCash',
          'percentIndi',
          {
            provincialBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialTaxAdjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          'provincialTax',
          'totalSupport',
          'monthlyNdi',
          'annualNdi',
          'cppEi',
          'totalTax',
          {
            adjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            hardship: AMOUNT_ARRAY_RESULT_FRAGMENT
          }
        ]
      },
      {
        exSpousalSupport: [
          'id',
          'annualCash',
          'annualIndi',
          {
            childExpenses: [
              'id',
              'monthlyAdditionalBenefits',
              'monthlyAdjustedIncome',
              'monthlyGuidelineIncome',
              'monthlyNetExpenses',
              'monthlyNetPaid',
              'monthlyPaid',
              'monthlySavings',
              'monthlyShare',
              'monthlySupport',
              'monthlyTaxSavings',
              'monthlyTotalExpenses',
              'netExpenses',
              'netPaid',
              'paid',
              'percentShare',
              'savings',
              'share',
              'support',
              'taxSavings',
              'totalExpenses',
              'additionalBenefits',
              'adjustedIncome',
              'guidelineIncome'
            ]
          },
          {
            federalBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            federalTaxAdjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          'federalTax',
          {
            income: [
              'id',
              {
                all: ['id', 'key', 'amount', 'userAmount', 'defaultAmount']
              },
              'incomeNetSpousal',
              'partnerIncome',
              'provincialTaxableIncome',
              'provincialTaxableIncomeNoExpenses',
              'provincialTaxableIncomeNoSupport',
              'spousalSupportGuidelineIncome',
              'total',
              'totalNetIncome',
              'adjustedFamilyIncome',
              'childSupportGuidelineIncome',
              'employmentIncome',
              'federalTaxableIncome',
              'federalTaxableIncomeNoExpenses',
              'federalTaxableIncomeNoSupport',
              'selfEmploymentIncome',
              'otherPartyTaxableIncome'
            ]
          },
          'incomeNetSupport',
          'monthlyBenefits',
          'monthlyCash',
          'monthlyChildSupportNet',
          'monthlyChildSupportNotional',
          'monthlyChildSupportTable',
          'formulaMonthlyTableSupport',
          'formulaMonthlyNotionalSupport',
          'monthlyCostSpousalSupport',
          'monthlyGuidelineIncome',
          'monthlyIncomeNetSupport',
          'monthlyIndi',
          'monthlySpousalSupport',
          'monthlyTax',
          'monthlyTotalSupport',
          'netSpousalSupport',
          'npvChildSupport',
          'npvSpousalSupport',
          'percentCash',
          'percentIndi',
          {
            provincialBenefits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialCredits: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialDeductions: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            provincialTaxAdjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          'provincialTax',
          'totalSupport',
          'monthlyNdi',
          'annualNdi',
          'cppEi',
          'totalTax',
          {
            adjustments: AMOUNT_ARRAY_RESULT_FRAGMENT
          },
          {
            hardship: AMOUNT_ARRAY_RESULT_FRAGMENT
          }
        ]
      }
    ]
  }
];

export default SPOUSAL_SUPPORT_FRAGMENT;
