/* eslint-disable indent */
import React, { useCallback, useMemo } from 'react';
import customGet from 'utils/get';
import IncomeTable from '../AmountTables/IncomeTable';

import Table from '../Table';

const ChildSupportS3Table = ({
  supportCalculation,
  childSupport,
  spousalSupport,
  exName,
  clientName,
  showSpousalSupport,
}) => {
  const handleClick = useCallback(e => {
    e.preventDefault();

    const element =
      typeof document !== 'undefined' && document ? document.getElementById('options') : null;

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  const clientGuidelineIncome = useMemo(
    () => customGet(childSupport, 'clientChildSupport.guidelineIncome'),
    [childSupport],
  );

  const exGuidelineIncome = useMemo(
    () => customGet(childSupport, 'exChildSupport.guidelineIncome'),
    [childSupport],
  );

  const otherChildSupport = useMemo(
    () => !!customGet(childSupport, 'clientChildSupport.otherMonthlySupport'),
    [childSupport],
  );

  const otherChildSupportRow = useMemo(
    () =>
      otherChildSupport
        ? [
            {
              clientValue: customGet(childSupport, 'clientChildSupport.otherMonthlySupport'),
              exValue: customGet(childSupport, 'exChildSupport.otherMonthlySupport'),
              label: 'Other Child Support (Monthly)',
              description:
                'Other child support (not guideline support) manually entered by the user.',
            },
          ]
        : [],
    [childSupport, otherChildSupport],
  );

  const noSupportScenario = customGet(spousalSupport, 'scenarios[3]');
  const scenario = useMemo(() => ({ ...noSupportScenario, ...{ name: 'Guideline Income' } }), [
    noSupportScenario,
  ]);

  const data = useMemo(
    () => [
      {
        clientValue: clientGuidelineIncome,
        exValue: exGuidelineIncome,
        label: 'CS Guideline Income',
        description:
          'Guideline income (annual) used to calculate child support (including the full amount of dividend and capital gains income earned).',
        resultsTable: (
          <IncomeTable
            scenario={scenario}
            supportCalculation={supportCalculation}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults
          />
        ),
      },
      {
        stringValue: customGet(childSupport, 'clientChildSupport.tableChildren'),
        exString: customGet(childSupport, 'exChildSupport.tableChildren'),
        label: 'Eligible Children',
        description: 'Children eligible for support under the Child Support Guidelines.',
      },
      {
        clientValue: customGet(childSupport, 'clientChildSupport.tableMonthlySupport') * -1,
        exValue: customGet(childSupport, 'exChildSupport.tableMonthlySupport') * -1,
        label: 'Table Child Support (Monthly)',
        description: 'Gross child support calculated using the Child Support Guideline tables.',
      },
      ...otherChildSupportRow,
      {
        clientValue: customGet(childSupport, 'clientChildSupport.netMonthlySupport'),
        exValue: customGet(childSupport, 'exChildSupport.netMonthlySupport'),
        label: 'Child Support (Monthly)',
        description:
          'Net child support, after setting-off any child support payable by the other party (i.e. in shared or split parenting situations).',
      },
      {
        clientValue: customGet(spousalSupport, 'scenarios.0.clientSpousalSupport.npvChildSupport'),
        exValue: customGet(spousalSupport, 'scenarios.0.exSpousalSupport.npvChildSupport'),
        label: 'Lump Sum',
        description: (
          <span>
            <span>
              {`The value of child support for insurance purposes (i.e. the lump sum value), calculated based on
              the estimated duration of child support and applying a discount rate of 2%`}
            </span>
            <a href="/" onClick={handleClick}>
              Edit discount rate and duration in calculation settings
            </a>
          </span>
        ),
      },
    ],
    [
      childSupport,
      spousalSupport,
      handleClick,
      clientGuidelineIncome,
      exGuidelineIncome,
      otherChildSupportRow,
      showSpousalSupport,
      supportCalculation,
      scenario,
    ],
  );

  return (
    <React.Fragment>
      <p>Click on an amount for more information. All amounts are monthly, pro-rated amounts.</p>
      <Table data={data} exName={exName} clientName={clientName} />
    </React.Fragment>
  );
};

export default ChildSupportS3Table;
