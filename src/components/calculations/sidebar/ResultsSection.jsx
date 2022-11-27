import React, { Fragment, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CountDollars from 'components/common/CountDollars';

import customGet from 'utils/get';

import useCalculationContext from 'hooks/useCalculationContext';

const ResultsSection = ({ values, supportCalculation, isChanged }) => {
  const { calculatorType, type } = useCalculationContext();

  const isCalculated = !!supportCalculation?.calculationResult;

  const spousalSupport = useMemo(
    () => customGet(supportCalculation, 'calculationResult.spousalSupport', {}),
    [supportCalculation],
  );

  const minMonthlySpousalSupport = useMemo(
    () =>
      Math.abs(spousalSupport?.scenarios?.[0]?.clientSpousalSupport?.monthlySpousalSupport || 0),
    [spousalSupport],
  );
  const maxMonthlySpousalSupport = useMemo(
    () =>
      Math.abs(spousalSupport?.scenarios?.[2]?.clientSpousalSupport?.monthlySpousalSupport || 0),
    [spousalSupport],
  );

  const childSupportDisplayValue = useMemo(
    () =>
      Math.abs(spousalSupport?.scenarios?.[0]?.clientSpousalSupport?.monthlyChildSupportNet || 0),
    [spousalSupport],
  );

  const minDuration = useMemo(() => spousalSupport?.minDuration || 0, [spousalSupport]);
  const maxDuration = useMemo(() => spousalSupport?.maxDuration || 0, [spousalSupport]);
  const indefiniteDuration = useMemo(() => minDuration > 99, [minDuration]);

  const showChildSupport = useMemo(() => values?.showChildSupport || calculatorType === 'CHILD', [
    values,
    calculatorType,
  ]);
  const showSpousalSupport = useMemo(
    () => values?.showSpousalSupport || calculatorType === 'SPOUSAL',
    [values, calculatorType],
  );

  const children = useMemo(() => values?.children?.update || values?.children?.create, [values]);

  const childSupportMin = useMemo(() => {
    if (showSpousalSupport) {
      return Math.abs(
        spousalSupport?.scenarios?.[2]?.clientSpousalSupport?.childExpenses?.support || 0,
      );
    }

    return Math.abs(
      spousalSupport?.scenarios?.[3]?.clientSpousalSupport?.childExpenses?.support || 0,
    );
  }, [spousalSupport, showSpousalSupport]);

  const childSupportMax = useMemo(
    () =>
      Math.abs(spousalSupport?.scenarios?.[0]?.clientSpousalSupport?.childExpenses?.support || 0),
    [spousalSupport],
  );

  const totalSupportMin = useMemo(
    () =>
      showSpousalSupport
        ? Math.abs(spousalSupport?.scenarios?.[0]?.clientSpousalSupport?.monthlyTotalSupport)
        : Math.abs(spousalSupport?.scenarios?.[3]?.clientSpousalSupport?.monthlyTotalSupport),
    [spousalSupport, showSpousalSupport],
  );

  const totalSupportMax = useMemo(
    () => Math.abs(spousalSupport?.scenarios?.[2]?.clientSpousalSupport?.monthlyTotalSupport),
    [spousalSupport],
  );

  const showChildSupportResult = useMemo(() => showChildSupport && children?.length > 0, [
    showChildSupport,
    children,
  ]);

  const isOtherSupport = useMemo(
    () =>
      supportCalculation?.calculationResult?.childSupport?.clientChildSupport
        .otherMonthlySupport !== 0,
    [supportCalculation],
  );

  if (isChanged || (isCalculated === false && type === 'update')) {
    return (
      <small className="text-sm">
        Your inputs have changed. Press the &apos;Calculate&apos; button to re-calculate support.
      </small>
    );
  }

  if (isCalculated === false) {
    return (
      <small>Complete the required fields and click &apos;Calculate&apos; to view results.</small>
    );
  }

  return (
    <React.Fragment>
      {showSpousalSupport && (
        <Fragment>
          <small className="text-muted">
            <a href="#spousalSupportResults" className="text-muted undeline-hover">
              <FontAwesomeIcon icon="balance-scale" className="mr-1" />
              Spousal Support:
              <div className="calculation-block undeline-hover">
                <CountDollars amount={minMonthlySpousalSupport} /> to{' '}
                <CountDollars amount={maxMonthlySpousalSupport} />
              </div>
            </a>
            <a href="#spousalSupportDuration" className="text-muted">
              <div className="calculation-block undeline-hover">
                {indefiniteDuration && 'indefinite duration'}
                {!indefiniteDuration && `${minDuration} to ${maxDuration} years`}
              </div>
            </a>
          </small>
        </Fragment>
      )}
      {showChildSupportResult && (
        <small className="text-muted">
          <a href="#childSupportResults" className="text-muted undeline-hover">
            <FontAwesomeIcon icon="child" className="mr-1" />
            Child Support:
            <div className="calculation-block">
              <CountDollars amount={childSupportDisplayValue} />{' '}
              {isOtherSupport ? '(net)' : '(s. 3)'}
            </div>
          </a>
          <div className="calculation-block results-row">
            {showSpousalSupport ? (
              <a href="#childExpensesResults" className="text-muted undeline-hover">
                <CountDollars amount={childSupportMin} />
                &nbsp;to <CountDollars amount={childSupportMax} />
                <span> (s. 7)</span>
              </a>
            ) : (
              <a href="#childExpensesResults" className="text-muted undeline-hover">
                <CountDollars amount={childSupportMin} />
                <span> (s. 7)</span>
              </a>
            )}
          </div>
          <a href="#totalSupportResults" className="text-muted undeline-hover">
            <FontAwesomeIcon icon="chart-bar" className="mr-1" />
            Total Support:
            <div className="calculation-block">
              {showSpousalSupport ? (
                <React.Fragment>
                  <CountDollars amount={totalSupportMin} /> to{' '}
                  <CountDollars amount={totalSupportMax} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <CountDollars amount={totalSupportMin} />
                  <span> / month</span>
                </React.Fragment>
              )}
            </div>
          </a>
        </small>
      )}

      <a href="#monthlyBudget" className="d-block">
        <small className="text-muted undeline-hover">
          <FontAwesomeIcon icon="chart-pie" className="mr-1" />
          Budget (Net Income)
        </small>
      </a>
    </React.Fragment>
  );
};

export default ResultsSection;
