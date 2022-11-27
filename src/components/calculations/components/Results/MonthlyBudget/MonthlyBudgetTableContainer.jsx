import React, { useMemo, useState } from 'react';

import classnames from 'classnames';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import customGet from 'utils/get';
import MonthlyBudgetTable from './MonthlyBudgetTable';

const MonthlyBudgetTableContainer = ({
  tabNavLinks,
  spousalSupport,
  clientName,
  exName,
  showSpousalSupport,
  showChildSupportResults,
  agreedSpousalSupport,
  payor,
  payorName,
  payeeName,
  supportCalculation,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const toggle = tab => activeTab !== tab && setActiveTab(tab);

  const scenarios = useMemo(() => {
    if (showSpousalSupport) {
      if (agreedSpousalSupport) {
        return [
          customGet(spousalSupport, 'scenarios[4]', {}),
          customGet(spousalSupport, 'scenarios[0]', {}),
          customGet(spousalSupport, 'scenarios[1]', {}),
          customGet(spousalSupport, 'scenarios[2]', {}),
        ];
      }

      return [
        customGet(spousalSupport, 'scenarios[0]', {}),
        customGet(spousalSupport, 'scenarios[1]', {}),
        customGet(spousalSupport, 'scenarios[2]', {}),
      ];
    }

    return [customGet(spousalSupport, 'scenarios[3]', {})];
  }, [agreedSpousalSupport, showSpousalSupport, spousalSupport]);

  return (
    <div>
      {showSpousalSupport ? (
        <React.Fragment>
          <Nav tabs>
            {tabNavLinks.map((link, index) => (
              // eslint-disable-next-line react/no-array-index-key
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
              <TabPane tabId={index} key={scenario.name || index}>
                <MonthlyBudgetTable
                  scenario={scenario}
                  clientName={clientName}
                  exName={exName}
                  payor={payor}
                  payorName={payorName}
                  payeeName={payeeName}
                  showSpousalSupport={showSpousalSupport}
                  showChildSupportResults={showChildSupportResults}
                  supportCalculation={supportCalculation}
                />
              </TabPane>
            ))}
          </TabContent>
        </React.Fragment>
      ) : (
        <MonthlyBudgetTable
          scenario={{ ...scenarios[0], ...{ name: '' } }}
          clientName={clientName}
          exName={exName}
          payor={payor}
          payorName={payorName}
          payeeName={payeeName}
          showChildSupportResults={showChildSupportResults}
          showSpousalSupport={showSpousalSupport}
          supportCalculation={supportCalculation}
        />
      )}
    </div>
  );
};

export default MonthlyBudgetTableContainer;
