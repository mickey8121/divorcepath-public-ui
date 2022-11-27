import React, { useCallback, useMemo } from 'react';
import { useFormikContext } from 'formik';

import ToggleButtons from 'components/common/ToggleButtons';

import useCalculationContext from 'hooks/useCalculationContext';

import { fillChildren } from 'components/calculations/utils/initialValues';
import { defaultChildren } from 'components/calculations/utils/defaultValues';

const OptionsChildrenToggle = () => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const { calculatorType, isProfessional } = useCalculationContext();

  const createChildren = useCallback(() => {
    const defaultChildrenForCreate = { ...defaultChildren, firstName: 'Child 1' };

    setFieldTouched('hasChildren', true);
    setFieldValue('showChildSupport', true);
    setFieldValue('hasChildren', true);
    setFieldValue('children', fillChildren([defaultChildrenForCreate], 'create'));
  }, [setFieldTouched, setFieldValue]);

  const childrenButtons = useMemo(
    () => [
      {
        value: true,
        label: 'Yes',
        onClick: createChildren,
      },
      {
        value: false,
        label: 'No',
      },
    ],
    [createChildren],
  );

  return (
    <ToggleButtons
      color="secondary"
      label={isProfessional ? `Does your client have children?` : 'Do you have children ?'}
      name="hasChildren"
      disabled={calculatorType === 'CHILD'}
      buttons={childrenButtons}
    />
  );
};

export default OptionsChildrenToggle;
