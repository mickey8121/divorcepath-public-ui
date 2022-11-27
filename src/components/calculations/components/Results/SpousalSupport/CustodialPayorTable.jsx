import React, { useMemo } from 'react';

import DonutChart from 'components/charts/DonutChart';
import BarChart from 'components/charts/BarChart';
import IncomeTable from '../AmountTables/IncomeTable';

import calc from 'utils/calc';
import customGet from 'utils/get';
import toUSD from 'utils/toUSD';

import WithoutChildrenTable from './WithoutChildrenTable';
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

const CustodialPayorTable = ({
  supportCalculation,
  spousalSupport,
  showChildSupportResults,
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

  const monthlySpousalSupport = useMemo(
    () =>
      toUSD(
        Math.round(Math.abs(customGet(scenario, 'clientSpousalSupport.monthlySpousalSupport')))
      ),
    [scenario]
  );

  const data = useMemo(
    () => [
      {
        label: 'Guideline Income',
        clientValue:
          customGet(
            spousalSupport,
            'scenarios[0].clientSpousalSupport.income.spousalSupportGuidelineIncome',
            0
          ) / 12.0,
        exValue:
          customGet(
            spousalSupport,
            'scenarios[0].exSpousalSupport.income.spousalSupportGuidelineIncome',
            0
          ) / 12.0,
        description: 'Monthly guideline income used to calculate spousal support.',
        resultsTable: (
          <IncomeTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport
            showChildSupportResults={showChildSupportResults}
          />
        )
      },
      {
        title: 'Custodial Payor Formula'
      },
      {
        label: 'Child Support (Notional or Table)',
        clientValue: customGet(spousalSupport, 'clientCustodialPayorCs', 0) / 12.0,
        exValue: customGet(spousalSupport, 'exCustodialPayorCs', 0) / 12.0,
        description: 'The notional or table child support paid by each party.'
      },
      {
        label: 'Gross-Up of Child Support',
        clientValue: customGet(spousalSupport, 'clientCustodialPayorCsGrossUp', 0) / 12.0,
        exValue:
          customGet(spousalSupport, 'exCustodialPayorCsGrossUp', 0)
            .toString()
            .substr(0, 15) / 12.0,
        description:
          'The difference, in percentage terms, between the gross incomes of both parties.'
      },
      {
        label: 'Adjusted Guideline Income',
        clientValue: customGet(spousalSupport, 'clientAdjustedGuidelineIncome', 0) / 12.0,
        exValue: customGet(spousalSupport, 'exAdjustedGuidelineIncome', 0) / 12.0,
        description:
          'Monthly adjusted guideline income, including grossed-up child support, used to calculate spousal support.'
      },
      {
        label: 'Gross Income Differential',
        clientValue: customGet(spousalSupport, 'incomeDifferential', 0) / 12.0,
        exValue: customGet(spousalSupport, 'incomeDifferential', 0) / 12.0,
        description:
          'The difference, in percentage terms, between the gross incomes of both parties.'
      }
    ],
    [spousalSupport, scenario, supportCalculation, showChildSupportResults]
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
        The table below shows how adjusted guideline income (the income used to calculate spousal
        support) is calculated for the <b>{customGet(scenario, 'name')}</b> scenario. Click an
        amount for more information. All amounts are <b>monthly, pro rated</b> amounts.
      </p>

      <Table data={data} exName={exName} clientName={clientName} />

      <p className="pt-2">
        The table below shows how spousal support is calculated (using adjusted guideline income as
        shown above) for the <b>{customGet(scenario, 'name')}</b> scenario. Click an amount for more
        information. All amounts are <b>monthly, pro rated</b> amounts.
      </p>

      <WithoutChildrenTable
        spousalSupport={spousalSupport}
        scenario={scenario}
        clientName={clientName}
        exName={exName}
        npvDiscountRate={npvDiscountRate}
        npvDuration={npvDuration}
        supportCalculation={supportCalculation}
        custodialPayor
      />
    </div>
  );
};

export default CustodialPayorTable;
