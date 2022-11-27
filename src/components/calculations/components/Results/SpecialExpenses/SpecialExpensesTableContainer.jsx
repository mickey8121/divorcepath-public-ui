import React, { useCallback, useMemo, useState } from 'react';
import classnames from 'classnames';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import customGet from 'utils/get';
import SpecialExpensesTable from './SpecialExpensesTable';

const SpecialExpensesTableContainer = ({
  tabNavLinks,
  spousalSupport,
  clientName,
  exName,
  showSpousalSupport,
  agreedSpousalSupport,
  supportCalculation
}) => {
  const [activeTab, setActiveTab] = useState(1);

  const toggle = useCallback(tab => activeTab !== tab && setActiveTab(tab), [activeTab]);
  const scenarios = useMemo(
    () => {
      if (showSpousalSupport) {
        if (agreedSpousalSupport)
          return [
            customGet(spousalSupport, 'scenarios[4]', {}),
            customGet(spousalSupport, 'scenarios[0]', {}),
            customGet(spousalSupport, 'scenarios[1]', {}),
            customGet(spousalSupport, 'scenarios[2]', {})
          ];

        return [
          customGet(spousalSupport, 'scenarios[0]', {}),
          customGet(spousalSupport, 'scenarios[1]', {}),
          customGet(spousalSupport, 'scenarios[2]', {})
        ];
      }

      return [customGet(spousalSupport, 'scenarios[3]', {})];
    },
    [showSpousalSupport, agreedSpousalSupport, spousalSupport]
  );

  if (!showSpousalSupport)
    return (
      <SpecialExpensesTable
        supportCalculation={supportCalculation}
        scenario={{ ...scenarios[0], ...{ name: 'Guideline Income' } }}
        clientName={clientName}
        exName={exName}
      />
    );

  return (
    <div>
      <h6 className="mt-4">Special Expense Support Details</h6>
      {showSpousalSupport && (
        <p>
          Calculation details for each section 7 child support scenario are explained below. Click
          on the scenario you wish to view.
        </p>
      )}

      <Nav tabs>
        {tabNavLinks.map((link, index) => (
          <NavItem key={link}>
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
          <TabPane tabId={index} key={scenario.name || index}>
            <SpecialExpensesTable
              scenario={scenario}
              clientName={clientName}
              exName={exName}
              showSpousalSupport={showSpousalSupport}
              supportCalculation={supportCalculation}
            />
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default SpecialExpensesTableContainer;
