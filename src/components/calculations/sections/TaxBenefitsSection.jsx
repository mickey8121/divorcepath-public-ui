/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';
import { useFormikContext } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardHeader from 'components/calculations/components/CardHeader';
import AmountTables from 'components/calculations/components/AmountTables/AmountTables';

import useCalculationContext from 'hooks/useCalculationContext';

const TaxBenefitsSection = ({ supportCalculation, showSpousalSupport }) => {
  const { values } = useFormikContext();
  const { isProfessional, type } = useCalculationContext();

  const clientFirstName = useMemo(
    () =>
      values?.clientSupportProfile[type]?.firstName
        ? values.clientSupportProfile[type].firstName === 'You'
          ? 'Your'
          : `${values.clientSupportProfile[type].firstName}'s`
        : "Client's",
    [values, type],
  );

  const exFirstName = useMemo(
    () =>
      values?.exSupportProfile[type]?.firstName
        ? `${values.exSupportProfile[type].firstName}'s`
        : "Ex's",
    [values, type],
  );

  return (
    <div id="tax" className="calculator-section-container taxes">
      <CardHeader text="5. Tax & Benefits" src="/canada/images/icons/dusk/png/accounting.png" />

      <div className="calculator-section">
        <p>
          The calculator automatically calculates the credits and benefits
          {isProfessional ? ' the parties ' : ' you and your spouse '}
          are likely to receive. However, you may need to enter additional credits, deductions or
          benefits, or override automatically calculated benefits.
        </p>
        <p>
          Add or override any tax amounts that are not automatically calculated using the form
          below.
        </p>
        <h5>{clientFirstName} Tax Credits & Benefits</h5>

        <AmountTables partyType="clientSupportProfile" supportCalculation={supportCalculation} />

        <h5>{exFirstName} Tax Credits & Benefits</h5>

        <AmountTables partyType="exSupportProfile" supportCalculation={supportCalculation} />

        <p>
          <FontAwesomeIcon icon="edit" className="ml-2" style={{ width: '18px', height: '16px' }} />
          denotes amounts that have been manually added by the user
          <br />
          <FontAwesomeIcon
            icon="exclamation-triangle"
            className="ml-2"
            style={{ width: '18px', height: '16px' }}
          />
          denotes amounts where the default value has been overridden by the user
        </p>
        <p>
          <em>
            {showSpousalSupport && (
              <span>
                *Amounts are calculated based on taxable income without spousal support, and may
                vary based on spousal support as shown in the &quot;results&quot; section below.
              </span>
            )}
            <span>
              Tax credits and benefits are relevant to the determination of s. 7 child support (i.e.
              apportionment of special child-related expenses), as well as spousal support.
            </span>
          </em>
        </p>
      </div>
    </div>
  );
};

export default TaxBenefitsSection;
