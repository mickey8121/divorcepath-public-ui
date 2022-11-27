import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import Badge from 'components/common/Badge';

const AmountTablesNavBar = ({
  partyType,
  activeTab,
  toggleActiveTab,
  benefitsCount,
  deductionsCount,
  creditsCount
}) => (
  <Nav tabs className="mb-1 mt-4 amount-tabs" id={`${partyType}-tab`}>
    <NavItem
      className={`nav-item nav-link ${activeTab === 'credits' ? 'active' : ''}`}
      onClick={() => toggleActiveTab('credits')}
    >
      <span>Credits </span>
      <Badge circle color="light">
        {creditsCount}
      </Badge>
    </NavItem>
    <NavItem
      className={`nav-item nav-link ${activeTab === 'deductions' ? 'active' : ''}`}
      onClick={() => toggleActiveTab('deductions')}
    >
      <span>Deductions </span>
      <Badge circle color="light">
        {deductionsCount}
      </Badge>
    </NavItem>
    <NavItem
      className={`nav-item nav-link ${activeTab === 'benefits' ? 'active' : ''}`}
      onClick={() => toggleActiveTab('benefits')}
    >
      <span>Benefits </span>
      <Badge circle color="light">
        {benefitsCount}
      </Badge>
    </NavItem>
  </Nav>
);

export default AmountTablesNavBar;
