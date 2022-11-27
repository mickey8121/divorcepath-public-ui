/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import customGet from 'utils/get';
import numeral from 'numeral';
import toRoundUSD from 'utils/toRoundUSD';

import SupportResultSummary from './SupportResultSummary';

const receiveCash = '/canada/images/icons/dusk/png/receive-cash.png';
const guardian = '/canada/images/icons/dusk/png/guardian.png';
const soccerBall = '/canada/images/icons/dusk/png/soccer-ball.png';
const moneyBox = '/canada/images/icons/dusk/png/money-box.png';
const pieChart = '/canada/images/icons/dusk/png/pie-chart.png';

const SupportsSummary = ({
  spousalSupport,
  childSupport,
  exSupportProfile,
  clientSupportProfile,
  showSpousalSupport,
  showChildSupportResults,
  clientName,
  exName,
}) => {
  const minMonthlySpousalSupport = toRoundUSD(
    Math.abs(
      customGet(spousalSupport, 'scenarios[0].clientSpousalSupport.monthlySpousalSupport', 0),
    ),
  );
  const maxMonthlySpousalSupport = toRoundUSD(
    Math.abs(
      customGet(spousalSupport, 'scenarios[2].clientSpousalSupport.monthlySpousalSupport', 0),
    ),
  );

  const formulaSpousalSupport = customGet(spousalSupport, 'formula', '');
  const formulaChildSupport = customGet(childSupport, 'formula', '');

  const minDuration = customGet(spousalSupport, 'minDuration', 0);
  const maxDuration = customGet(spousalSupport, 'maxDuration', 0);
  const indefiniteDuration = spousalSupport?.minDuration > 99;

  const clientSSGuidelineIncome = numeral(
    customGet(spousalSupport, 'scenarios[3].clientSpousalSupport.monthlyGuidelineIncome', 0) * 12,
  ).format('($0,0');
  const exSSGuidelineIncome = numeral(
    customGet(spousalSupport, 'scenarios[3].exSpousalSupport.monthlyGuidelineIncome', 0) * 12,
  ).format('($0,0');

  const clientCSGuidelineIncome = numeral(
    customGet(childSupport, 'clientChildSupport.guidelineIncome', 0),
  ).format('($0,0');
  const exCSGuidelineIncome = numeral(
    customGet(childSupport, 'exChildSupport.guidelineIncome', 0),
  ).format('($0,0');

  return (
    <div>
      <h4>Overview</h4>

      <p>
        Here's a quick summary of your support calculation results. Detailed results are shown
        further below.
      </p>

      {showSpousalSupport && (
        <SupportResultSummary
          imageSrc={receiveCash}
          headerText="Spousal Support"
          headerCaption={
            <small className="d-block text-muted">
              {`${formulaSpousalSupport.toLowerCase()} formula`}
            </small>
          }
          content={
            <React.Fragment>
              <h5 className="mb-0">
                {`${minMonthlySpousalSupport} to ${maxMonthlySpousalSupport}`}
              </h5>
              <small className="d-block text-muted">
                monthly for
                {indefiniteDuration
                  ? ' an indefinite time'
                  : ` ${minDuration} to ${maxDuration} years`}
              </small>
            </React.Fragment>
          }
          description={
            <p>
              Spousal support is paid to assist the receiving spouse in dealing with unequal
              consequences of the breakdown of the relationship. This calculation is based on a{' '}
              Spousal Support Guideline Income of <b>{clientSSGuidelineIncome}</b> for {clientName}{' '}
              and <b>{exSSGuidelineIncome}</b> for {exName} (
              <a href="#spousalSupportResults">view details</a>
              ).
            </p>
          }
          link="spousalSupportResults"
        />
      )}

      {showChildSupportResults && (
        <React.Fragment>
          <SupportResultSummary
            imageSrc={guardian}
            headerText="Child Support (s. 3)"
            headerCaption={
              <small className="d-block text-muted">
                {formulaChildSupport === 'ex' &&
                  `${customGet(exSupportProfile, 'firstName', '')} is primary parent`}
                {formulaChildSupport === 'client' &&
                  `${customGet(clientSupportProfile, 'firstName', '')} is primary parent`}
                {formulaChildSupport === 'shared' && 'shared parenting'}
                {formulaChildSupport === 'split' && 'split parenting'}
              </small>
            }
            content={
              <React.Fragment>
                <h5 className="mb-0">
                  {toRoundUSD(
                    Math.abs(
                      customGet(
                        spousalSupport,
                        'scenarios[0].clientSpousalSupport.monthlyChildSupportNet',
                        0,
                      ),
                    ),
                  )}
                </h5>
                <small className="d-block text-muted">monthly</small>
              </React.Fragment>
            }
            description={
              <p>
                Section 3 Child support is a monthly amount calculated based on the payor's income.
                It is paid to assist with the costs of raising children. This calculation is based
                on a Child Support Guideline Income of <b>{clientCSGuidelineIncome}</b> for{' '}
                {clientName} and<b>{exCSGuidelineIncome}</b> for{exName}. (
                <a href="#childSupportResults">view details</a>
                ).
              </p>
            }
          />

          <SupportResultSummary
            imageSrc={soccerBall}
            headerText="Child Support (s. 7)"
            headerCaption={<small className="d-block text-muted">special expenses</small>}
            content={
              <React.Fragment>
                {showSpousalSupport ? (
                  <React.Fragment>
                    <h5 className="mb-0">
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[2].clientSpousalSupport.childExpenses.support',
                            0,
                          ),
                        ),
                      )}{' '}
                      to{' '}
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[0].clientSpousalSupport.childExpenses.support',
                            0,
                          ),
                        ),
                      )}
                    </h5>
                    <small className="d-block text-muted">annual expense support</small>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5 className="mb-0">
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[3].clientSpousalSupport.childExpenses.support',
                            0,
                          ),
                        ),
                      )}
                    </h5>
                    <small className="d-block text-muted">annual expense support</small>
                  </React.Fragment>
                )}
              </React.Fragment>
            }
            description={
              <p>
                Section 7 Child support is paid to assist with certain "special" expenses such as
                child care, education, and other agreed-upon extraordinary expeneses. Receipts are
                generally required. (<a href="#childExpensesResults">view details</a>
                ).
              </p>
            }
            link="childExpensesResults"
          />

          <SupportResultSummary
            imageSrc={moneyBox}
            headerText="Total Support"
            headerCaption={
              <small className="d-block text-muted">
                child support
                {showSpousalSupport && '  + spousal support'}
              </small>
            }
            content={
              <React.Fragment>
                <h5 className="mb-0">
                  {showSpousalSupport ? (
                    <React.Fragment>
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[0].clientSpousalSupport.monthlyTotalSupport',
                            0,
                          ),
                        ),
                      )}{' '}
                      to{' '}
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[2].clientSpousalSupport.monthlyTotalSupport',
                            0,
                          ),
                        ),
                      )}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {toRoundUSD(
                        Math.abs(
                          customGet(
                            spousalSupport,
                            'scenarios[3].clientSpousalSupport.monthlyTotalSupport',
                            0,
                          ),
                        ),
                      )}
                    </React.Fragment>
                  )}
                </h5>
                <small className="d-block text-muted">monthly</small>
              </React.Fragment>
            }
            description={
              <p>
                {`Total support includes the combined child support ${showSpousalSupport &&
                  'and spousal support'} payments listed above (`}
                <a href="#totalSupportResults">view details</a>
                ).
              </p>
            }
            link="totalSupportResults"
          />
        </React.Fragment>
      )}

      <SupportResultSummary
        imageSrc={pieChart}
        headerText="Monthly Budget"
        headerCaption={<small className="d-block text-muted">cash flow comparison</small>}
        content={
          <React.Fragment>
            <h5 className="mb-0">
              {showSpousalSupport ? (
                <React.Fragment>
                  {toRoundUSD(
                    Math.abs(
                      customGet(spousalSupport, 'scenarios[0].clientSpousalSupport.monthlyCash', 0),
                    ),
                  )}{' '}
                  to{' '}
                  {toRoundUSD(
                    Math.abs(
                      customGet(spousalSupport, 'scenarios[2].clientSpousalSupport.monthlyCash', 0),
                    ),
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {toRoundUSD(
                    Math.abs(
                      customGet(spousalSupport, 'scenarios[3].clientSpousalSupport.monthlyCash', 0),
                    ),
                  )}{' '}
                  vs{' '}
                  {toRoundUSD(
                    Math.abs(
                      customGet(spousalSupport, 'scenarios[3].exSpousalSupport.monthlyCash', 0),
                    ),
                  )}
                </React.Fragment>
              )}
            </h5>
            <small className="d-block text-muted">monthly</small>
          </React.Fragment>
        }
        description={
          <p>
            The monthly cash flow available to budget with after taxes, support payments and
            government benefits. (<a href="#monthlyBudget">view details</a>
            ).
          </p>
        }
        link="monthlyBudget"
      />
    </div>
  );
};

export default SupportsSummary;
