import React, { useMemo } from 'react';
import toUSD from 'utils/toUSD';

import DonutChart from 'components/charts/DonutChart';
import BarChart from 'components/charts/BarChart';
import customGet from 'utils/get';
import IncomeTable from '../AmountTables/IncomeTable';

import Table from '../Table';

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        offset: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const DetailsTable = ({
  scenario,
  exName,
  clientName,
  payor,
  showSpousalSupport,
  payorName,
  supportCalculation,
  showChildSupportResults,
}) => {
  const totalSupportLabels = ['Spousal Support', 's.3 Child Support', 's.7 Child Support'];
  const clientIncome = customGet(scenario, 'clientSpousalSupport.monthlyIncomeNetSupport', '');
  const clientCash = customGet(scenario, 'clientSpousalSupport.monthlyCash', '');
  const exIncome = customGet(scenario, 'exSpousalSupport.monthlyIncomeNetSupport', '');
  const incomeComparison = [Math.round(clientIncome), Math.round(exIncome)];
  const incomeDonut =
    incomeComparison[0] === 0 && incomeComparison[1] === 0 ? [0, clientCash] : incomeComparison;
  const donutLabels =
    incomeComparison[0] === 0 && incomeComparison[1] === 0
      ? ['Total Support', 'Monthly Cash']
      : totalSupportLabels;
  // need to compute net cash based on guideline income plus/minus support
  // need to compute monthly average support, total annual support

  const totalSupport = useMemo(
    () =>
      toUSD(Math.abs(Math.round(customGet(scenario, `${payor}SpousalSupport.totalSupport`, 0)))),
    [payor, scenario],
  );

  const monthlyTotalSupport = useMemo(
    () =>
      toUSD(
        Math.abs(Math.round(customGet(scenario, `${payor}SpousalSupport.monthlyTotalSupport`, 0))),
      ),
    [payor, scenario],
  );

  const exMonthlyIncomeNetSupport = useMemo(
    () => toUSD(Math.round(customGet(scenario, 'exSpousalSupport.monthlyIncomeNetSupport', 0))),
    [scenario],
  );

  const clientMonthlyIncomeNetSupport = useMemo(
    () => toUSD(Math.round(customGet(scenario, 'exSpousalSupport.monthlyIncomeNetSupport', 0))),
    [scenario],
  );

  const clientMonthlyNetSpousalSupport = useMemo(
    () =>
      toUSD(Math.round(customGet(scenario, 'clientSpousalSupport.netSpousalSupport', 0) / 12.0)),
    [scenario],
  );
  const exMonthlyNetSpousalSupport = useMemo(
    () => toUSD(Math.round(customGet(scenario, 'exSpousalSupport.netSpousalSupport', 0) / 12.0)),
    [scenario],
  );

  const exMonthlyNetSupport =
    customGet(scenario, 'exSpousalSupport.monthlyChildSupportNet', 0) +
    Math.round(customGet(scenario, 'exSpousalSupport.netSpousalSupport', 0) / 12.0);

  const clientMonthlyNetSupport =
    customGet(scenario, 'clientSpousalSupport.monthlyChildSupportNet', 0) +
    Math.round(customGet(scenario, 'clientSpousalSupport.netSpousalSupport', 0) / 12.0);

  const spousalRows = useMemo(() => {
    if (showSpousalSupport === true) {
      return [
        {
          label: 'Gross Spousal Support',
          clientValue: customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport', 0),
          exValue: customGet(scenario, 'exSpousalSupport.monthlySpousalSupport', 0),
          description: 'Monthly spousal support payments as calculated above.',
        },
        {
          label: 'After-Tax Spousal Support',
          clientValue: clientMonthlyNetSpousalSupport,
          exValue: exMonthlyNetSpousalSupport,
          description: 'Net of tax, monthly spousal support payments as calculated above.',
        },
      ];
    }

    return [];
  }, [scenario, showSpousalSupport, clientMonthlyNetSpousalSupport, exMonthlyNetSpousalSupport]);

  const data = useMemo(
    () => [
      {
        label: 'Monthly Income',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyGuidelineIncome', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyGuidelineIncome', 0),
        description: 'Monthly guideline income used to calculate support.',
        resultsTable: (
          <IncomeTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
          />
        ),
      },
      ...spousalRows,
      {
        label: 'Child Support (Monthly)',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyChildSupportNet', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyChildSupportNet', 0),
        description: 'Monthly s. 3 child support as calculated above.',
      },
      {
        label: 'Child Support (s.7)',
        clientValue: customGet(scenario, 'clientSpousalSupport.childExpenses.monthlySupport', 0),
        exValue: customGet(scenario, 'exSpousalSupport.childExpenses.monthlySupport', 0),
        description:
          'Monthly average support to assist with special child-related expenses, as calculated above.',
      },
      {
        label: 'Gross Total Support',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyTotalSupport', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyTotalSupport', 0),
        description: 'Total average monthly support payments.',
      },
      {
        label: 'Gross Monthly Income',
        clientValue: customGet(scenario, 'clientSpousalSupport.monthlyIncomeNetSupport', 0),
        exValue: customGet(scenario, 'exSpousalSupport.monthlyIncomeNetSupport', 0),
        description: 'Gross monthly income including total support obligations.',
      },
      {
        label: 'Net Total Support (After Tax)',
        clientValue: clientMonthlyNetSupport,
        exValue: exMonthlyNetSupport,
        description: 'Total combined support, after accounting for tax on any spousal support.',
      },
    ],
    [
      scenario,
      spousalRows,
      clientMonthlyNetSupport,
      exMonthlyNetSupport,
      showSpousalSupport,
      showChildSupportResults,
      supportCalculation,
    ],
  );
  return (
    <div className="mt-3">
      {showSpousalSupport ? (
        <React.Fragment>
          <p>
            In the <b>{customGet(scenario, 'name')}</b> scenario, adjusting for spousal support,{' '}
            {payorName} pays<b>{totalSupport}</b> in total support per year, an average of{' '}
            {monthlyTotalSupport} per month.
          </p>
          <p>
            Section 7 child support (for special expenses) is payable when the expense is incurred,
            so actual monthly support will vary.
          </p>
          <p>
            On a monthly basis, {clientName} would have an average of{' '}
            <b>{toUSD(Math.round(customGet(scenario, 'clientSpousalSupport.monthlyCash')))}</b> in
            after tax cash, while
            {exName} will have{' '}
            <b>{toUSD(Math.round(customGet(scenario, 'exSpousalSupport.monthlyCash')))}</b>.
          </p>

          <div className="row no-gutters text-center chart-row pt-3">
            <div className="offset-lg-1 support-doughnut text-center">
              <DonutChart
                redraw
                data={incomeDonut}
                labels={donutLabels}
                subtext="monthly"
                text={toUSD(
                  Math.round(
                    Math.abs(customGet(scenario, 'exSpousalSupport.monthlyTotalSupport', 0)),
                  ),
                )}
                className="mb-4"
              />
              <span className="chart-label">Total Support</span>
            </div>
            <div className="col-8 col-lg-5 offset-lg-2 m-0 p-0 pl-2 text-center">
              <BarChart
                data={incomeComparison}
                labels={[clientName, exName]}
                subtext="monthly"
                options={chartOptions}
              />
              <span className="chart-label">Net Monthly Income</span>
            </div>
          </div>

          <p>
            The table below shows calculation details for the <b>{customGet(scenario, 'name')}</b>{' '}
            scenario. Click an amount for more information. All amounts are monthly, pro rated
            amounts.
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>
            {payorName} pays<b>{totalSupport}</b> in total support per year, an average of{' '}
            <b>{monthlyTotalSupport}</b> per month.
          </p>
          <p>
            Section 7 child support (for special expenses) is payable when the expense is incurred,
            so actual monthly support will vary.
          </p>
          <p>
            On a monthly basis, {clientName} would have an average of{' '}
            <b>{clientMonthlyIncomeNetSupport}</b> in monthly income after support, while
            {exName}
            will have <b>{exMonthlyIncomeNetSupport}</b>.
          </p>
          <p>
            The table below shows calculation details for total support. Click an amount for more
            information. All amounts are monthly, pro rated amounts.
          </p>
        </React.Fragment>
      )}

      <Table data={data} clientName={clientName} exName={exName} />
    </div>
  );
};

export default DetailsTable;
