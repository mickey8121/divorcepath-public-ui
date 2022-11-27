import React, { useMemo, useState } from 'react';

import classnames from 'classnames';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import customGet from 'utils/get';
import TotalSupportTable from './TotalSupportTable';

const TotalSupportTableContainer = ({
  tabNavLinks,
  spousalSupport,
  clientName,
  exName,
  showSpousalSupport,
  agreedSpousalSupport,
  showChildSupportResults,
  supportCalculation,
  payor,
  payorName,
  payeeName,
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
          <p>
            Calculation details for each total support scenario are explained below. Click on the
            scenario you wish to view.
          </p>
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
                <TotalSupportTable
                  scenario={scenario}
                  clientName={clientName}
                  exName={exName}
                  payor={payor}
                  payorName={payorName}
                  payeeName={payeeName}
                  showSpousalSupport={showSpousalSupport}
                  showChildSupportResults={showChildSupportResults}
                />
              </TabPane>
            ))}
          </TabContent>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>
            Calculation details for total support are explained below. Click on the scenario you
            wish to view.
          </p>
          <TotalSupportTable
            scenario={{ ...scenarios[0], ...{ name: '' } }}
            clientName={clientName}
            exName={exName}
            payor={payor}
            payorName={payorName}
            payeeName={payeeName}
            showSpousalSupport={showSpousalSupport}
            showChildSupportResults={showChildSupportResults}
            supportCalculation={supportCalculation}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default TotalSupportTableContainer;
