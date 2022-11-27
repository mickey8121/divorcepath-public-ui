import React, { useMemo } from 'react';

import DonutChart from 'components/charts/DonutChart';
import BarChart from 'components/charts/BarChart';

import calc from 'utils/calc';
import customGet from 'utils/get';
import toUSD from 'utils/toUSD';

import WithoutChildrenTable from './WithoutChildrenTable';

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

const WithoutChildrenTableContainer = ({
  spousalSupport,
  supportCalculation,
  scenario,
  exName,
  clientName,
  payor,
  payee,
  payorName,
  payeeName,
  npvDiscountRate,
  npvDuration
}) => {
  const supportDoughnutData = useMemo(
    () => calc(scenario, `${payor}SpousalSupport`, 'monthlySpousalSupport', 'monthlyCash'),
    [payor, scenario]
  );
  const netIncomeComparison = useMemo(
    () => [
      customGet(scenario, 'clientSpousalSupport.monthlyIndi'),
      customGet(scenario, 'exSpousalSupport.monthlyIndi')
    ],
    [scenario]
  );

  return (
    <div className="details-table mt-3">
      <p>
        In the <b>{customGet(scenario, 'name')}</b> scenario, {payorName} pays {payeeName}{' '}
        {toUSD(
          Math.abs(Math.round(customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport')))
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
            text={toUSD(
              Math.round(
                Math.abs(customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport'))
              )
            )}
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
        scenario. Click an amount for more information. All amounts are <b>monthly, pro rated</b>{' '}
        amounts.
      </p>
      <WithoutChildrenTable
        supportCalculation={supportCalculation}
        spousalSupport={spousalSupport}
        scenario={scenario}
        clientName={clientName}
        exName={exName}
        npvDiscountRate={npvDiscountRate}
        npvDuration={npvDuration}
      />
    </div>
  );
};

export default WithoutChildrenTableContainer;
