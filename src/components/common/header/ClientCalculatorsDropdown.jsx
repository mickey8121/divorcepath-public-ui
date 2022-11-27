import React from 'react';

import CalculationsTypeDropdown from 'components/common/CalculationsTypeDropdown';

const ClientCalculatorsDropdown = ({ isPro }) => {
  return (
    <div className={`${isPro ? 'pro-dropdown' : ''}`}>
      <CalculationsTypeDropdown
        header
        color="secondary"
        icon="calculator"
        headerMenuLabel="Support Calculators"
        btnToggleText={
          <span className="btn-inner--text d-none d-md-inline-block ml-2 mr-2">Calculators</span>
        }
        right={!isPro}
      />
    </div>
  );
};

export default ClientCalculatorsDropdown;
