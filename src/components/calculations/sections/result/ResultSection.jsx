/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';

import DonutChart from 'components/charts/DonutChart';
import BarChart from 'components/charts/BarChart';

import Warnings from 'components/calculations/components/Results/Warnings';
import SpousalSupportRanges from 'components/calculations/components/Results/SpousalSupportRanges';
import SupportsSummary from 'components/calculations/components/Results/SupportsSummary';
import TablesContainer from 'components/calculations/components/Results/SpousalSupport/TablesContainer';
import DurationDetails from 'components/calculations/components/Results/SpousalSupport/DurationDetails';
import ChildSupportS3Table from 'components/calculations/components/Results/ChildSupport/ChildSupportS3Table';
import SpecialExpensesTableContainer from 'components/calculations/components/Results/SpecialExpenses/SpecialExpensesTableContainer';
import NoExpenses from 'components/calculations/components/Results/ChildSupport/NoExpenses';
import TotalSupportTableContainer from 'components/calculations/components/Results/TotalSupport/TotalSupportTableContainer';
import MonthlyBudgetTableContainer from 'components/calculations/components/Results/MonthlyBudget/MonthlyBudgetTableContainer';
import GeneratePDFButtonContainer from 'components/calculations/GeneratePDF/GeneratePDFButtonContainer';

import useCalculationContext from 'hooks/useCalculationContext';

import customGet from 'utils/get';
import calc from 'utils/calc';
import toRoundUSD from 'utils/toRoundUSD';
import toUSD from 'utils/toUSD';

import SectionHeader from './SectionHeader';

const receiveCash = '/canada/images/icons/dusk/png/receive-cash.png';
const relationship = '/canada/images/icons/dusk/png/relationship.png';
const guardian = '/canada/images/icons/dusk/png/guardian.png';
const soccerBall = '/canada/images/icons/dusk/png/soccer-ball.png';
const moneyBox = '/canada/images/icons/dusk/png/money-box.png';
const pieChart = '/canada/images/icons/dusk/png/pie-chart.png';
const brief = '/canada/images/icons/dusk/png/brief.png';

