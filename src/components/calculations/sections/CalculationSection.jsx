/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useState } from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CloseButton from 'components/common/CloseButton';
import TextInput from 'components/common/inputs/TextInput';

import CardHeader from 'components/calculations/components/CardHeader';
import OptionsForm from 'components/calculations/components/OptionsForm';
import SaveCalculationButton from 'components/calculations/components/SaveCalculationButton';

import useCalculationContext from 'hooks/useCalculationContext';


const CalculationSection = ({ handleSubmit, initialValues }) => {
  const { calculatorType, personPronoun } = useCalculationContext();

  const [isOpen, toggleOpen] = useState(false);

  const toggle = useCallback(() => toggleOpen(prev => !prev), []);

  return (
    <div>
      <div className="calculator-section-container" id="calculation">
        <CardHeader src="/canada/images/icons/dusk/png/client-base.png" text="1. Calculation" />
        <div className="calculator-section">
          <div className="ml-3 mr-2">
            {calculatorType === 'CHILD' ? (
              <React.Fragment>
                <p>
                  Use this free calculator to calculate child support according to the Canadian
                  Child Support Guidelines. Simply enter
                  {personPronoun.your} information in the form below and click the
                  &quot;calculate&quot; button to view the support calculation.
                </p>
                <p>
                  To calculate spousal support & child support together, use the
                  <Link href="/spousal-support-calculator">
                    &nbsp;child & spousal support calculator
                  </Link>
                  .
                </p>
                <p>
                  For more information on how to correctly calculate child support and the relevant
                  legal issues, visit the
                  <a
                    target="new"
                    href="https://www.divorcepath.com/help-center-categories/child-support"
                  >
                    &nbsp;child support help center
                  </a>
                  .
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Use this free calculator to calculate spousal support according to the Canadian
                  Spousal Support Advisory Guidelines, as well as child support (if applicable).
                  Simply enter {personPronoun.your} information in the form below and click the
                  &quot;calculate&quot; button to view
                  {personPronoun.your} support calculation.
                </p>
                <p>
                  To calculate child support without spousal support, use the
                  <Link href="/">&nbsp;child support calculator</Link>.
                </p>
                <p>
                  For more information on how to correctly calculate spousal support and the
                  relevant legal issues, visit the
                  <a
                    target="help"
                    href="https://www.divorcepath.com/help-center-categories/spousal-support"
                  >
                    &nbsp;spousal support help center
                  </a>
                  .
                </p>
              </React.Fragment>
            )}
          </div>

          <React.Fragment>
            <Row noGutters className="border-top py-4 pl-2" onClick={toggle}>
              <Col sm={10} lg={5} className="col-10">
                <div className="d-flex align-items-center">
                  <span className="avatar">
                    <img
                      alt="placeholder"
                      src="/canada/images/icons/dusk/png/icons8-save-64.png"
                      className="img-saturate"
                      height="50px"
                      width="50px"
                    />
                  </span>
                  <div className="avatar-content" id="savedCalculationsRow">
                    <h5 className="mb-0 d-none d-lg-block">Saved Calculations</h5>
                    <h6 className="mb-0 d-block d-lg-none">Saved Calculations</h6>
                    <small className="d-block text-muted">Save & edit calculations</small>
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

            <Collapse isOpen={isOpen} className="w-100 calculations-list">
              <div className="pl-2">
                <h6>Calculation Title</h6>

                <p>
                  Name your calculation something descriptive (i.e. &quot;High Income Support&quot;
                  or &quot;Shared Parenting Support&quot;).
                </p>

                <div className="calculation-title-row two-btn">
                  <div className="input-title-container">
                    <TextInput name="title" placeholder="Title" touchable />
                    <SaveCalculationButton
                      handleSubmit={handleSubmit}
                      initialValues={initialValues}
                    />
                  </div>
                  <div className="buttons">
                    <SaveCalculationButton
                      handleSubmit={handleSubmit}
                      initialValues={initialValues}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <CloseButton toggle={toggle}>Close</CloseButton>
              </div>
            </Collapse>
          </React.Fragment>
          <OptionsForm />
        </div>
      </div>
    </div>
  );
};

export default CalculationSection;
