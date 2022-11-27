import React, { useCallback, useMemo } from 'react';
import numeral from 'numeral';

import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableRow = ({
  label,
  clientValue,
  exValue,
  exPercent,
  clientPercent,
  description,
  reference,
  setRow,
  index,
  activeRow,
  yearsValue,
  stringValue,
  exString,
  title,
  resultsTable
}) => {
  const isOpen = useMemo(() => activeRow === index, [activeRow, index]);
  const angle = useMemo(() => (isOpen ? 'down' : 'right'), [isOpen]);
  const isExColShow = useMemo(
    () => !!(exPercent || exPercent === 0 || exValue || exValue === 0 || exString),
    [exPercent, exValue, exString]
  );

  const isTitleRow = title !== undefined;

  const ClientValueCell = useCallback(
    () => {
      if (clientPercent) return `${(clientPercent * 100).toFixed(2)}%`;
      if (clientValue || clientValue === 0) return numeral(clientValue).format('($0,0');
      if (yearsValue) return `${yearsValue} years`;
      if (stringValue) return stringValue;

      return null;
    },
    [clientPercent, clientValue, yearsValue, stringValue]
  );

  const ExCellValue = useCallback(
    () => {
      if (exPercent) return `${(exPercent * 100).toFixed(2)}%`;
      if (exValue || exValue === 0) return numeral(exValue).format('($0,0');
      if (exString) return exString;

      return null;
    },
    [exPercent, exValue, exString]
  );

  return (
    <div className="details-table-row">
      <Row
        noGutters
        className={`${isOpen ? 'expanded' : ''}`}
        onClick={() => setRow(isOpen ? '' : index)}
      >
        {isTitleRow ? (
          <Col xs={12} className={`${isTitleRow && 'title'}`}>
            {title}
          </Col>
        ) : (
          <React.Fragment>
            <Col xs={5}>{label}</Col>

            <Col xs={isExColShow ? 3 : 6}>
              <ClientValueCell />
            </Col>

            {isExColShow && (
              <Col xs={3}>
                <ExCellValue />
              </Col>
            )}

            <Col xs={1}>
              <div className="btn-icon-only pr-3">
                <span className="btn-inner--icon">
                  <FontAwesomeIcon icon={`angle-${angle}`} />
                </span>
              </div>
            </Col>
          </React.Fragment>
        )}
      </Row>
      {!isTitleRow && (
        <Collapse isOpen={isOpen}>
          <div className="row-collapse-content">
            <FontAwesomeIcon icon="info-circle" className="mr-2" /> {description}
            {reference}
            <br />
            {resultsTable}
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default TableRow;
