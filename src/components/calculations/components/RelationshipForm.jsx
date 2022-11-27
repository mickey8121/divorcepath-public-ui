import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import dayjs from 'dayjs';
import numeral from 'numeral';
import isObject from 'lodash/isObject';
import get from 'lodash/get';

import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DayPickerInput from 'components/common/inputs/DayPickerInput';

import useCalculationContext from 'hooks/useCalculationContext';


const RelationshipForm = () => {
  const { touched, errors, submitCount, values } = useFormikContext();

  const { type, isProfessional } = useCalculationContext();

  // If we are on create calculation step it should be open by default
  const isOpenByDefault = type === 'create';

  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  const prefix = `relationship.${type}`;

  const hasValidationError = isObject(get(errors, `${prefix}`));
  const hasFormTouched = isObject(get(touched, `${prefix}`));

  useEffect(
    () => {
      if (isOpen === false && hasValidationError === true && hasFormTouched === true) {
        setIsOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasValidationError, submitCount],
  );

  const relationship = get(values, prefix, {});

  const cohabitationDate = relationship.cohabitationDate
    ? dayjs(relationship.cohabitationDate).format('YYYY-DD-MM')
    : '-';
  const separationDate = relationship.separationDate
    ? dayjs(relationship.separationDate).format('YYYY-DD-MM')
    : '-';

  const relationshipDuration =
    numeral(
      dayjs(relationship.separationDate).diff(relationship.cohabitationDate, 'days') / 365.0,
    ).format('0.0') || 0;

  return (
    <Fragment>
      <Row noGutters className="border-top py-4 px-2 px-md-0 p-lg-4" onClick={toggle}>
        <Col sm={6} lg={5} className="col-10">
          <div className="d-flex align-items-center">
            <div className="avatar" style={{ width: '50px', height: '50px' }}>
              <img
                alt="placeholder"
                src="/canada/images/icons/dusk/png/relationship.png"
                className="img-saturate"
                height='50px'
                width='50px'
                layout="responsive"
              />
            </div>
            <div className="avatar-content">
              <h5 className="mb-0">Relationship</h5>
              <small className="d-block text-muted">{`${cohabitationDate} to ${separationDate}`}</small>
            </div>
          </div>
        </Col>

        <Col>
          <Row noGutters className="select-row justify-content-end">
            <div className="d-none d-sm-block">
              <div className="w-100 pl-3 pr-3 d-sm-none d-md-block justify-content-center">
                <h5 className="mb-0 mt-2 p-0 pb-2">{`${relationshipDuration} years`}</h5>
              </div>
            </div>

            <div className="angle-btn">
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
        <DayPickerInput
          maxDate={dayjs(relationship.separationDate || new Date()).toDate()}
          label="Date of Cohabitation"
          hint={`Enter the date ${
            isProfessional ? ' the parties ' : ' you '
          } began cohabiting (may be the same or different from marriage date).`}
          name={`${prefix}.cohabitationDate`}
          touchable
        />

        <DayPickerInput
          maxDate={new Date()}
          minDate={dayjs(relationship.cohabitationDate || new Date()).toDate()}
          label="Date of Separation"
          hint={`Enter the date ${isProfessional ? ' the parties ' : ' you '} separated.`}
          name={`${prefix}.separationDate`}
          touchable
        />
      </Collapse>
    </Fragment>
  );
};

export default RelationshipForm;
