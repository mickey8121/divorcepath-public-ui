/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';
import { connect } from 'formik';

import CardHeader from 'components/calculations/components/CardHeader';
import CalculationContext from 'context/CalculationContext/CalculationContext';

import useCalculationContext from 'hooks/useCalculationContext';

import IncomesList from '../components/Incomes/IncomesList';

const IncomeSection = ({ values }) => {
  const { isProfessional, type } = useCalculationContext(CalculationContext);

  const clientFirstName = useMemo(
    () =>
      values?.clientSupportProfile[type]?.firstName
        ? values.clientSupportProfile[type].firstName === 'You'
          ? 'Your'
          : `${values.clientSupportProfile[type].firstName}'s`
        : "Client's",
    [type, values.clientSupportProfile],
  );

  const exFirstName = useMemo(
    () =>
      values?.exSupportProfile[type]?.firstName
        ? `${values.exSupportProfile[type].firstName}'s`
        : "Ex's",
    [type, values.exSupportProfile],
  );

  return (
    <div className="calculator-section-container income" id="income">
      <CardHeader src="/canada/images/icons/dusk/png/receive-cash.png" text="4. Income" />
      <div className="calculator-section">
        <p>
          Enter all recurring sources of income for both
          {isProfessional ? ' your client and the opposing party. ' : ' you and your ex. '}
          Include both taxable and non-taxable income. For example, include: employment, pension,
          self-employment, and dividend income. For many people, this information can be copied from
          the &quot;Total Income&quot; page of their last T1 tax return.
        </p>

        <h5>
          <span>{clientFirstName} Income</span>
        </h5>

        <IncomesList partyType="clientSupportProfile" />

        <h5 className="pt-4">
          <span>{exFirstName} Income</span>
        </h5>

        <IncomesList partyType="exSupportProfile" />

        <p className="mt-3">
          Once all sources of income are entered for both parties, review estimated tax credits and
          benefits below.
        </p>
      </div>
    </div>
  );
};

export default connect(IncomeSection);
