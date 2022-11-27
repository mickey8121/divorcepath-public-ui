import React from 'react';

import useCalculationContext from 'hooks/useCalculationContext';

const FeaturesList = () => {
  const { isProfessional } = useCalculationContext();

  return (
    <div className="upgrade-plan-container">
      <span className="upgrade-plan-span">
        * Satisfaction Guaranteed. If you're not completely happy with your upgrade, let us know and
        we'll issue a
{' '}
        <a className="upgrade-plan-link" href="https://www.divorcepath.com/guarantee">
          refund
        </a>
        .
      </span>
      <ul className="upgrade-plan-list">
        <li className="upgrade-plan-list-item">All income types</li>
        <li className="upgrade-plan-list-item">Special child-related expenses</li>
        <li className="upgrade-plan-list-item">Guideline income & exceptions</li>
        <li className="upgrade-plan-list-item">Download PDF reports</li>
        {isProfessional && <li className="upgrade-plan-list-item">Retroactive calculations</li>}
      </ul>
    </div>
  );
};

export default FeaturesList;
