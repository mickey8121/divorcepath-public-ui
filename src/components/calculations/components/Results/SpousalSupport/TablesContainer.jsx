/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import React, { useCallback, useMemo, useState } from 'react';

import classnames from 'classnames';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import WithChildrenTable from './WithChildrenTable';
import WithoutChildrenTableContainer from './WithoutChildrenTableContainer';
import CustodialPayorTable from './CustodialPayorTable';

import customGet from 'utils/get';

const descriptions = {
  'Custodial Payor': (
    <p className="pt-2">
      <strong>The Custodial Payor Spousal Support Formula:</strong> Where the party paying spousal
      support is also the primary parent and net recipient of child support, spousal support is
      calculated based on the difference between the parties' incomes after grossing-up notional
      child support (for the spousal support payor) and grossing-up net child support paid (for the
      child support payor). Support is then calculated based on the duration of the relationship and
      the income differential between the parties.
    </p>
  ),
  'With Children': (
    <p className="pt-2">
      <strong>The With Children Spousal Support Formula:</strong> Spousal support in each range is
      calculated based on a percentage of individual net disposable income. Support payments in the
      low scenario will ensure the recipient a minimum of 29% of total disposable income, but may be
      higher. The high support scenario ensures the recipient receives a minimum of 40% of total net
      disposable income, and is capped at 50% of disposable income. The mid range scenario
      calculates support based on the percentage mid-range between the low and high scenarios.
    </p>
  ),
  'Without Children': (
    <p className="pt-2">
      <strong>The Without Child Spousal Support Formula:</strong> The amount of support ranges from
      1.5 to 2 percent of the difference between the spouses' gross incomes for each year of
      marriage (or cohabitation), up to (1) a maximum of 50% of income difference or (2) an amount
      that would give the recipient 50% of the parties' combined after-tax income, whichever is
      lower.
    </p>
  ),
};

const TablesContainer = ({
  tabNavLinks,
  childSupport,
  spousalSupport,
  clientName,
  exName,
  agreedSpousalSupport,
  payor,
  payee,
  payorName,
  payeeName,
  showChildSupportResults,
  npvDiscountRate,
  npvDuration,
  supportCalculation,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  const toggle = useCallback(
    tab => {
      if (activeTab !== tab) setActiveTab(tab);
    },
    [activeTab],
  );

  const scenarios = useMemo(() => {
    if (agreedSpousalSupport)
      return [
        customGet(spousalSupport, 'scenarios[4]', {}),
        customGet(spousalSupport, 'scenarios[0]', {}),
        customGet(spousalSupport, 'scenarios[1]', {}),
        customGet(spousalSupport, 'scenarios[2]', {}),
      ];

    return [
      customGet(spousalSupport, 'scenarios[0]', {}),
      customGet(spousalSupport, 'scenarios[1]', {}),
      customGet(spousalSupport, 'scenarios[2]', {}),
    ];
  }, [spousalSupport, agreedSpousalSupport]);

  const formula = useMemo(() => customGet(spousalSupport, 'formula', 'No Spousal'), [
    spousalSupport,
  ]);

  return (
    <div>
      <h6 className="mt-4">Spousal Support Calculation Details</h6>

      <p>
        Calculation details for each of the low, mid and high spousal support scenarios are set out
        in the table below. Support is calculated using the <b>{formula}</b> formula (learn more).
      </p>

      <Nav tabs>
        {tabNavLinks.map((link, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === index })}
              onClick={() => toggle(index)}
            >
              {link}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={activeTab}>
        {scenarios.map((scenario, index) => (
          <TabPane tabId={index} key={index}>
            {formula === 'With Children' && (
              <WithChildrenTable
                supportCalculation={supportCalculation}
                scenario={scenario}
                clientName={clientName}
                exName={exName}
                payor={payor}
                payee={payee}
                payorName={payorName}
                payeeName={payeeName}
                showChildSupportResults={showChildSupportResults}
                npvDiscountRate={npvDiscountRate}
                npvDuration={npvDuration}
              />
            )}
            {formula === 'Without Children' && (
              <WithoutChildrenTableContainer
                supportCalculation={supportCalculation}
                spousalSupport={spousalSupport}
                scenario={scenario}
                clientName={clientName}
                exName={exName}
                payor={payor}
                payee={payee}
                payorName={payorName}
                payeeName={payeeName}
                showChildSupportResults={showChildSupportResults}
                npvDiscountRate={npvDiscountRate}
                npvDuration={npvDuration}
              />
            )}
            {formula === 'Custodial Payor' && (
              <CustodialPayorTable
                supportCalculation={supportCalculation}
                childSupport={childSupport}
                spousalSupport={spousalSupport}
                scenario={scenario}
                clientName={clientName}
                exName={exName}
                payor={payor}
                payee={payee}
                payorName={payorName}
                payeeName={payeeName}
                showChildSupportResults={showChildSupportResults}
                npvDiscountRate={npvDiscountRate}
                npvDuration={npvDuration}
              />
            )}
          </TabPane>
        ))}
      </TabContent>
      {descriptions[formula]}
    </div>
  );
};

export default TablesContainer;
