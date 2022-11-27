import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';

import { Col, Collapse, Row } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Select from 'components/common/inputs/Select/CustomSelect';
import TextInput from 'components/common/inputs/TextInput';
import ToggleButtons from 'components/common/ToggleButtons';
import UpgradeButton from 'components/common/UpgradeButton';

import useCalculationContext from 'hooks/useCalculationContext';
import useModalContext from 'hooks/useModalContext';

const OptionsForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setFieldValue, values } = useFormikContext();
  const { calculatorType, isProfessional, type, personPronoun } = useCalculationContext();
  const { toggle: toggleModal } = useModalContext();

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  const isCalculateSpousal = useMemo(() => isProfessional || calculatorType === 'SPOUSAL', [
    isProfessional,
    calculatorType,
  ]);

  const buttons = useCallback(
    (name, hasOnClick) => [
      {
        value: true,
        label: 'Yes',
        onClick: hasOnClick
          ? () => setFieldValue(name, 0) // 0 value will be used by API
          : undefined,
      },
      {
        value: false,
        label: 'No',
        onClick: hasOnClick
          ? () => setFieldValue(name, -1) // 0 value will be used by API
          : undefined,
      },
    ],
    [setFieldValue],
  );

  const year = useMemo(
    () =>
      ['2022', '2021', '2020', '2019', '2018', '2017']
        .map(value => ({
          label: value,
          value,
        }))
        .concat({
          label: 'More years coming soon...',
          value: null,
          isDisabled: true,
        }),
    [],
  );

  const childrenArray = values?.children?.[type] || [];
  const childrenIsUnrelatedRelationship = childrenArray.every(
    c => c.data?.isOfRelationship === false || c?.isOfRelationship === false,
  );

  useEffect(() => {
    if (!values?.children) return;
    if (childrenIsUnrelatedRelationship) setFieldValue('showChildSupport', false);
    else setFieldValue('showChildSupport', true);
  }, [setFieldValue, values, type, childrenIsUnrelatedRelationship]);

  return (
    <Fragment>
      <Row id="options" noGutters className="border-top py-4 pl-2" onClick={toggle}>
        <Col sm={10} lg={5} className="col-10">
          <div className="d-flex align-items-center">
            <div className="avatar">
              <img
                alt="placeholder"
                src="/canada/images/icons/dusk/png/icons8-settings-64.png"
                className="img-saturate"
                width='50px'
                height='50px'
                layout="responsive"
              />
            </div>
            <div className="avatar-content">
              <h5 className="mb-0 d-none d-lg-block">Options</h5>
              <h6 className="mb-0 d-block d-lg-none">Options</h6>
              <small className="d-block text-muted">Calculation settings</small>
            </div>
          </div>
        </Col>
        <Col sm={2} lg={7} className="col-2 d-flex justify-content-end">
          <div className="btn-icon-only text-center ml-lg-0">
            <span className="btn-inner--icon">
              <FontAwesomeIcon
                icon={`angle-${isOpen ? 'down' : 'right'}`}
                style={{ width: '8px', height: '16px' }}
              />
            </span>
          </div>
        </Col>
      </Row>

      <Collapse className="px-1 offset-lg-5 col-lg-7 col-md-12" isOpen={isOpen}>
        <div className="mb-3 bg-light p-3">
          <p className="mb-2">
            Upgrade to customize your support calculation settings using the options below.
          </p>
          <UpgradeButton />
        </div>

        {!childrenIsUnrelatedRelationship && (
          <ToggleButtons
            color="secondary"
            label="Calculate Child Support?"
            name="showChildSupport"
            disabled
            disabledOnClick={toggleModal}
            buttons={buttons()}
            hint="Select whether to calculate child support. Child support must be included in the calculation if there are dependent children of the relationship."
          />
        )}

        <ToggleButtons
          color="secondary"
          label="Calculate Spousal Support?"
          name="showSpousalSupport"
          disabled
          buttons={buttons()}
          disabledOnClick={toggleModal}
          hint="To calculate spousal support, use the spousal support calculator."
        />

        {!childrenIsUnrelatedRelationship && (
          <ToggleButtons
            color="secondary"
            label="Agreed Child Support?"
            name="agreedChildSupport"
            value={values?.agreedChildSupport >= 0}
            disabled
            disabledOnClick={toggleModal}
            buttons={buttons('agreedChildSupport', true)}
            hint='Answer "yes" to use specified values for child support, other than the Child Support Guideline Amount.  Note that courts will require a reason to depart from the amount payable under the Child Support Guidelines. The calculator can compare this value to the amount payable under the Guidelines.'
          />
        )}

        {values?.agreedChildSupport >= 0 && (
          <TextInput
            min="0"
            disabled
            disabledOnClick={toggleModal}
            name="agreedChildSupport"
            label="Agreed Child Support"
            hint="Enter the **monthly** agreed amount for child support, or 0 for no child support."
            prepend="dollar-sign"
            type="number"
          />
        )}

        {values?.showSpousalSupport && (
          <ToggleButtons
            color="secondary"
            label="Agreed Spousal Support?"
            name="agreedSpousalSupport"
            disabled
            disabledOnClick={toggleModal}
            value={values?.agreedSpousalSupport >= 0}
            buttons={buttons('agreedSpousalSupport', true)}
            hint={`Answer &quot;yes&quot; to use agreed values for spousal support. The calculator can compare ${personPronoun.your} agreement to the amounts that would be payable under the Spousal Support Advisory Guidelines.`}
          />
        )}

        {values?.agreedSpousalSupport >= 0 && (
          <TextInput
            min="0"
            disabled
            disabledOnClick={toggleModal}
            name="agreedSpousalSupport"
            label="Agreed Spousal Support"
            hint="Enter the **monthly** agreed amount for spousal support, or 0 for no spousal support."
            prepend="dollar-sign"
            type="number"
          />
        )}

        {isCalculateSpousal && values?.showSpousalSupport && (
          <TextInput
            min="0"
            append="percentage"
            disabled
            disabledOnClick={toggleModal}
            name="npvDiscountRate"
            label="Lump Sum Discount Rate"
            hint="The percentage discount rate used to calculate the net present value (lump sum value) of support. Default is 4%, based on estimated long-term inflation and secure interest rate."
            type="number"
          />
        )}

        {isCalculateSpousal && values?.showSpousalSupport && (
          <TextInput
            min="0"
            disabled
            disabledOnClick={toggleModal}
            name="npvDuration"
            label="Lump Sum Duration"
            hint="Specify the duration, in months, to calculate the net present value (lump sum value) of support. If left blank, will default to mid-range duration."
            type="number"
          />
        )}

        <Select
          disabled
          label="Tax Year"
          name="taxYear"
          options={year}
          disabledOnClick={toggleModal}
        />

        <small className="form-text text-muted mt-1">
          The tax year used to calculate child support (if applicable), taxes and benefits.
        </small>
      </Collapse>
    </Fragment>
  );
};

export default OptionsForm;