const ResultSection = ({ supportCalculation }) => {
  const { isProfessional, calculatorType } = useCalculationContext();
  const childSupport = customGet(supportCalculation, 'calculationResult.childSupport', {});

  const { children, showChildSupport, showSpousalSupport, clientSupportProfile, exSupportProfile } =
    supportCalculation || {};

  const agreedChildSupport =
    supportCalculation?.agreedChildSupport < 0 ? null : supportCalculation?.agreedChildSupport;

  const showChildSupportResults =
    (showChildSupport && Object.keys(children).length > 0) || calculatorType === 'CHILD';
  const showSpousalSupportResults = showSpousalSupport || calculatorType === 'SPOUSAL';

  const clientFirstName = customGet(supportCalculation, 'clientSupportProfile.create.firstName');
  const exFirstName = customGet(supportCalculation, 'exSupportProfile.create.firstName');

  const spousalSupport = customGet(supportCalculation, 'calculationResult.spousalSupport', {});
  const agreedSpousalSupport =
    supportCalculation?.agreedSpousalSupport < 0 ? null : supportCalculation?.agreedSpousalSupport;

  const scenarios = customGet(spousalSupport, 'scenarios', []);
  const payor = customGet(spousalSupport, 'payor', '');
  const payee = customGet(spousalSupport, 'payee', '');
  // const csPayor = customGet(childSupport, 'payor', '');
  // const csPayee = customGet(childSupport, 'payee', '');
  const payorName = showSpousalSupport
    ? customGet(supportCalculation, 'calculationResult.spousalSupport.payor') === 'client'
      ? clientFirstName
      : exFirstName
    : customGet(supportCalculation, 'calculationResult.childSupport.payor') === 'client'
    ? clientFirstName
    : exFirstName;
  const payeeName = showSpousalSupport
    ? customGet(supportCalculation, 'calculationResult.spousalSupport.payee') === 'client'
      ? clientFirstName
      : exFirstName
    : customGet(supportCalculation, 'calculationResult.childSupport.payee') === 'client'
    ? clientFirstName
    : exFirstName;
  const csPayorName =
    customGet(supportCalculation, 'calculationResult.childSupport.payor') === 'client'
      ? clientFirstName
      : exFirstName;
  const csPayeeName =
    customGet(supportCalculation, 'calculationResult.childSupport.payee') === 'client'
      ? clientFirstName
      : exFirstName;
  const totalPayorName = showSpousalSupport
    ? customGet(spousalSupport?.scenarios[2], 'clientSpousalSupport.monthlyTotalSupport', 0) <
      customGet(spousalSupport?.scenarios[2], 'exSpousalSupport.monthlyTotalSupport', 0)
      ? clientFirstName
      : exFirstName
    : customGet(spousalSupport?.scenarios[2], 'clientSpousalSupport.monthlyTotalSupport', 0) <
      customGet(spousalSupport?.scenarios[2], 'exSpousalSupport.monthlyTotalSupport', 0)
    ? clientFirstName
    : exFirstName;
  const totalPayeeName = totalPayorName === clientFirstName ? exFirstName : clientFirstName;
  const totalPayor = totalPayorName === clientFirstName ? 'client' : 'ex';

  const rangeLabels = ['Spousal Support', 'Remaining Income'];

  const tabNavLinks = agreedSpousalSupport
    ? ['Agreed Spousal', 'Low Spousal', 'Mid Spousal', 'High Spousal']
    : ['Low Spousal', 'Mid Spousal', 'High Spousal'];

  const childSupportLabels = ['Child Support', 'Remaining Income'];
  const totalSupportLabels = ['Spousal Support', 's.3 Child Support', 's.7 Child Support'];

  const agreedSpousalSupportScenario = calc(
    scenarios[4],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyCash',
  );
  const lowSpousalSupport = calc(
    scenarios[0],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyCash',
  );
  const midSpousalSupport = calc(
    scenarios[1],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyCash',
  );
  const highSpousalSupport = calc(
    scenarios[2],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyCash',
  );

  const expenseDonutLabels = [`${payorName}'s Share`, `${payeeName}'s Share`];
  let lowSpecialExpenses = [
    Math.round(customGet(scenarios[0], `${payor}SpousalSupport.childExpenses.share`, 0)),
    Math.round(customGet(scenarios[0], `${payee}SpousalSupport.childExpenses.share`, 0)),
  ];
  let midSpecialExpenses = [
    Math.round(customGet(scenarios[1], `${payor}SpousalSupport.childExpenses.share`, 0)),
    Math.round(customGet(scenarios[1], `${payee}SpousalSupport.childExpenses.share`, 0)),
  ];
  let highSpecialExpenses = [
    Math.round(customGet(scenarios[2], `${payor}SpousalSupport.childExpenses.share`, 0)),
    Math.round(customGet(scenarios[2], `${payee}SpousalSupport.childExpenses.share`, 0)),
  ];
  //   const noSpousalSpecialExpenses = [
  //     customGet(scenarios[3], `${payor}.childExpenses.share`, 0),
  //     customGet(scenarios[3], `${payee}.childExpenses.share`, 852)
  //   ];

  if (lowSpecialExpenses[0] === 0 && lowSpecialExpenses[1] === 0) {
    lowSpecialExpenses = [1, 1];
    midSpecialExpenses = [1, 1];
    highSpecialExpenses = [1, 1];
  }

  let totalSupportLables = ['Spousal Support', 's.3 Child Support', 's.7 Child Support'];
  const agreedTotalSupport = calc(
    scenarios[4],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyChildSupportNet',
    'childExpenses.monthlySupport',
  );
  let lowTotalSupport = calc(
    scenarios[2],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyChildSupportNet',
    'childExpenses.monthlySupport',
  );
  let midTotalSupport = calc(
    scenarios[2],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyChildSupportNet',
    'childExpenses.monthlySupport',
  );
  let highTotalSupport = calc(
    scenarios[2],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyChildSupportNet',
    'childExpenses.monthlySupport',
  );

  if (lowTotalSupport[0] === 0 && lowTotalSupport[1] === 0) {
    lowTotalSupport = lowSpousalSupport;
    midTotalSupport = midSpousalSupport;
    highTotalSupport = highSpousalSupport;
    totalSupportLables = ['Total Support', 'Monthly Cash'];
  }

  const allChildSupport = calc(
    scenarios[3],
    `${payor}SpousalSupport`,
    'monthlyChildSupportNet',
    'monthlyCash',
  );

  const agreedChildSupportDonut = [
    agreedChildSupport,
    Math.round(customGet(childSupport, `${payee}ChildSupport.netMonthlySupport`)),
  ];
  const agreedChildSupportComparison = [
    agreedChildSupport,
    Math.round(customGet(childSupport, `${payee}ChildSupport.netMonthlySupport`)),
  ];

  const clientExpenses = Math.round(
    customGet(scenarios[3], 'clientSpousalSupport.childExpenses.share'),
  );
  const exExpenses = Math.round(customGet(scenarios[3], 'exSpousalSupport.childExpenses.share'));
  const noSpousalExpensesComparison = [Math.round(clientExpenses), Math.round(exExpenses)];
  const showSpecialExpenses = customGet(supportCalculation, 'childExpenses.all', []).length > 0;
  const clientExpensesAgreedSpousal = Math.round(
    customGet(scenarios[4], 'clientSpousalSupport.childExpenses.share', 'share'),
  );
  const exExpensesAgreedSpousal = Math.round(
    customGet(scenarios[4], 'exSpousalSupport.childExpenses.share', 'share'),
  );
  const agreedSpousalExpensesComparison = [
    Math.round(clientExpensesAgreedSpousal),
    Math.round(exExpensesAgreedSpousal),
  ];
  //   const agreedSpousalSpecialExpenses = calc(scenarios[4], payor, 'childExpenses.share', 'share');

  // no spousal total support
  const totalSupportData = calc(
    scenarios[3],
    `${payor}SpousalSupport`,
    'monthlySpousalSupport',
    'monthlyChildSupportNet',
    'childExpenses.monthlySupport',
  );
  const clientIncome = Math.round(
    customGet(scenarios[3], 'clientSpousalSupport.monthlyIncomeNetSupport', ''),
  );
  const exIncome = Math.round(
    customGet(scenarios[3], 'exSpousalSupport.monthlyIncomeNetSupport', ''),
  );
  const incomeComparison = [Math.round(clientIncome), Math.round(exIncome)];

  const minDuration = customGet(
    supportCalculation,
    'calculationResult.spousalSupport.minDuration',
    0,
  );
  const maxDuration = customGet(
    supportCalculation,
    'calculationResult.spousalSupport.maxDuration',
    0,
  );
  const indefiniteDuration = spousalSupport?.minDuration > 99;

  // check for exceptions/cautions to the formulas to display warnings
  const taxYear = customGet(supportCalculation, 'taxYear', '2022');
  const retroactiveSupport = taxYear !== '2022';
  const csPayorIncomeAboveCeiling =
    customGet(childSupport, `${payor}ChildSupport.guidelineIncome`, 0) > 150000;
  const ssPayorIncomeAboveCeiling =
    customGet(scenarios[3], `${payor}SpousalSupport.monthlyGuidelineIncome`, 0) * 12.0 > 350000;
  const ssPayorIncomeBelowFloor =
    customGet(scenarios[3], `${payor}SpousalSupport.monthlyGuidelineIncome`, 0) * 12.0 < 20000;
  const ssPayorIncomeLowRange = !!(
    !ssPayorIncomeBelowFloor &&
    customGet(scenarios[3], `${payor}SpousalSupport.monthlyGuidelineIncome`, 0) * 12.0 < 30000
  );
  const ssChildDisability =
    Array.isArray(children) && children.find(({ disability }) => disability === true);
  const ssPayorDisability = payor.disability === true;
  const ssPayorNonTaxableIncome = useMemo(
    () =>
      showSpousalSupport &&
      customGet(scenarios?.[3], `${payor}.income.federalTaxableIncome`, 0) -
        customGet(scenarios?.[3], `${payor}.federalDeductions.total`, 0) <
        customGet(scenarios?.[3], `${payor}.spousalSupport`, 0) * 12.0,
    [showSpousalSupport, scenarios, payor],
  );
  const ssCustodialPayor = useMemo(
    () => (showSpousalSupport ? customGet(spousalSupport, 'formula') === 'Custodial Payor' : false),
    [showSpousalSupport, spousalSupport],
  );

  const npvDiscountRate =
    customGet(supportCalculation, 'npvDiscountRate') === 0
      ? 4
      : customGet(supportCalculation, 'npvDiscountRate');

  const userDuration = customGet(supportCalculation, 'npvDuration');
  const defaultDuration =
    ((customGet(spousalSupport, 'minDuration', 0) + customGet(spousalSupport, 'maxDuration', 0)) *
      12.0) /
    2;
  const capDuration = 120;
  const npvDuration =
    userDuration === undefined
      ? defaultDuration > 1000
        ? capDuration
        : defaultDuration
      : userDuration;

  // const minMonthlyNetSupport =
  //   toRoundUSD(
  //     customGet(scenarios[0], `${payor}SpousalSupport.monthlyChildSupportNet`, 0) +
  //     customGet(scenarios[0], `${payor}SpousalSupport.monthlyCostSpousalSupport`, 0)
  //   );

  // const maxMonthlyNetSupport =
  //   toRoundUSD(
  //     customGet(scenarios[2], `${payor}SpousalSupport.monthlyChildSupportNet`, 0) +
  //     customGet(scenarios[2], `${payor}SpousalSupport.monthlyCostSpousalSupport`, 0)
  //   );

  return (
    <div className="mb-4 result-section">
      <React.Fragment>
        <SupportsSummary
          spousalSupport={spousalSupport}
          childSupport={childSupport}
          exSupportProfile={exSupportProfile}
          clientSupportProfile={clientSupportProfile}
          showSpousalSupport={showSpousalSupportResults}
          showChildSupportResults={showChildSupportResults}
          totalPayor={totalPayorName}
          totalPayee={totalPayeeName}
          clientName={clientFirstName}
          exName={exFirstName}
        />

        <Warnings
          retroactiveSupport={retroactiveSupport}
          taxYear={taxYear}
          ssPayorIncomeLowRange={ssPayorIncomeLowRange}
          ssPayorIncomeBelowFloor={ssPayorIncomeBelowFloor}
          ssPayorIncomeAboveCeiling={ssPayorIncomeAboveCeiling}
          csPayorIncomeAboveCeiling={csPayorIncomeAboveCeiling}
          ssChildDisability={ssChildDisability}
          ssPayorDisability={ssPayorDisability}
          ssPayorNonTaxableIncome={ssPayorNonTaxableIncome}
          ssCustodialPayor={ssCustodialPayor}
          showChildSupport={showChildSupportResults}
          showSpousalSupport={showSpousalSupportResults}
        />

        <div className="border-top pt-3">
          <h4 className="mt-4">Detailed Results</h4>
          <p>
            Detailed calculation results and formulas are shown below for child support, spousal
            support and total support obligations.
          </p>
        </div>
      </React.Fragment>

      {showSpousalSupportResults && (
        <React.Fragment>
          <SectionHeader
            src={receiveCash}
            title="Spousal Support"
            subtitle="Amount & Duration"
            id="spousalSupportResults"
          />

          <SpousalSupportRanges
            agreedSpousalSupport={agreedSpousalSupport}
            agreedSpousalSupportScenario={agreedSpousalSupportScenario}
            lowSpousalSupport={lowSpousalSupport}
            midSpousalSupport={midSpousalSupport}
            highSpousalSupport={highSpousalSupport}
            rangeLabels={rangeLabels}
          />

          <TablesContainer
            tabNavLinks={tabNavLinks}
            childSupport={childSupport}
            spousalSupport={spousalSupport}
            clientName={clientFirstName}
            exName={exFirstName}
            agreedSpousalSupport={agreedSpousalSupport}
            payor={payor}
            payee={payee}
            payorName={payorName}
            payeeName={payeeName}
            showChildSupportResults={showChildSupportResults}
            npvDiscountRate={npvDiscountRate}
            npvDuration={npvDuration}
            supportCalculation={supportCalculation}
          />

          <h6 id="spousalSupportDuration">Spousal Support Duration</h6>
          <p>
            The time period for which spousal support is payable is calculated based on the duration
            of your {isProfessional && "clients'"} relationship, your{' '}
            {isProfessional && "clients '"}
            age, and the age of your {isProfessional && "clients'"} children (if any).
          </p>

          <SectionHeader
            src={relationship}
            title={
              indefiniteDuration ? 'Indefinite Duration' : `${minDuration} to ${maxDuration} years`
            }
            subtitle="support duration"
            bordered={false}
          />

          <p>
            Minimum duration is the greater of (a) total years of cohabitation (capped at 25)
            multiplied by 0.5 or (b) the estimated number of years until youngest child starts full
            time school.
          </p>
          <p>
            Maximum duration is the greater of (a) total years of cohabitation (capped at 25)
            multipled by 1.0; or (b) the estimated number of years till youngest child finishes high
            school.
          </p>
          <p>
            The &quot;Rule of 65&quot; applies when the age of the recipient at separation plus the
            period of cohabitation exceed 65.
          </p>
          <p>
            Duration may be indefinite (not specified) where the &quot;rule of 65&quot; applies, or
            where the period of cohabitation exceeds 20 years, or at the court&apos;s discretion.
            Indefinite duration does not mean support continues forever. It means support payments
            are to be made for an unspecified period subject to future variation or review. The
            court may grant an indefinite initial order with a suggested minimum and maximum
            duration based on the ranges calculated above.
          </p>
          <p>Support duration calculation details are in the table below.</p>

          <DurationDetails
            spousalSupport={spousalSupport}
            payeeName={payeeName}
            showChildSupportResults={showChildSupportResults}
          />

          <p>
            Spousal support is reviewable, meaning a court may adjust the amount payable at a later
            date if necessary due to changed circumstances. Spousal support orders are made for an
            indefinite or specified time period, subject to review.
          </p>

          <p>
            Note that re-marriage, changes to employment status and other factors can all affect
            ongoing entitlement to spousal support.
          </p>
        </React.Fragment>
      )}

      {showChildSupportResults && (
        <React.Fragment>
          <SectionHeader
            src={guardian}
            title="Child Support (s. 3)"
            subtitle="fixed monthly child support"
            id="childSupportResults"
          />

          <h6>Monthly Guideline Child Support</h6>

          <p>
            Section 3 child support (guideline child support) is base monthly child support paid to
            assist with the costs of raising children. Section 3 child support is payable by Person
            1 to Person 2 in the monthly base amount shown below.
          </p>

          {agreedChildSupport !== null && (
            <div className="row no-gutters ml-1 mr-1 pt-4 pb-0 mb-4">
              <div className="col-3 m-0 p-0 pl-3 text-center">
                <DonutChart
                  data={agreedChildSupportDonut}
                  labels={childSupportLabels}
                  subtext="monthly"
                  text={`${toUSD(agreedChildSupportDonut[0])}`}
                />
                <div className="mt-2 chart-label">Agreed Support</div>
              </div>
              <div className="col-7 m-0 p-0 pl-4">
                <BarChart
                  data={agreedChildSupportComparison}
                  labels={['Agreed Support', 'Guideline Support']}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      xAxes: [
                        {
                          offset: true,
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          )}
          {agreedChildSupport === null && (
            <div className="row mb-4">
              <div className="col-6 col-sm-3 text-center">
                <DonutChart
                  data={allChildSupport}
                  labels={childSupportLabels}
                  subtext="monthly"
                  text={`${toUSD(allChildSupport[0])}`}
                />
                <div className="mt-2 chart-label">Guideline Support</div>
              </div>
              <div className="col-8 d-none d-sm-block">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Child Support is calculated before spousal support, based on the pre-tax
                      income of each party. Child support payments are generally not tax-deductible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h6>Child Support Calculation Details</h6>

          <p>
            Based on child support guideline income, number of children, and parenting arrangements
            input above, {csPayorName} would pay {csPayeeName} monthly child support in the amount
            of {toUSD(allChildSupport[0])}
          </p>

          <p>Section 3 Child Support Guidelines calculation details are in the table below.</p>

          <ChildSupportS3Table
            childSupport={childSupport}
            spousalSupport={spousalSupport}
            supportCalculation={supportCalculation}
            clientName={clientFirstName}
            exName={exFirstName}
            agreedChildSupport={agreedChildSupport}
            npvDiscountRate={npvDiscountRate}
          />

          <p className="pt-2 ">
            Section 3 child support is calculated before spousal support, based on the pre-tax
            income of each party. Child support payments are generally not tax-deductible. Learn
            more in our{' '}
            <a target="help" href="https://www.divorcepath.com/help/calculate-child-support">
              guide to child support in Canada
            </a>
            .
          </p>

          <SectionHeader
            src={soccerBall}
            title="Child Support (s. 7)"
            subtitle="special child-related expenses"
            id="childExpensesResults"
          />

          {showSpousalSupportResults ? ( // special expenses results with spousal support
            showSpecialExpenses ? (
              <React.Fragment>
                <h6>Special Expense Support Ranges</h6>
                <p>
                  Certain special child-related expenses are shared based on income, after adjusting
                  for spousal support. The charts below show the amount of support payable in
                  relation to special child-related expenses in each spousal support scenario.
                </p>

                <div className="row no-gutters text-center doughnut-row">
                  {!!agreedSpousalSupport && (
                    <div className="support-doughnut text-center">
                      <DonutChart
                        data={agreedSpousalExpensesComparison}
                        labels={expenseDonutLabels}
                        subtext="annually"
                        text={toRoundUSD(
                          customGet(
                            spousalSupport,
                            `scenarios.${
                              agreedSpousalSupport ? '4' : '3'
                            }.${payor}SpousalSupport.childExpenses.support`,
                            0,
                          ),
                        )}
                        className="mb-4"
                      />
                      <span className="chart-label">Agreed Amount</span>
                    </div>
                  )}
                  <div className="support-doughnut text-center">
                    <DonutChart
                      redraw
                      data={lowSpecialExpenses}
                      labels={expenseDonutLabels}
                      subtext="annually"
                      text={toRoundUSD(
                        customGet(
                          spousalSupport,
                          `scenarios.0.${payor}SpousalSupport.childExpenses.support`,
                          0,
                        ),
                      )}
                      className="mb-4"
                    />
                    <span className="chart-label">Low Spousal</span>
                  </div>
                  {!agreedSpousalSupport && (
                    <div className="support-doughnut">
                      <DonutChart
                        redraw
                        data={midSpecialExpenses}
                        labels={expenseDonutLabels}
                        subtext="annually"
                        text={toRoundUSD(
                          customGet(
                            spousalSupport,
                            `scenarios.1.${payor}SpousalSupport.childExpenses.support`,
                            0,
                          ),
                        )}
                      />
                      <span className="chart-label">Mid Spousal</span>
                    </div>
                  )}
                  <div className="support-doughnut text-center">
                    <DonutChart
                      redraw
                      data={highSpecialExpenses}
                      labels={expenseDonutLabels}
                      subtext="annually"
                      text={toRoundUSD(
                        customGet(
                          spousalSupport,
                          `scenarios.2.${payor}SpousalSupport.childExpenses.support`,
                          0,
                        ),
                      )}
                    />
                    <span className="chart-label">High Spousal</span>
                  </div>
                </div>
                <p>
                  Special expenses should be divided based on each person&apos;s share of combined
                  net income, after deducting any tax savings or benefits received in relation to
                  the expense. This is explained in more detail below and in our{' '}
                  <a
                    target="help"
                    href="https://www.divorcepath.com/help/calculate-child-support#toc-calculating-special-expenses-s-7-child-support-"
                  >
                    guide to special expense support
                  </a>
                  .
                </p>

                <div className="border-bottom mb-3">
                  <SpecialExpensesTableContainer
                    tabNavLinks={tabNavLinks}
                    spousalSupport={spousalSupport}
                    supportCalculation={supportCalculation}
                    showSpousalSupport={showSpousalSupportResults}
                    agreedSpousalSupport={agreedSpousalSupport}
                    clientName={clientFirstName}
                    exName={exFirstName}
                  />
                </div>
              </React.Fragment>
            ) : (
              <NoExpenses />
            )
          ) : showSpecialExpenses ? (
            <React.Fragment>
              {/* no spousal support */}
              <h6>Special Expense Support</h6>

              <p>
                Certain special child-related expenses are shared based on income. The charts below
                show the amount of support payable and the total share of expenses paid by each
                party.
              </p>

              <div className="row no-gutters text-center">
                <div className="col-3 support-doughnut text-center">
                  <DonutChart
                    redraw
                    data={noSpousalExpensesComparison}
                    labels={rangeLabels}
                    subtext="annually"
                    text={toRoundUSD(
                      customGet(
                        spousalSupport,
                        `scenarios.${agreedSpousalSupport ? '4' : '3'}.${
                          spousalSupport.payor
                        }SpousalSupport.childExpenses.support`,
                        0,
                      ),
                    )}
                    className="mb-4"
                  />
                  <span className="chart-label">s.7 Support</span>
                </div>
                <div className="col-7 m-0 p-0 pl-5 text-center">
                  <BarChart
                    data={noSpousalExpensesComparison}
                    labels={[clientFirstName, exFirstName]}
                    subtext="monthly"
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        xAxes: [
                          {
                            offset: true,
                          },
                        ],
                      },
                    }}
                  />
                  <span className="chart-label">Share of Expenses</span>
                </div>
              </div>
              <p>
                Special expenses should be shared between the parties based on their percentage
                share of net income, after deducting any tax savings or benefits received in
                relation to the expense. This is explained in more detail below.
              </p>

              <div className="border-bottom mb-3">
                <SpecialExpensesTableContainer
                  tabNavLinks={tabNavLinks}
                  supportCalculation={supportCalculation}
                  spousalSupport={spousalSupport}
                  showSpousalSupport={showSpousalSupportResults}
                  agreedSpousalSupport={agreedSpousalSupport}
                  clientName={clientFirstName}
                  exName={exFirstName}
                />
              </div>
              <p>Special expense support is normally payable as soon as the expenses are paid.</p>
              {showSpousalSupportResults && (
                <p>
                  It is crucial that special expenses be apportioned based on the actual amount of
                  spousal support paid, otherwise one party will end up paying more than their share
                  of the expense.
                </p>
              )}
              <p>
                Learn more about how to correctly calculate section 7 expense support in our{' '}
                <a
                  target="help"
                  href="https://www.divorcepath.com/help/calculate-child-support#toc-calculating-special-expenses-s-7-child-support-"
                >
                  guide to section 7 expenses
                </a>
                .
              </p>
            </React.Fragment>
          ) : (
            <NoExpenses />
          )}

          <SectionHeader
            src={moneyBox}
            title="Total Support"
            subtitle="child support + spousal support"
            id="totalSupportResults"
          />

          <h6>Total Support Ranges</h6>

          <p>
            The charts below show the monthly total child
            {showSpousalSupportResults && ' and spousal'} support payable by {totalPayorName} to{' '}
            {totalPayeeName}
            {showSpousalSupportResults && ' in each spousal support scenario'}.
          </p>

          {showSpousalSupportResults ? ( // special expenses results with spousal support
            <React.Fragment>
              <div className="row no-gutters doughnut-row">
                {agreedSpousalSupport && (
                  <div className="support-doughnut text-center">
                    <DonutChart
                      data={agreedTotalSupport}
                      labels={totalSupportLabels}
                      subtext="monthly"
                      text={toRoundUSD(
                        customGet(scenarios[4], 'exSpousalSupport.monthlyTotalSupport', ''),
                      )}
                    />
                    <span className="chart-label">Agreed Spousal</span>
                  </div>
                )}
                <div className="support-doughnut text-center">
                  <DonutChart
                    data={lowTotalSupport}
                    labels={totalSupportLabels}
                    subtext="monthly"
                    text={toRoundUSD(
                      customGet(scenarios[0], 'exSpousalSupport.monthlyTotalSupport', ''),
                    )}
                  />
                  <span className="chart-label">Low-Range</span>
                </div>
                {!agreedSpousalSupport && (
                  <div className="support-doughnut text-center">
                    <DonutChart
                      data={midTotalSupport}
                      labels={totalSupportLabels}
                      subtext="monthly"
                      text={toRoundUSD(
                        customGet(scenarios[1], 'exSpousalSupport.monthlyTotalSupport', ''),
                      )}
                    />
                    <span className="chart-label">Mid-Range</span>
                  </div>
                )}
                <div className="support-doughnut text-center">
                  <DonutChart
                    data={highTotalSupport}
                    labels={totalSupportLabels}
                    subtext="monthly"
                    text={toRoundUSD(
                      customGet(scenarios[2], 'exSpousalSupport.monthlyTotalSupport', ''),
                    )}
                  />
                  <span className="chart-label">High-Range</span>
                </div>
              </div>

              <p>A more detailed breakdown of total support payments is provided below.</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* no spousal support */}
              <div className="row no-gutters text-center">
                <div className="col-3 support-doughnut text-center">
                  <DonutChart
                    redraw
                    data={totalSupportData}
                    labels={totalSupportLables}
                    subtext="monthly"
                    text={toRoundUSD(
                      customGet(scenarios[3], 'exSpousalSupport.monthlyTotalSupport', ''),
                    )}
                    className="mb-4"
                  />
                  <span className="chart-label">Total Support</span>
                </div>
                <div className="col-7 m-0 p-0 pl-5 text-center">
                  <BarChart
                    data={incomeComparison}
                    labels={[clientFirstName, exFirstName]}
                    subtext="monthly"
                    options={{
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
                    }}
                  />
                  <span className="chart-label">Net Monthly Income</span>
                </div>
              </div>
            </React.Fragment>
          )}

          <h6 className="mt-4">Total Support Details</h6>

          <div className="border-bottom mb-3">
            <TotalSupportTableContainer
              tabNavLinks={tabNavLinks}
              spousalSupport={spousalSupport}
              clientName={clientFirstName}
              exName={exFirstName}
              agreedSpousalSupport={agreedSpousalSupport}
              showSpousalSupport={showSpousalSupportResults}
              showChildSupportResults={showChildSupportResults}
              payorName={totalPayorName}
              payeeName={totalPayeeName}
              payor={totalPayor}
              supportCalculation={supportCalculation}
            />
          </div>

          <p>
            For more information on how to adjust total support to account for special circumstances
            such as hardship or exceptionally high incomes, read our{' '}
            <a
              target="help"
              href="https://www.divorcepath.com/help/calculate-child-support#toc-exceptions-to-the-child-support-guidelines"
            >
              guide to exceptions to the child support guidelines
            </a>
            .
          </p>
        </React.Fragment>
      )}

      <section className="page">
        <SectionHeader
          src={pieChart}
          title="Budget & Net Income"
          subtitle="cash flow comparison"
          id="monthlyBudget"
        />

        <p>
          This section shows how the income earned by each person is distributed, and compares the
          after-tax cash available to each person for monthly budgeting purposes.
        </p>

        <div className="border-bottom mb-3">
          <MonthlyBudgetTableContainer
            tabNavLinks={tabNavLinks}
            spousalSupport={spousalSupport}
            clientName={clientFirstName}
            exName={exFirstName}
            agreedSpousalSupport={agreedSpousalSupport}
            showSpousalSupport={showSpousalSupportResults}
            showChildSupportResults={showChildSupportResults}
            payorName={totalPayorName}
            payeeName={totalPayeeName}
            payor={totalPayor}
            supportCalculation={supportCalculation}
          />
        </div>

        <p>
          You can use monthly cash flow to prepare a more detailed budget of monthly expenditures,
          which may be useful in court or mediation.
        </p>
      </section>

      <section className="page">
        <SectionHeader
          src={brief}
          title="Generate Reports"
          subtitle="PDF reports for mediation & court"
          id="generateReports"
        />

        <p>
          Generate a detailed PDF report setting out spousal support
          {showChildSupportResults > 0 && ', child support'} and detailed financial for both
          parties. Suitable for court, mediation, or negotiation.
        </p>
        <p>Select the type of report you wish to download below.</p>
        <GeneratePDFButtonContainer />
      </section>
    </div>
  );
};

export default ResultSection;
