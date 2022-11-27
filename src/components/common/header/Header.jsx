import React, { useMemo } from 'react';

import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import ClientCalculatorsDropdown from 'components/common/header/ClientCalculatorsDropdown';
import CalculatorBreadcrumb from 'components/breadcrumb/CalculatorBreadcrumb';
import { CALCULATOR_TYPES } from 'components/calculations/utils/constants';

import useCalculationContext from 'hooks/useCalculationContext';

import redirectToUpgrade from 'utils/redirectToUpgrade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const { isProfessional, calculatorType } = useCalculationContext();

  const type = useMemo(() => CALCULATOR_TYPES[calculatorType?.toLowerCase()]?.name, [
    calculatorType,
  ]);

  return (
    <header className="header-account-page d-flex align-items-end client-header">
      <div className="container">
        <Row className="mb-5 mt-3 ml-0 user-info" noGutters>
          <Col xs={9}>
            <h1 className="h2 mb-0 text-white d-block">{type || `Welcome`}</h1>
            <CalculatorBreadcrumb calculatorType={calculatorType?.toLowerCase()} match />
          </Col>
        </Row>
        <Row className="button-controls client-buttons">
          <ButtonGroup className="client-button-group">
            {!isProfessional && <ClientCalculatorsDropdown isPro />}
            {isProfessional && <ClientCalculatorsDropdown isPro />}
            <Button size="sm" id="/" onClick={redirectToUpgrade}>
              <span className="btn-inner--icon">
                <FontAwesomeIcon icon="home" style={{ width: '18px', height: '16px' }} />
              </span>
              <span className="btn-inner--text d-none d-md-inline-block">
                {isProfessional ? 'Clients' : 'Home'}
              </span>
            </Button>
            <Button id="/" onClick={redirectToUpgrade}>
              <span className="btn-inner--icon">
                <FontAwesomeIcon
                  icon="arrow-alt-circle-up"
                  style={{ width: '16px', height: '16px' }}
                />
              </span>
              <span className="btn-inner--text d-none d-md-inline-block">Upgrade</span>
            </Button>
          </ButtonGroup>
        </Row>
      </div>
    </header>
  );
};

export default Header;
