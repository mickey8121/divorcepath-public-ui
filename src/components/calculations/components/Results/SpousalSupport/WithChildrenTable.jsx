import React, { useCallback, useMemo } from 'react';

import DonutChart from 'components/charts/DonutChart';
import BarChart from 'components/charts/BarChart';

import calc from 'utils/calc';
import customGet from 'utils/get';
import toUSD from 'utils/toUSD';

import IncomeTable from '../AmountTables/IncomeTable';
import BenefitsTable from '../AmountTables/BenefitsTable';
import TaxesAndDeductionsTable from '../AmountTables/TaxesAndDeductionsTable';

import Table from '../Table';

const barChartOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        offset: true
      }
    ]
  }
};

const WithChildrenTable = ({
  supportCalculation,
  scenario,
  exName,
  clientName,
  payor,
  payee,
  payorName,
  payeeName,
  showChildSupportResults,
  npvDiscountRate = 4,
  npvDuration = 0
}) => {
  const supportDoughnutData = useMemo(
    () => calc(scenario, `${payor}SpousalSupport`, 'monthlySpousalSupport', 'monthlyCash'),
    [scenario, payor]
  );

  const netIncomeComparison = useMemo(
    () => [
      customGet(scenario, 'clientSpousalSupport.monthlyIndi'),
      customGet(scenario, 'exSpousalSupport.monthlyIndi')
    ],
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

  const data = useMemo(
    () =>
      [
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
          title: 'With Children Spousal Support Formula*'
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport'),
          exValue: customGet(scenario, 'exSpousalSupport.monthlySpousalSupport'),
          label: 'Spousal Support',
          description:
            "Monthly gross spousal support paid or received by each party. Spousal support is deducted from the income of the payor and added to the income of the recipient. The recipient pays tax on support as income. The net amount (after tax) of support paid or received by each party is shown below in the row titled 'Net Support (After Tax)'"
        },
        showChildSupportResults && {
          clientValue: customGet(scenario, 'clientSpousalSupport.formulaMonthlyTableSupport') * -1,
          exValue: customGet(scenario, 'exSpousalSupport.formulaMonthlyTableSupport') * -1,
          label: 'Child Support (Table)',
          description: 'Monthly net child support paid or received by each party.'
        },
        showChildSupportResults && {
          clientValue:
            customGet(scenario, 'clientSpousalSupport.formulaMonthlyNotionalSupport') * -1,
          exValue: customGet(scenario, 'exSpousalSupport.formulaMonthlyNotionalSupport') * -1,
          label: 'Child Support (Notional)',
          description:
            "Notional child support to account for the costs incurred in relation to the children in each party's care."
        },
        showChildSupportResults && {
          clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.monthlySupport'),
          exValue: customGet(scenario, 'exSpousalSupport.childExpenses.monthlySupport'),
          label: 'Child Support (s. 7)',
          description: 'Section 7 child support, on an average monthly basis.'
        },
        showChildSupportResults && {
          clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.monthlyPaid') * -1,
          exValue: customGet(scenario, 'exSpousalSupport.childExpenses.monthlyPaid') * -1,
          label: 'Special Expenses (s. 7)',
          description: 'Section 7 special expenses paid by each party, on an average monthly basis.'
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlyTax') * -1,
          exValue: customGet(scenario, 'exSpousalSupport.monthlyTax') * -1,
          label: 'Taxes & Deductions',
          description:
            'Total taxes and deductions from disposable income used to calculate support.',
          resultsTable: (
            <TaxesAndDeductionsTable
              scenario={scenario}
              supportCalculation={supportCalculation}
              showSpousalSupport
              showChildSupportResults={showChildSupportResults}
            />
          )
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlyBenefits'),
          exValue: customGet(scenario, 'exSpousalSupport.monthlyBenefits'),
          label: 'Benefits & Credits',
          description: 'Total government benefits and credits received by each party.',
          resultsTable: (
            <BenefitsTable scenario={scenario} supportCalculation={supportCalculation} />
          )
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlyIndi'),
          exValue: customGet(scenario, 'exSpousalSupport.monthlyIndi'),
          label: 'Net Disposable Income ($)',
          description:
            'The net disposable income received by each party, after accounting for taxes, govenrment benefits, and support.'
        },
        {
          clientPercent: customGet(scenario, 'clientSpousalSupport.percentIndi', 0),
          exPercent: customGet(scenario, 'exSpousalSupport.percentIndi'),
          label: 'Net Disposable Income (%)',
          description: 'The percentage of total net disposable income received by each party.'
        },
        {
          title: 'Gross, Net & Lump Sum Spousal'
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport'),
          exValue: customGet(scenario, 'exSpousalSupport.monthlySpousalSupport'),
          label: 'Spousal Support (Gross)',
          description:
            "Monthly gross spousal support paid or received by each party. Spousal support is deducted from the income of the payor and added to the income of the recipient. The recipient pays tax on support as income. The net amount (after tax) of support paid or received by each party is shown below in the row titled 'Net Support (After Tax)'"
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlyCostSpousalSupport'),
          exValue: customGet(scenario, 'exSpousalSupport.monthlyCostSpousalSupport'),
          label: 'Spousal Support (After Tax)',
          description:
            'The actual cost and benefit of spousal support, after accounting for changes in taxes.'
        },
        {
          clientValue: customGet(scenario, 'clientSpousalSupport.npvSpousalSupport'),
          exValue: customGet(scenario, 'exSpousalSupport.npvSpousalSupport'),
          label: 'Lump Sum Spousal',
          description: (
            <span>
              <span>
                {`The net present value of spousal support, i.e. lump sum support, calculated based on an
            estimated duration of ${npvDuration} months and applying a ${npvDiscountRate}% discount rate to approximate
            future inflation. This NPV calculation assumes the lump sum payment is non-deductible and non-taxable to the
            payor/recipient, respectively. Note that this calculation assumes support payments, tax rates and government
            benefits remain constant for the estimated duration of support. `}
              </span>
              <a href="/" onClick={handleClick}>
                Edit discount rate and duration in calculation settings
              </a>
            </span>
          )
        }
      ].filter(d => d),
    [
      npvDiscountRate,
      supportCalculation,
      scenario,
      showChildSupportResults,
      npvDuration,
      handleClick
    ]
  );

  const monthlySpousalSupport = useMemo(
    () =>
      toUSD(
        Math.abs(Math.round(customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport')))
      ),
    [scenario]
  );

  return (
    <div className="details-table mt-3">
      <p>
        In the <b>{customGet(scenario, 'name')}</b> scenario, {payorName} pays {payeeName}{' '}
        {toUSD(
          Math.round(Math.abs(customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport')))
        )}{' '}
        in monthly spousal support, leaving {clientName} with{' '}
        <b>{(customGet(scenario, 'clientSpousalSupport.percentIndi') * 100).toFixed(1)}%</b> of
        combined net disposable income and {exName} with{' '}
        <b>{(customGet(scenario, 'exSpousalSupport.percentIndi') * 100).toFixed(1)}%</b>. &nbsp;Net
        of tax savings, support costs {payorName}
        &nbsp;
        {toUSD(customGet(scenario, `${payor}SpousalSupport.monthlyCostSpousalSupport`, 0))} and
        &nbsp;
        {payeeName} receives{' '}
        {toUSD(customGet(scenario, `${payee}SpousalSupport.monthlyCostSpousalSupport`, 0))} after
        paying tax on this support.
      </p>
      <div className="row no-gutters text-center chart-row pt-3">
        <div className="offset-lg-1 support-doughnut text-center">
          <DonutChart
            redraw
            data={supportDoughnutData}
            labels={['Spousal Support', 'Remaining Income']}
            subtext="monthly"
            text={monthlySpousalSupport}
            className="mb-4"
          />
          <span className="chart-label">Spousal Support</span>
        </div>
        <div className="col-8 col-lg-5 offset-lg-2 m-0 p-0 pl-2 text-center">
          <BarChart
            data={netIncomeComparison}
            labels={[clientName, exName]}
            subtext="monthly"
            options={barChartOptions}
          />
          <span className="chart-label">Net Disposable Income</span>
        </div>
      </div>
      <p>
        The table below shows calculation details for the <b>{customGet(scenario, 'name')}</b>{' '}
        scenario. Click an amount for more information. All amounts are monthly, pro rated amounts.
      </p>

      <Table data={data} exName={exName} clientName={clientName} />
    </div>
  );
};

export default WithChildrenTable;
