import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';

import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';

import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CloseButton from 'components/common/CloseButton';
import TextInput from 'components/common/inputs/TextInput';
import ToggleButtons from 'components/common/ToggleButtons';
import DayPickerInput from 'components/common/inputs/DayPickerInput';
import Select from 'components/common/inputs/Select/CustomSelect';

import customGet from 'utils/get';
import { canadianProvinces, canadianTerritories } from 'utils/places';
import getDefaultAvatar from 'utils/getDefaultAvatar';
import regionNames from 'components/calculations/utils/regionNames';

import useCalculationContext from 'hooks/useCalculationContext';
import usePrevious from 'hooks/usePrevious';


const optionsArray = sortBy(canadianProvinces.concat(canadianTerritories), 'name');

const genderButtons = [
  {
    value: 'FEMALE',
    label: 'Female',
  },
  {
    value: 'MALE',
    label: 'Male',
  },
];

const buttons = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
    label: 'No',
  },
];

const PersonForm = ({ partyType }) => {
  const { type, calculatorType, residence: searchResidence } = useCalculationContext();
  const { values, submitCount, errors, touched, setFieldValue } = useFormikContext();

  // If we are on create calculation step it should be open by default
  const [isOpen, setIsOpen] = useState(true);
  const [moreOpen, setMoreOpen] = useState(false);

  const prefix = useMemo(() => `${partyType}.${type}`, [partyType, type]);
  const personFormErrors = useMemo(() => customGet(errors, `${prefix}`, {}), [errors, prefix]);

  const personFormTouched = useMemo(() => customGet(touched, `${prefix}`, {}), [prefix, touched]);

  const newPartner = useMemo(() => customGet(values, `${prefix}.hasNewPartner`), [prefix, values]);

  const clientResidence = useMemo(
    () => customGet(values, `clientSupportProfile.${type}.residence`),
    [type, values],
  );
  const prevClientResidence = usePrevious(clientResidence);

  // delete errors.income;
  // delete touched.income;
  const hasValidationError =
    personFormErrors.birthDate ||
    personFormErrors.firstName ||
    personFormErrors.gender ||
    personFormErrors.hasNewPartner ||
    personFormErrors.residence ||
    personFormErrors.lastName;
  const hasFormTouched = isEmpty(personFormTouched) === false;

  useEffect(
    () => {
      if (isOpen === false && hasValidationError && hasFormTouched === true) {
        setIsOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasValidationError, submitCount, hasFormTouched],
  );

  const sectionValues = useMemo(() => values?.[partyType]?.[type], [values, type, partyType]);

  const name = useMemo(() => {
    if (!sectionValues?.firstName && !sectionValues?.lastName) return 'Enter name';

    return `${sectionValues?.firstName || ''} ${sectionValues?.lastName || ''}`;
  }, [sectionValues]);
  const gender = useMemo(() => sectionValues?.gender, [sectionValues]);
  const hasNewPartner = useMemo(() => sectionValues?.hasNewPartner, [sectionValues]);

  const personAge = useMemo(() => dayjs().diff(sectionValues?.birthDate, 'years') || 0, [
    sectionValues,
  ]);

  const residence = useMemo(() => sectionValues?.residence, [sectionValues]);
  const [defaultResidence] = useState(residence);

  const shortInfo = useMemo(
    () =>
      `Age ${personAge} / ${gender ? `${gender?.charAt(0)} /` : ''} ${
        sectionValues?.residence ? `${regionNames[sectionValues?.residence]} /` : ''
      } ${hasNewPartner ? 'R' : 'S'}`,
    [personAge, gender, hasNewPartner, sectionValues],
  );

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const toggleMore = useCallback(() => setMoreOpen(prev => !prev), []);

  const avatar = useMemo(() => getDefaultAvatar(gender), [gender]);

  const isDisabled = useMemo(
    () => ['Yukon', 'Northwest Territories', 'Nunavut'].includes(residence),
    [residence],
  );

  useEffect(() => {
    if (isDisabled && !sectionValues?.northernResident)
      setFieldValue(`${prefix}.northernResident`, true);
  }, [isDisabled, sectionValues, prefix, setFieldValue]);

  const handleChangePartnerIncome = useCallback(
    e => {
      e.target.value = e.target.value.replace(/^0+/, '');
      setFieldValue(`${prefix}.partnerIncome`, parseInt(e.target.value, 10));
    },
    [setFieldValue, prefix],
  );

  const handleChangePropertyCosts = useCallback(
    e => {
      e.target.value = e.target.value.replace(/^0+/, '');
      setFieldValue(`${prefix}.propertyCosts`, parseInt(e.target.value, 10));
    },
    [setFieldValue, prefix],
  );

  const handleChangeEnergyCosts = useCallback(
    e => {
      e.target.value = e.target.value.replace(/^0+/, '');
      setFieldValue(`${prefix}.energyCosts`, parseInt(e.target.value, 10));
    },
    [setFieldValue, prefix],
  );

  // If user changes residence for client, and ex is still default, change residence for ex to match client
  useEffect(() => {
    if (!searchResidence && partyType === 'clientSupportProfile') {
      const exResidence = customGet(values, `exSupportProfile.${type}.residence`);

      if (
        clientResidence !== exResidence &&
        prevClientResidence !== clientResidence &&
        exResidence === defaultResidence
      ) {
        setFieldValue(`exSupportProfile.${type}.residence`, clientResidence);
      }
    }
  }, [
    values,
    prefix,
    searchResidence,
    partyType,
    setFieldValue,
    prevClientResidence,
    clientResidence,
    type,
    defaultResidence,
  ]);

  return (
    <Fragment>
      <Row noGutters className="border-top py-4 px-2 px-md-0 p-lg-4">
        <Col sm={6} lg={5} className="col-10" onClick={toggle}>
          <div className="d-flex align-items-center">
            <div className="avatar">
              <div className="img-saturate">
                <img alt="placeholder" src={avatar} width='50px' height='50px'layout="responsive" />
              </div>
            </div>
            <div className="avatar-content">
              <h5 className="mb-0">{name}</h5>
              <small className="d-block text-muted">{shortInfo}</small>
            </div>
          </div>
        </Col>

        <Col>
          <Row noGutters className="select-row">
            <Select
              className="calculation-select"
              name={`${prefix}.residence`}
              defaultValue={residence}
              options={optionsArray}
              freeOptions={optionsArray}
            />

            <div className="angle-btn" onClick={toggle}>
              <span className="btn-inner--icon">
                <FontAwesomeIcon
                  icon={`angle-${isOpen ? 'down' : 'right'}`}
                  style={{ width: '10px', height: '16px' }}
                />
              </span>
            </div>
          </Row>
        </Col>
      </Row>

      <Collapse className="px-1 offset-lg-5 col-lg-7 col-md-12" isOpen={isOpen}>
        <small className="d-none d-sm-block mt-sm-n4 mb-3 form-text text-muted">
          The province or territory this person primarily resides in.
        </small>
        <div className="d-block d-sm-none mb-3">
          <Select
            label="Residence"
            name={`${prefix}.residence`}
            defaultValue={residence}
            options={optionsArray}
            hint="*Required. The province or territory this person primarily resides in. Support varies by province."
          />
        </div>

        <TextInput
          name={`${prefix}.firstName`}
          label="First name"
          hint="*Real name optional. Feel free to use a pseudonym. Used to customize your report."
        />

        <TextInput
          name={`${prefix}.lastName`}
          label="Last name"
          hint="*Optional. Used to customize your report."
        />

        <ToggleButtons
          color="secondary"
          label="Gender*"
          name={`${prefix}.gender`}
          buttons={genderButtons}
          hint="*Optional. Used to customize your report."
        />

        <DayPickerInput
          maxDate={new Date()}
          name={`${prefix}.birthDate`}
          label="Date of Birth"
          hint={
            calculatorType === 'CHILD'
              ? '*Optional. Age is a factor in calculating tax and spousal support, but not child support.'
              : 'Age is a factor in calculating tax and spousal support.'
          }
          touchable
        />

        {residence === 'Ontario' && (
          <Fragment>
            <TextInput
              label="Annual Property Tax & Rent"
              hint="The person's total annual property tax, or total annual rent, or both (if applicable). Used to calculate the Ontario Trillium Benefit."
              name={`${prefix}.propertyCosts`}
              placeholder={0}
              type="number"
              prepend="dollar-sign"
              handleChange={handleChangePropertyCosts}
            />
            <TextInput
              label="Annual Energy Costs"
              hint="The person's total annual energy costs. Used to calculate the Ontario Trillium Benefit."
              name={`${prefix}.energyCosts`}
              placeholder={0}
              type="number"
              prepend="dollar-sign"
              handleChange={handleChangeEnergyCosts}
            />
          </Fragment>
        )}

        <Row noGutters className="p-1">
          <Col onClick={toggleMore} xs={12} className="d-flex justify-content-between">
            <div className="d-block form-control-label pr-3">
              {moreOpen ? ' - Hide' : '+ Show'} more options for
              {name}
              <br />
              <small className="text-muted">
                (new partner, northern/rural resident, disability)
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
          <ToggleButtons
            color="secondary"
            label="New Partner?"
            name={`${prefix}.hasNewPartner`}
            buttons={buttons}
            hint="Remarried or new common law-partner? This can affect tax calculations."
          />

          {newPartner === true && (
            <TextInput
              label="New Partner's Income"
              hint="*Note that the income of new partners is not used to calculate support directly,
              and is not normally expected to contribute to support, but is relevant to the
              calculation of certain tax credits and benefits."
              name={`${prefix}.partnerIncome`}
              placeholder={0}
              type="number"
              prepend="dollar-sign"
              handleChange={handleChangePartnerIncome}
            />
          )}

          <ToggleButtons
            color="secondary"
            label="Northern Resident"
            name={`${prefix}.northernResident`}
            buttons={buttons}
            disabled={isDisabled}
            hint="Eligible for Northern Residents tax deduction? This can affect tax calculations."
          />

          <ToggleButtons
            color="secondary"
            label="Rural Resident"
            name={`${prefix}.ruralResident`}
            buttons={buttons}
            hint="Eligible for Climate Action Supplement for residents of rural and small communities?"
          />

          <ToggleButtons
            color="secondary"
            label="Person Has Disability"
            name={`${prefix}.disabled`}
            buttons={buttons}
            hint="Eligible for Disability Tax Credit and other disability-related benefits or credits?"
          />
        </Collapse>

        <CloseButton toggle={toggle}>Close</CloseButton>
      </Collapse>
    </Fragment>
  );
};

export default PersonForm;
