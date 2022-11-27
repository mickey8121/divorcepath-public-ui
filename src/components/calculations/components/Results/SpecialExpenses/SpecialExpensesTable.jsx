import React, { useCallback, useMemo } from 'react';

import BarChart from 'components/charts/BarChart';
import DonutChart from 'components/charts/DonutChart';

import customGet from 'utils/get';
import toUSD from 'utils/toUSD';
import IncomeTable from '../AmountTables/IncomeTable';

import Table from '../Table';

const barChartOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        offset: true
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const SpecialExpensesTable = ({
  scenario,
  supportCalculation,
  exName,
  clientName,
  showSpousalSupport,
  showChildSupportResults
}) => {
  const clientExpenses = useMemo(
    () => customGet(scenario, 'clientSpousalSupport.childExpenses.share', 0),
    [scenario]
  );
  const exExpenses = useMemo(() => customGet(scenario, 'exSpousalSupport.childExpenses.share', 0), [
    scenario
  ]);
  const expensesComparison = useMemo(() => [Math.round(clientExpenses), Math.round(exExpenses)], [
    clientExpenses,
    exExpenses
  ]);
  const rangeLabels = useMemo(() => [`${clientName}'s Share`, `${exName}'s Share`], [
    clientName,
    exName
  ]);
  const expensesDonut = useMemo(
    () =>
      expensesComparison[0] === 0 && expensesComparison[1] === 0 ? [1, 1] : expensesComparison,
    [expensesComparison]
  );

  const clientPercentShare = useMemo(
    () =>
      (customGet(scenario, 'clientSpousalSupport.childExpenses.percentShare', 0) * 100).toFixed(1),
    [scenario]
  );
  const exPercentShare = useMemo(
    () => (customGet(scenario, 'exSpousalSupport.childExpenses.percentShare', 0) * 100).toFixed(1),
    [scenario]
  );

  const childExpensesSupport = useMemo(
    () =>
      toUSD(
        Math.abs(Math.round(customGet(scenario, 'clientSpousalSupport.childExpenses.support', 0)))
      ),
    [scenario]
  );

  const payorName = useMemo(
    () =>
      customGet(scenario, 'clientSpousalSupport.childExpenses.support', 0) > 0
        ? clientName
        : exName,
    [scenario, clientName, exName]
  );

  const payeeName = useMemo(
    () =>
      customGet(scenario, 'clientSpousalSupport.childExpenses.support', 0) < 0
        ? clientName
        : exName,
    [scenario, clientName, exName]
  );

  const Description = useCallback(
    () => {
      if (showSpousalSupport)
        return (
          <p>
            The table below shows calculation details for the <b>{customGet(scenario, 'name')}</b>{' '}
            scenario. Click an amount for more information. All amounts are monthly, pro rated
            amounts.
          </p>
        );

      return (
        <p>
          The table below shows calculation details for special expense support. Click an amount for
          more information. All amounts are monthly, pro rated amounts.
        </p>
      );
    },
    [scenario, showSpousalSupport]
  );

  const data = useMemo(
    () => [
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.totalExpenses'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.totalExpenses'),
        label: 'Total Expenses',
        description: 'Total child-related special expenses eligible for s. 7 child support.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.paid'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.paid'),
        label: 'Expenses Paid',
        description:
          'The amount of special expenses directly paid by each party (i.e. not including any support payments).'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.additionalBenefits'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.additionalBenefits'),
        label: 'Change in Benefits',
        description:
          'Some expenses are tax deductible, which reduces taxable income and can increase government benefits. The special expenses sharing formula considers the sharing in expenses after accounting for any change in government benefits.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.taxSavings'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.taxSavings'),
        label: 'Change in Taxes',
        description:
          'Tax savings due to tax credits relating to special expenses paid by each party, e.g. credits relating to child care expenses.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.netPaid'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.netPaid'),
        label: 'Net Expenses Paid',
        description:
          'The net amount of child expenses directly paid by each party, after deducting any additional benefits or tax savings.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.guidelineIncome', 0),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.guidelineIncome', 0),
        label: 'Guideline Income',
        description: 'Guideline income for the purpose of calculating child support.',
        resultsTable: (
          <IncomeTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport', 0) * 12,
        exValue: customGet(scenario, 'exSpousalSupport.monthlySpousalSupport', 0) * 12,
        label: 'Spousal Support',
        description: 'Annual spousal support as calculated above.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.adjustedIncome', 0),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.adjustedIncome', 0),
        label: 'Adjusted Income',
        description:
          "Guideline income net spousal support, used to determine each party's share of special expenses."
      },
      {
        clientPercent: customGet(scenario, 'clientSpousalSupport.childExpenses.percentShare'),
        exPercent: customGet(scenario, 'exSpousalSupport.childExpenses.percentShare'),
        label: 'Share of Expenses (%)',
        description:
          'The percentage share of net expenses to be paid by each party, based on adjusted guideline income.'
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.share'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.share'),
        label: 'Share of Expenses ($)',
        description: "Each party's share of net expenses in $."
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.support'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.support'),
        label: 'Expense Support (Annual)',
        description:
          "Annual s. 7 support to be paid, calculated based on the difference between each party's share of expenses, and the actual net expenses paid by that party."
      },
      {
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.monthlySupport'),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.monthlySupport'),
        label: 'Expense Support (Monthly)',
        description:
          'Monthly average s. 7 support. Actual monthly support will depend on when expenses are actually paid.'
      }
    ],
    [scenario, supportCalculation, showChildSupportResults, showSpousalSupport]
  );

  return (
    <div className="mt-3">
      {showSpousalSupport && (
        <React.Fragment>
          <p>
            In the <b>{customGet(scenario, 'name')}</b> scenario, adjusting for spousal support,{' '}
            {clientName} has <b>{clientPercentShare}%</b> of net income and {exName} has{' '}
            <b>{exPercentShare}%</b> of net income. Each person should pay that percentage of total
            special expenses, after deducting any tax savings or benefits received in relation to
            the expense.
          </p>
          <p>
            Dividing net expenses on that basis, {payorName} would pay {payeeName} section 7 support
            in the amount of <b>{childExpensesSupport}</b>, as shown below.
          </p>
          <div className="row no-gutters text-center chart-row pt-3">
            <div className="offset-lg-1 support-doughnut text-center">
              <DonutChart
                redraw
                data={expensesDonut}
                labels={rangeLabels}
                subtext="annually"
                text={childExpensesSupport}
                className="mb-4"
              />
              <span className="chart-label">Expense Support</span>
            </div>
            <div className="col-8 col-lg-5 offset-lg-2 m-0 p-0 pl-2 text-center">
              <BarChart
                data={expensesComparison}
                labels={[clientName, exName]}
                subtext="monthly"
                options={barChartOptions}
              />
              <span className="chart-label">Share of Expenses</span>
            </div>
          </div>
        </React.Fragment>
      )}
      {!showSpousalSupport && (
        <React.Fragment>
          <p>
            <span>{clientName} has </span>
            <b>{clientPercentShare}%</b>
            <span> of net income and {exName} has </span>
            <b>{exPercentShare}%</b> of net income. Each person should pay that percentage of total
            special expenses, after deducting any tax savings or benefits received in relation to
            the expense.
          </p>
          <p>
            Dividing net expenses on that basis, {payorName} would pay {payeeName} section 7 support
            in the amount of <b>{childExpensesSupport}</b>.
          </p>
        </React.Fragment>
      )}

      <Description />

      <Table data={data} exName={exName} clientName={clientName} />
    </div>
  );
};

export default SpecialExpensesTable;
