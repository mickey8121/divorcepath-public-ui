import React, { useMemo } from 'react';
import toUSD from 'utils/toUSD';

import PieChart from 'components/charts/PieChart';
import BarChart from 'components/charts/BarChart';

import calc from 'utils/calc';
import customGet from 'utils/get';

import Table from '../Table';
import BenefitsTable from '../AmountTables/BenefitsTable';
import IncomeTable from '../AmountTables/IncomeTable';
import TotalSupportTable from '../AmountTables/TotalSupportTable';
import TaxesAndDeductionsTable from '../AmountTables/TaxesAndDeductionsTable';

const chartOptions = {
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

const MonthlyBudgetTable = ({
  scenario,
  exName,
  clientName,
  showSpousalSupport,
  showChildSupportResults,
  supportCalculation
}) => {
  const incomeLabels = [
    `${clientName} Taxes`,
    `${clientName} Benefits`,
    `${clientName} Support`,
    `${clientName} Net Cash`,
    `${exName} Taxes`,
    `${exName} Benefits`,
    `${exName} Support`,
    `${exName} Net Cash`
  ];

  const clientBudget = customGet(scenario, 'clientSpousalSupport.monthlyCash', '');
  const exBudget = customGet(scenario, 'exSpousalSupport.monthlyCash', '');
  const clientIncomeData = calc(
    scenario,
    'clientSpousalSupport',
    'monthlyTax',
    'monthlyBenefits',
    'monthlyTotalSupport'
  ).concat(clientBudget);
  const exIncomeData = calc(
    scenario,
    'exSpousalSupport',
    'monthlyTax',
    'monthlyBenefits',
    'monthlyTotalSupport'
  ).concat(exBudget);
  // convert negative support values to 0 for pie chart
  if (clientIncomeData[2] < 0) {
    clientIncomeData[2] = 0;
  }
  if (exIncomeData[2] < 0) {
    exIncomeData[2] = 0;
  }
  const budgetComparison = [Math.round(clientBudget), Math.round(exBudget)];
  const incomeData = clientIncomeData.concat(exIncomeData);

  // need to compute net cash based on guideline income plus/minus support
  // need to compute monthly average support, total annual support

  const monthlyBudgetData = useMemo(
    () => [
      {
        label: 'Monthly Guideline Income',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyGuidelineIncome', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyGuidelineIncome', 0),
        description: 'Income, on an average monthly basis.',
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
        label: 'Monthly Total Support',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyTotalSupport', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyTotalSupport', 0),
        description: 'Gross total monthly support, pre-tax.',
        resultsTable: (
          <TotalSupportTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        label: 'Monthly Tax & Deductions',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyTax', 0) * -1.0,
        exValue: customGet(scenario, 'exSpousalSupport.monthlyTax', 0) * -1.0,
        description:
          'Federal and provincial taxes and source deductions (CPP & EI), on an average monthly basis, after accounting for support payments.',
        resultsTable: (
          <TaxesAndDeductionsTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        label: 'Monthly Benefits',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyBenefits', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyBenefits', 0),
        description:
          'Government benefits, on an average monthly basis, after accounting for support payments.',
        resultsTable: <BenefitsTable scenario={scenario} supportCalculation={supportCalculation} />
      },
      {
        label: 'Net After-Tax Cash (Monthly)',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyCash', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyCash', 0),
        description:
          'Net monthly cash flow available to each party to budget with, after accounting for support, taxes and government benefits.'
      }
    ],
    [scenario, supportCalculation, showSpousalSupport, showChildSupportResults]
  );

  const annualBudgetData = useMemo(
    () => [
      {
        label: 'Guideline Income',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyGuidelineIncome', 0) * 12,
        exValue: customGet(scenario, 'exSpousalSupport.monthlyGuidelineIncome', 0) * 12,
        description: 'Guideline income, on an annual basis.',
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
        label: 'Total Support',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyTotalSupport', 0) * 12,
        exValue: customGet(scenario, 'exSpousalSupport.monthlyTotalSupport', 0) * 12,
        description: 'Total annual support, pre-tax.',
        resultsTable: (
          <TotalSupportTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        label: 'Total Tax & Deductions',
        clientValue: customGet(scenario, 'clientSpousalSupport.totalTax', 0),
        exValue: customGet(scenario, 'exSpousalSupport.totalTax', 0),
        description:
          'Federal and provincial taxes and source deductions (CPP & EI) after accounting for support payments.',
        resultsTable: (
          <TaxesAndDeductionsTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        label: 'Total Benefits',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyBenefits', 0) * 12,
        exValue: customGet(scenario, 'exSpousalSupport.monthlyBenefits', 0) * 12,
        description:
          'Government benefits on an annual basis, after accounting for support payments.',
        resultsTable: <BenefitsTable scenario={scenario} supportCalculation={supportCalculation} />
      },
      {
        label: 'Net After-Tax Cash (Annual)',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyCash', 0) * 12,
        exValue: customGet(scenario, 'exSpousalSupport.monthlyCash', 0) * 12,
        description:
          'Net annual cash flow available to each party to budget with, after accounting for support, taxes and government benefits.'
      }
    ],
    [scenario, supportCalculation, showSpousalSupport, showChildSupportResults]
  );

  return (
    <div className="mt-3">
      {showSpousalSupport && (
        <p>
          Budget details for the <b>{customGet(scenario, 'name')}</b> scenario are below. The pie
          chart below shows a breakdown of the combined income of both parties. The bar chart shows
          a comparison of the after-tax cash available to each person. Hover or tap on the chart for
          more information.
        </p>
      )}
      {!showSpousalSupport && (
        <p>
          The pie chart below shows a breakdown of the combined income of both parties. The bar
          chart shows a comparison of the after-tax cash available to each person. Hover or tap on
          the chart for more information.
        </p>
      )}
      <div className="row no-gutters text-center chart-row pt-2">
        <div className="support-doughnut text-center">
          <PieChart
            redraw
            data={incomeData}
            labels={incomeLabels}
            subtext="monthly"
            text={toUSD(
              Math.abs(Math.round(customGet(scenario, 'exSpousalSupport.monthlyTotalSupport', '')))
            )}
            className="mb-4"
          />
          <span className="chart-label">Income Breakdown</span>
        </div>
        <div className="col-8 col-lg-6 offset-lg-1 m-0 p-0 pl-2 text-center">
          <BarChart
            data={budgetComparison}
            labels={[clientName, exName]}
            subtext="monthly"
            options={chartOptions}
          />
          <span className="chart-label">Budget & Net Income</span>
        </div>
      </div>
      {showSpousalSupport && (
        <p>
          The table below shows net cash flow (after tax, support and benefits) calculation details
          for the <b>{customGet(scenario, 'name')}</b> scenario. Click an amount for more
          information.
        </p>
      )}
      {!showSpousalSupport && (
        <p>
          The table below shows net cash flow (after tax, support and benefits) calculation details
          for each party's monthly and annual budget. Click an amount for more information.
        </p>
      )}

      <div className="col-12 p-0 border-top">
        <div className="row no-gutters ml-1 mr-1">
          <div className="d-flex justify-content-between col-12 p-0 pb-2 pr-4 pl-2 amountrow">
            <div className="col-5 pt-3 pb-0 pr-0 align-text-bottom">&nbsp;</div>
            <div className="col-3 pt-3 pb-0 pl-0 align-text-bottom text-break">
              <div className="text-truncate">
                <strong>{clientName}</strong>
              </div>
            </div>
            <div className="col-3 pt-3 pb-0 pl-0 align-text-bottom text-break">
              <div className="text-truncate">
                <strong>{exName}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-12 p-0 border-0">
          <div className="row no-gutters">
            <div className="row no-gutters col-12 p-0 border-top">
              <div className="col-5 pt-3 pb-3 p-0 align-text-bottom truncated">
                <em>Monthly Budget</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table data={monthlyBudgetData} />

      <div className="d-flex">
        <div className="col-12 p-0 border-0">
          <div className="row no-gutters">
            <div className="row no-gutters col-12 p-0 border-top">
              <div className="col-5 pt-3 p-0 pb-3 align-text-bottom truncated">
                <em>Annual Budget</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table data={annualBudgetData} />
    </div>
  );
};

export default MonthlyBudgetTable;
