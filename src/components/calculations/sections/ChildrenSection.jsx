import React, { Fragment, useMemo } from 'react';
import { useFormikContext } from 'formik';

import CardHeader from 'components/calculations/components/CardHeader';
import ChildrenFormContainer from 'components/calculations/components/ChildrenForm/ChildrenFormContainer';
import ChildExpensesContainer from 'components/calculations/components/ChildExpenses/ChildExpensesContainer';
import OptionsChildrenToggle from 'components/calculations/components/OptionsChildrenToggle';

import useCalculationContext from 'hooks/useCalculationContext';

const ChildrenSection = () => {
  const { values } = useFormikContext();
  const { calculatorType } = useCalculationContext();

  const showChildrenToggle = useMemo(() => {
    const { children } = values;

    return !!(children?.length || children?.update?.length || children?.create?.length);
  }, [values]);

  return (
    <div className="calculator-section-container children" id="children">
      <CardHeader text="3. Children" src="/canada/images/icons/dusk/png/children.png" />

      <div className="calculator-section">
        <p>
          Dependent children of the relationship are listed below. Select the appropriate parenting
          relationship and add any special child-related expenses.
        </p>

        {!showChildrenToggle && calculatorType !== 'CHILD' && <OptionsChildrenToggle />}

        {(showChildrenToggle || calculatorType === 'CHILD') && (
          <Fragment>
            <ChildrenFormContainer />

            <p>
              If the child spends 60% or more time with a parent, that parent is the
              &quot;primary&quot; parent. If the child spends more than 40% of time with both
              parents, select &quot;shared&quot; parenting.
            </p>

            <h5>Special Child-Related Expenses (s. 7 Expenses)</h5>

            <p>
              Enter the total
              <em> annual </em>
              amount of all special child-related expenses (including tax), such as private school
              or tutoring, daycare, orthodontics and similar out-of-pocket costs.
            </p>

            <ChildExpensesContainer />

            <p className="mt-3">
              These expenses are apportioned based on the income of each parent, adjusted for child
              support payments.
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ChildrenSection;
