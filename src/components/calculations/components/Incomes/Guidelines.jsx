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
import { defaultAdjustment } from 'components/calculations/utils/defaultValues';

const reducer = (acc, item) => acc + (item?.data?.userAmount || item?.userAmount || 0);

const Guidelines = ({
  prefix,
  partyType,
  loading,
  lastAddedAdjustmentIndex,
  showChildSupportResults,
}) => {
  const { values } = useFormikContext();
  const { type } = useCalculationContext();
  const { toggle } = useModalContext();

  const adjustmentsOptions = useMemo(() => allTaxTables[values.taxYear].adjustments, [
    values.taxYear,
  ]);

  const pathToAllAdjustments = useMemo(() => `${prefix}.adjustments.${type}.all.${type}`, [
    prefix,
    type,
  ]);

  const adjustments = useMemo(() => customGet(values, pathToAllAdjustments, []), [
    pathToAllAdjustments,
    values,
  ]);

  const isAdjustmentFixedOpen = useMemo(() => adjustments.length > 0, [adjustments]);

  const [isAdjustmentsOpen, setIsAdjustmentsOpen] = useState(isAdjustmentFixedOpen);

  const toggleIsAdjustments = useCallback(() => setIsAdjustmentsOpen(prev => !prev), []);

  const totalAdjustments = useMemo(
    () => customGet(values, pathToAllAdjustments, []).reduce(reducer, 0),
    [pathToAllAdjustments, values],
  );

  const handleAddAmount = useCallback(arrayHelpers => {
    arrayHelpers.push(defaultAdjustment);
  }, []);

  const csAdjustments = useMemo(
    () =>
      adjustments?.filter(i =>
        adjustmentsOptions.find(opt => opt.key === i?.data?.key && opt.child_support !== false),
      ),
    [adjustments, adjustmentsOptions],
  );

  const ssAdjustments = useMemo(
    () =>
      adjustments?.filter(i =>
        adjustmentsOptions.find(opt => opt.key === i?.data?.key && opt.spousal_support !== false),
      ),
    [adjustments, adjustmentsOptions],
  );

  // values?.[partyType]?.[type]?.income?.[type]?.all?.[type]?
  // values?.[partyType]?.[type]?.adjustments?.[type]?.all?.[type]?

  const ssGuidelineIncome = useMemo(
    () =>
      values?.[partyType]?.[type]?.income?.[type]?.all?.[type]?.reduce(
        (acc, item) => acc + parseInt(item?.data?.userAmount || item?.userAmount, 10) || 0,
        0,
      ) +
      ssAdjustments.reduce(
        (acc, item) => acc + parseInt(item?.data?.userAmount || item?.userAmount, 10) || 0,
        0,
      ),
    [values, type, partyType, ssAdjustments],
  );

  const csGuidelineIncome = useMemo(
    () =>
      values?.[partyType]?.[type]?.income?.[type]?.all?.[type]?.reduce(
        (acc, item) => acc + parseInt(item?.data?.userAmount || item?.userAmount, 10) || 0,
        0,
      ) +
      csAdjustments.reduce(
        (acc, item) => acc + parseInt(item?.data?.userAmount || item?.userAmount, 10) || 0,
        0,
      ),
    [values, type, partyType, csAdjustments],
  );

  const separateIncomes = useMemo(() => ssGuidelineIncome !== csGuidelineIncome, [
    csGuidelineIncome,
    ssGuidelineIncome,
  ]);

  const guidelineIncome = useMemo(
    () => (separateIncomes && showChildSupportResults ? csGuidelineIncome : ssGuidelineIncome),
    [showChildSupportResults, separateIncomes, ssGuidelineIncome, csGuidelineIncome],
  );

  return (
    <FieldArray name={pathToAllAdjustments}>
      {arrayHelpers => (
        <div className="border-bottom">
          <Row
            noGutters
            className="border-top mx-0 py-0 mt-4 mb-0"
            onClick={() => (isAdjustmentFixedOpen ? null : toggleIsAdjustments())}
          >
            <Col xs={11} className="pt-2">
              <strong className="text-black">Adjust Guideline Income</strong>
            </Col>
            <Col xs={1} className="btn-icon-only p-0 m-0 pr-3">
              <div className="d-flex flex-row-reverse">
                <span className="btn-inner--icon">
                  <FontAwesomeIcon
                    icon={`angle-${isAdjustmentsOpen ? 'down' : 'right'}`}
                    className="mr-2"
                  />
                </span>
              </div>
            </Col>
          </Row>

          <Collapse isOpen={isAdjustmentFixedOpen || isAdjustmentsOpen}>
            <div className="pl-3 pr-3 pb-3">
              <div className="pb-2 mb-2 border-bottom">
                <FontAwesomeIcon icon="info-circle" className="mr-2" />
                Adjustments to Line 15000 Total Income may be required to calculate support.
                Schedule III of the Child Support Guidelines lists most of the adjustments. These
                include deducting employment-related expenses, business losses, capital gains (the
                calculator handles this automatically) and other adjustments listed in the dropdown
                below. Visit the
                <a target="new" href="https://www.divorcepath.com/help">
                  {` help centre`}
                </a>
                {` for more information.`}
              </div>
              {adjustments.length > 0 ? (
                adjustments.map((adjustment, index) => (
                  <Income
                    key={`adjustments.${adjustment?.where?.id || index}`}
                    index={index}
                    amount={adjustment.data || adjustment}
                    partyType={partyType}
                    pathToAll={pathToAllAdjustments}
                    options={adjustmentsOptions}
                    fieldType="adjustments"
                    disabled={loading}
                    disableInput
                    remove={() => {
                      arrayHelpers.remove(index);
                    }}
                    open={lastAddedAdjustmentIndex === index}
                    upgradeDescription="Adjustments to Guideline Income are a premium feature. Upgrade to calculate support including guideline income adjustments."
                  />
                ))
              ) : (
                <div className="pt-3 pb-3 mb-3 border-bottom">
                  <span className="font-italic">No Adjustments Entered</span>
                </div>
              )}

              <div className="mb-2">
                &nbsp;Total Adjustments:&nbsp;
                {numeral(totalAdjustments).format('$0,0')}
              </div>

              <div>
                {separateIncomes ? (
                  <React.Fragment>
                    <div className="mb-2">
                      Child Support Guideline Income:&nbsp;
                      {numeral(csGuidelineIncome).format('$0,0')}
                    </div>
                    <div className="mb-2">
                      &nbsp;Spousal Support Guideline Income:&nbsp;
                      {numeral(ssGuidelineIncome).format('$0,0')}
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="mb-2">
                      &nbsp;Guideline Income:&nbsp;
                      {numeral(guidelineIncome).format('$0,0')}
                    </div>
                  </React.Fragment>
                )}
              </div>

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
                  New Adjustment
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

export default Guidelines;
