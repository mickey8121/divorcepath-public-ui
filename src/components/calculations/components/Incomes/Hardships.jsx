import React, { useCallback, useMemo, useState } from 'react';
import numeral from 'numeral';

import { FieldArray, useFormikContext } from 'formik';
import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import Income from 'components/calculations/components/Incomes/Income';

import useCalculationContext from 'hooks/useCalculationContext';
import useModalContext from 'hooks/useModalContext';

import customGet from 'utils/get';
import allTaxTables from 'utils/taxTables';

import { defaultHardship } from 'components/calculations/utils/defaultValues';

const reducer = (acc, item) => acc + (item?.data?.userAmount || item?.userAmount || 0);

const Hardships = ({ prefix, partyType, loading, lastAddedHardshipIndex }) => {
  const { values } = useFormikContext();
  const { type } = useCalculationContext();
  const { toggle } = useModalContext();

  const hardshipOptions = useMemo(() => allTaxTables[values.taxYear].hardship, [values.taxYear]);

  const pathToAllHardship = useMemo(() => `${prefix}.hardship.${type}.all.${type}`, [type, prefix]);

  const hardships = useMemo(() => customGet(values, pathToAllHardship, []), [
    values,
    pathToAllHardship,
  ]);

  const isHardshipFixedOpen = useMemo(() => hardships.length > 0, [hardships]);

  const [isHardshipOpen, setIsHardshipOpen] = useState(isHardshipFixedOpen);

  const totalHardships = useMemo(
    () => customGet(values, pathToAllHardship, []).reduce(reducer, 0),
    [pathToAllHardship, values],
  );

  const displayValue = useMemo(
    () => `Undue Hardship Claim: ${numeral(totalHardships).format('$0,0')}`,
    [totalHardships],
  );

  const toggleIsHardship = useCallback(() => setIsHardshipOpen(prev => !prev), []);
  const handleAddAmount = useCallback(arrayHelpers => {
    arrayHelpers.push(defaultHardship);
  }, []);

  return (
    <FieldArray name={pathToAllHardship}>
      {arrayHelpers => (
        <div className="border-bottom">
          <Row noGutters onClick={() => (isHardshipFixedOpen ? null : toggleIsHardship())}>
            <Col xs={11} className="pt-2">
              <strong className="text-black">Claim Undue Hardship</strong>
            </Col>
            <Col xs={1} className="btn-icon-only p-0 m-0 pr-3">
              <div className="d-flex flex-row-reverse">
                <span className="btn-inner--icon">
                  <FontAwesomeIcon
                    icon={`angle-${isHardshipOpen ? 'down' : 'right'}`}
                    className="mr-2"
                  />
                </span>
              </div>
            </Col>
          </Row>

          <Collapse isOpen={isHardshipFixedOpen || isHardshipOpen}>
            <div className="pl-3 pr-3 pb-3">
              <div className="pb-2">
                Enter undue hardship claims below. For more information on when and how to claim
                undue hardship, visit the
                <a target="new" href="https://www.divorcepath.com/help">
                  {' '}
                  help centre
                </a>
                .
              </div>
              {hardships.map((hardship, index) => (
                <Income
                  key={`hardship.${hardship?.where?.id || index}`}
                  index={index}
                  amount={hardship.data || hardship}
                  partyType={partyType}
                  pathToAll={pathToAllHardship}
                  fieldType="hardship"
                  options={hardshipOptions}
                  disableInput
                  remove={() => {
                    arrayHelpers.remove(index);
                  }}
                  open={lastAddedHardshipIndex === index}
                  upgradeDescription="Undue Hardship claims are a premium feature. Upgrade to calculate support including undue hardship claims."
                />
              ))}
              <div>{displayValue}</div>

              <Button
                size="md"
                color="secondary"
                className="mt-3"
                disabled={loading}
                onClick={() => {
                  toggle();
                  handleAddAmount(arrayHelpers);
                }}
              >
                <span className="btn-inner--text">
                  New Hardship Claim
                  <FontAwesomeIcon icon="plus" className="ml-2" />
                </span>
              </Button>
            </div>
          </Collapse>
        </div>
      )}
    </FieldArray>
  );
};

export default Hardships;
