import React, { useCallback, useMemo } from 'react';

import customGet from 'utils/get';
import IncomeTable from '../AmountTables/IncomeTable';

import Table from '../Table';

const WithoutChildrenTable = ({
  spousalSupport,
  supportCalculation,
  showChildSupportResults,
  scenario,
  exName,
  clientName,
  npvDiscountRate = 4,
  npvDuration = 0,
  custodialPayor = false
}) => {
  const percent = useMemo(
    () =>
      scenario?.name === 'Low Spousal' ? 0.015 : scenario?.name === 'Mid Spousal' ? 0.0175 : 0.02,
    [scenario]
  );

  const handleClick = useCallback(e => {
    e.preventDefault();

    const element =
      typeof document !== 'undefined' && document ? document.getElementById('options') : null;

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  const incomeRows = useMemo(
    () =>
      custodialPayor === true
        ? []
        : [
            {
              clientValue: customGet(scenario, 'clientSpousalSupport.monthlyGuidelineIncome') * 12,
              exValue: customGet(scenario, 'exSpousalSupport.monthlyGuidelineIncome') * 12,
              label: 'Guideline Income',
              description:
                'Adjusted spousal support guideline income, used to calculate spousal support.',
              resultsTable: (
                <IncomeTable
                  scenario={scenario}
                  supportCalculation={supportCalculation}
                  showSpousalSupport
                  showChildSupportResults={showChildSupportResults}
                />
              )
            },
            showChildSupportResults && {
              title: 'Without Children Spousal Support Formula*'
            }
          ],
    [custodialPayor, scenario, supportCalculation, showChildSupportResults]
  );

  const data = useMemo(
    () => [
      ...incomeRows,
      {
        label: 'Percent/Year of Marriage',
        clientPercent: percent,
        exPercent: percent,
        description:
          'The percentage of grosss income differential to be paid as spousal support, per year of marriage. Different for low, medium and high support scenarios.'
      },
      {
        label: 'Duration of Relationship',
        yearsValue: customGet(spousalSupport, 'durationOfRelationship'),
        description:
          'Years of marriage, plus any period of pre-marital cohabitation. Used to determine the total percentage of gross income differential to be paid as spousal support.'
      },
      {
        label: 'Percent of Differential (%)',
        clientPercent: customGet(scenario, 'percent'),
        exPercent: customGet(scenario, 'percent'),
        description:
          'The total percentage of the gross income differential to be paid as spousal support, calculated as the percent per year of marriage multiplied by the duration of the relationship (in years).'
      },
      {
        label: 'Gross Income Differential ($)',
        clientValue: customGet(spousalSupport, 'incomeDifferential', 0) / 12.0,
        exValue: customGet(spousalSupport, 'incomeDifferential', 0) / 12.0,
        description: 'The difference, in dollars, between the gross incomes of both parties.'
      },
      {
        label: 'Spousal Support',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport'),
        exValue: customGet(scenario, 'exSpousalSupport.monthlySpousalSupport'),
        description:
          "Monthly gross spousal support paid or received by each party. Spousal support is deducted from the income of the payor and added to the income of the recipient. The recipient pays tax on support as income. The net amount (after tax) of support paid or received by each party is shown below in the row titled 'Net Support (After Tax)'"
      },
      {
        label: 'Net Cost/Benefit Support',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyCostSpousalSupport'),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyCostSpousalSupport'),
        description:
          'The actual cost and benefit of spousal support, after accounting for changes in taxes.'
      },
      {
        label: 'Lump Sum',
        clientValue: customGet(scenario, 'clientSpousalSupport.npvSpousalSupport'),
        exValue: customGet(scenario, 'exSpousalSupport.npvSpousalSupport'),
        description: (
          <span>
            <span>
              {`The net present value of spousal support, i.e. lump sum support, calculated based on an
          estimated duration of ${npvDuration} months and applying a ${npvDiscountRate}% discount rate to approximate 
          future inflation. This NPV calculation assumes the lump sum payment is non-deductible and non-taxable
          to the payor/recipient, respectively. Note that this calculation assumes support payments, tax rates 
          and government benefits remain constant for the estimated duration of support. `}
            </span>
            <a href="/" onClick={handleClick}>
              Edit discount rate and duration in calculation settings
            </a>
          </span>
        )
      }
    ],
    [percent, spousalSupport, scenario, npvDiscountRate, npvDuration, handleClick, incomeRows]
  );

  return <Table data={data} exName={exName} clientName={clientName} />;
};

export default WithoutChildrenTable;
