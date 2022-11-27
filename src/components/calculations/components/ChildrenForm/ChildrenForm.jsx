import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';

import dayjs from 'dayjs';
import isObject from 'lodash/isObject';
import get from 'lodash/get';

import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import CloseButton from 'components/common/CloseButton';
import DayPickerInput from 'components/common/inputs/DayPickerInput';
import TextInput from 'components/common/inputs/TextInput';
import ToggleButtons from 'components/common/ToggleButtons';
import ChildSupportType from 'components/calculations/components/common/ChildSupportType';

import getChildAvatar from 'utils/getChildAvatar';
import getSchoolDates from 'utils/getSchoolDates';

import useCalculationContext from 'hooks/useCalculationContext';

import {
  buttons,
  genderButtons,
  supportedByButtons,
  supportTypeButtons,
} from 'components/calculations/components/ChildrenForm/childrenMock';

const ChildrenForm = ({ index, child, remove, loading }) => {
  const {
    submitCount,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    values,
  } = useFormikContext();
  const { type, isProfessional } = useCalculationContext();

  // The form should be open when we create a calculation
  const isOpenByDefault = true;
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [moreOpen, setMoreOpen] = useState(false);

  const pathToChild = useMemo(() => `children.${type}.${index}`, [index, type]);

  const hasValidationError = useMemo(() => isObject(get(errors, pathToChild)), [
    errors,
    pathToChild,
  ]);
  const hasFormTouched = useMemo(() => isObject(get(touched, pathToChild)), [pathToChild, touched]);

  useEffect(
    () => {
      // When we add new child on a create form it will be expanded
      if (isOpen === false && hasValidationError === true && hasFormTouched === true) {
        setIsOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasValidationError, submitCount, hasFormTouched],
  );
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const toggleMore = useCallback(() => setMoreOpen(prev => !prev), []);

  const handleClickParenting = useCallback(
    (_, parentingValue) => {
      setFieldValue(`${pathToChild}.parenting`, parentingValue);
      setFieldTouched(`${pathToChild}.parenting`);
    },
    [pathToChild, setFieldTouched, setFieldValue],
  );

  const parentingButtons = useMemo(
    () =>
      ['Client', 'Shared', 'Ex'].map(label => ({
        label: label === 'Client' ? (isProfessional ? label : 'You') : label,
        value: label.toUpperCase(),
        onClick: () =>
          handleClickParenting(
            label === 'Shared' ? 'NONE' : label.toUpperCase(),
            label.toUpperCase(),
          ),
      })),
    [handleClickParenting, isProfessional],
  );

  const handleRemoveChild = useCallback(() => {
    const children = values.children?.[type];

    if (index === 0 && children?.length === 1 && type === 'create') {
      setFieldValue('hasChildren', false);
      setFieldValue('showChildSupport', false);
      setFieldTouched('hasChildren', true);

      return setFieldValue('children', []);
    }

    return remove(index);
  }, [remove, index, type, setFieldValue, values, setFieldTouched]);

  const { birthDate, gender, firstName, isOfRelationship, supportType, isDependent } = useMemo(
    () => child,
    [child],
  );
  const childAge = useMemo(() => dayjs().diff(birthDate, 'years'), [birthDate]);
  const avatar = useMemo(() => getChildAvatar(gender, childAge), [gender, childAge]);

  const handleChangeBirthDate = useCallback(
    birthDateValue => {
      const { defaultSchoolStartDate, defaultSchoolEndDate } = getSchoolDates(birthDateValue);

      setFieldValue(`${pathToChild}.birthDate`, birthDateValue);
      setFieldValue(`${pathToChild}.startSchoolDate`, defaultSchoolStartDate);
      setFieldValue(`${pathToChild}.endSchoolDate`, defaultSchoolEndDate);

      setTimeout(() => {
        setFieldTouched(`${pathToChild}.birthDate`);
        setFieldTouched(`${pathToChild}.startSchoolDate`);
        setFieldTouched(`${pathToChild}.endSchoolDate`);
      }, 0);
    },
    [pathToChild, setFieldTouched, setFieldValue],
  );

  const showInputs = useMemo(
    () => isOfRelationship === true && childAge - (dayjs().year() - values.taxYear) > 18,
    [childAge, isOfRelationship, values.taxYear],
  );

  return (
    <div>
      <Row noGutters className="border-top py-4 px-2 px-md-0 p-lg-4">
        <Col sm={10} lg={5} onClick={toggle} className="col-10">
          <div id={`child_${index}`} className="d-flex align-items-center">
            <div className="avatar">
              <div className="img-saturate img-fluid">
                <img alt="placeholder" src={avatar} width="50px" height="50px" />
              </div>
            </div>
            <div className="avatar-content">
              <h5 className="mb-0">{firstName}</h5>
              <small>{`Age ${childAge} / ${gender === 'MALE' ? 'M' : 'F'} / `}</small>
              <ChildSupportType child={child} />
            </div>
          </div>
        </Col>

        <Col sm={2} lg={7} className="col-2 d-flex justify-content-end justify-content-lg-between">
          <div className="d-none d-lg-block">
            {isOfRelationship === true ? (
              <ToggleButtons
                color="secondary"
                name={`${pathToChild}.parenting`}
                size="md"
                className="mb-0"
                buttons={parentingButtons}
              />
            ) : (
              <div className="mr-3 text-small">
                This child is from another relationship. You may deduct the cost of support for this
                child from guideline income (see below).
              </div>
            )}
          </div>
          <div className="btn-icon-only text-center ml-lg-0" onClick={toggle}>
            <span className="btn-inner--icon">
              <FontAwesomeIcon icon={`angle-${isOpen ? 'down' : 'right'}`} />
            </span>
          </div>
        </Col>
      </Row>

      <Collapse className="px-1 offset-lg-5 col-lg-7 col-md-12" isOpen={isOpen}>
        {isOfRelationship === true ? (
          <React.Fragment>
            <small className="d-none d-lg-block mt-lg-n4 mb-3 form-text text-muted">
              Select the primary parent or shared parenting.
            </small>
            <div className="d-block d-lg-none mb-3">
              <ToggleButtons
                label="Parenting"
                color="secondary"
                name={`${pathToChild}.parenting`}
                className="mb-0"
                buttons={parentingButtons}
                hint="Select the primary parent or shared parenting."
              />
            </div>
          </React.Fragment>
        ) : (
          <div className="mr-3 text-small">
            This child is from another relationship. You may deduct the cost of support for this
            child from guideline income (see below).
          </div>
        )}
        <div className="form-text text-muted">
          <TextInput
            label="First name"
            name={`${pathToChild}.firstName`}
            hint="Child's first name, as it appears on their birth certificate."
          />

          <DayPickerInput
            name={`${pathToChild}.birthDate`}
            label="Date of Birth"
            hint="Enter Child's date of birth."
            handleChange={date => handleChangeBirthDate(date)}
            touchable
          />

          <ToggleButtons
            color="secondary"
            label="Gender"
            name={`${pathToChild}.gender`}
            buttons={genderButtons}
            hint="Select the gender indicated on the child's birth certificate."
          />

          {showInputs && (
            <React.Fragment>
              <ToggleButtons
                color="secondary"
                label="Adult Child Still a Legal Dependent?"
                name={`${pathToChild}.isDependent`}
                buttons={buttons}
                hint="This child is over the age of 18. Is this child a legal dependent? If so, answer &quot;yes&quot; to calculate child support for this child. Answer 'no' if you do not want to calculate child support for this child. For more information, visit the help centre."
              />

              {isDependent === true && (
                <React.Fragment>
                  <ToggleButtons
                    color="secondary"
                    label="Support Type"
                    name={`${pathToChild}.supportType`}
                    buttons={supportTypeButtons}
                    hint="Select guideline support to calculate basic s. 3 child support for this child as though they were a minor dependent. Alternatively, you can calculate only section 7 support, or enter 'other support' in a specified amount. For more information, visit the help centre."
                  />

                  {supportType === 'OTHER' && (
                    <React.Fragment>
                      <TextInput
                        label="Support Amount"
                        hint="Enter the amount of basic child support (other than s. 7 special expense support) paid in relation to this child."
                        name={`${pathToChild}.supportAmount`}
                        placeholder={0}
                        type="number"
                        prepend="dollar-sign"
                      />
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          )}

          <Row noGutters className="p-1">
            <Col onClick={toggleMore} xs={12} className="d-flex justify-content-between">
              <div className="d-block form-control-label pr-3">
                {moreOpen ? ' - Hide' : '+ Show'} more options for {firstName}
                <br />
                <small className="text-muted">
                  (adult children, disability, income, children from other relationships, etc.)
                </small>
              </div>
              <div className="btn-icon-only mr-0">
                <div className="btn-icon-only float-right">
                  <span className="btn-inner--icon">
                    <FontAwesomeIcon
                      icon={`angle-${moreOpen ? 'down' : 'right'}`}
                      style={{ width: '8px', height: '16px' }}
                    />
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <Collapse isOpen={moreOpen} className="mt-3">
            {values?.showSpousalSupport && (
              <Fragment>
                <DayPickerInput
                  name={`${pathToChild}.startSchoolDate`}
                  label="Date Child Starts School"
                  hint="Enter the date this child starts full-time school. Default is September 1 after the child turns 7. Used to calculate the duration of spousal support."
                  touchable
                />
                <DayPickerInput
                  name={`${pathToChild}.endSchoolDate`}
                  label="Date Child Finishes School"
                  hint="Enter the date this child finishes high school. Default is June 30 after the child turns 18. Used to calculate the duration of spousal support."
                  touchable
                />
              </Fragment>
            )}

            <ToggleButtons
              color="secondary"
              label="Child of Relationship?"
              name={`${pathToChild}.isOfRelationship`}
              buttons={buttons}
              hint='Is the child a "child of this relationship" or a child from a different relationship? This can be complicated. If you&apos;re not sure how to answer, check the help centre.'
            />

            {isOfRelationship === false && (
              <React.Fragment>
                <ToggleButtons
                  color="secondary"
                  label="Is this child a legal dependent?"
                  name={`${pathToChild}.isDependent`}
                  buttons={buttons}
                  hint="Is this child a legal dependent of either person? If so, answer &quot;yes&quot; to deduct the cost of supporting this child from guideline income. Answer 'no' if you do not want to deduct child support from guideline income in this support calculation. This can be tricky: usually support is not deducted for children from prior relationships based on the 'first family' principle. For more information, visit the help centre."
                />

                {isDependent === true && (
                  <React.Fragment>
                    <ToggleButtons
                      color="secondary"
                      label="Child of Prior Relationship?"
                      name={`${pathToChild}.priorRelationship`}
                      buttons={buttons}
                      hint="Is the child from a prior relationship? If so, the calculator will apply the 'first family principle' and deduct child support for this child from guideline income for both spousal and child support."
                    />

                    <ToggleButtons
                      color="secondary"
                      label="Child is Supported By"
                      name={`${pathToChild}.supportedBy`}
                      buttons={supportedByButtons}
                      hint="Which person has an obligation to support this child? Since this child is a legal dependent from another relationship, the cost of supporting the child will need to be calculated and deducted from their guideline income for this support calculation."
                    />

                    <ToggleButtons
                      color="secondary"
                      label="Support Type"
                      name={`${pathToChild}.supportType`}
                      buttons={supportTypeButtons}
                      hint="Select guideline support to automatically calculate and deduct guideline child support for this child from the parent's guideline income. Alternatively, you can deduct actual section 7 support paid or other support in a specified amount."
                    />

                    {(supportType === 'SPECIAL' || supportType === 'OTHER') && (
                      <React.Fragment>
                        <TextInput
                          label="Support Amount"
                          hint="*Note that the child's income is not relevant to the calculation of basic section 3 child support,
                          but is relevant to the calculation of certain tax credits and benefits that can affect section 7 special expense support."
                          name={`${pathToChild}.supportAmount`}
                          placeholder={0}
                          type="number"
                          prepend="dollar-sign"
                        />

                        <ToggleButtons
                          color="secondary"
                          label="Tax Deductible?"
                          name={`${pathToChild}.supportDeductible`}
                          buttons={buttons}
                          hint="Is this support amount tax deductible? Usually it is not, however if the only support is section 7 expenses then they may be deductible. If support is not deductible, then the actual amount of support will be grossed-up and deducted from guideline income."
                        />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            )}

            <ToggleButtons
              color="secondary"
              label="Child Has Disability"
              name={`${pathToChild}.disabled`}
              buttons={buttons}
              hint="Is the child eligible for the Disability Tax Credit or other recognized disability benefits?"
            />

            <TextInput
              label="Child's Income"
              hint="*Note that the child's income is not relevant to the calculation of basic section 3 child support,
              but is relevant to the calculation of certain tax credits and benefits that can affect section 7 special expense support."
              name={`${pathToChild}.childIncome`}
              placeholder={0}
              type="number"
              prepend="dollar-sign"
            />
          </Collapse>
        </div>

        <div className="d-flex justify-content-between pb-3">
          <Button
            size="sm"
            onClick={handleRemoveChild}
            color="transparent"
            className="p3 text-danger cursor-pointer small"
            disabled={loading}
          >
            <FontAwesomeIcon
              icon="trash"
              className="mr-2"
              style={{ width: '11.188px', height: '12.797px' }}
            />
            Delete
          </Button>
          <CloseButton toggle={toggle}>Close</CloseButton>
        </div>
      </Collapse>
    </div>
  );
};

export default ChildrenForm;
