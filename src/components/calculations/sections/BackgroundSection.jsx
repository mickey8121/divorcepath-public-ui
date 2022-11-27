/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';

import CardHeader from 'components/calculations/components/CardHeader';
import PersonForm from 'components/calculations/components/PersonForm';
import RelationshipForm from 'components/calculations/components/RelationshipForm';

import useCalculationContext from 'hooks/useCalculationContext';

const BackgroundSection = () => {
  const { calculatorType, personPronoun, isProfessional } = useCalculationContext();

  return (
    <div className="calculator-section-container background" id="background">
      <CardHeader src="/canada/images/icons/dusk/png/team.png" text="2. Background" />

      <div className="calculator-section">
        <p>
          Some background information is required to calculate support. For example, support
          payments can vary significantly by province. If {personPronoun.you} wish to generate an
          anonymous report, you may use a pseudonym or placeholder name.
        </p>

        <PersonForm partyType="clientSupportProfile" />
        <PersonForm partyType="exSupportProfile" />

        {calculatorType === 'SPOUSAL' && (
          <Fragment>
            <hr className="mt-0 pt-0 mb-3" />
            <p>
              For support purposes, the duration of the relationship is calculated based on the date
              {isProfessional ? ' the parties ' : ' you '} started living together (the
              &quot;cohabitation date&quot;). This may or may not be the same as the date
              {isProfessional ? ' the parties ' : ' you '}
              were married.
            </p>

            <RelationshipForm />

            <hr className="m-0 mb-2 p-0" />
            <p>
              The length of the relationship can impact the duration and amount of spousal support.
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default BackgroundSection;
