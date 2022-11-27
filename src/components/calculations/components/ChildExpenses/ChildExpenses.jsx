import React, { useCallback, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';
import { Col, Collapse, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TextInput from 'components/common/inputs/TextInput';
import Button from 'components/common/Button';
import Select from 'components/common/inputs/Select/CustomSelect';
import UpgradeButton from 'components/common/UpgradeButton';
import CustomSelectContainer from 'components/common/inputs/Select/CustomSelectContainer';

import useCalculationContext from 'hooks/useCalculationContext';
import useModalContext from 'hooks/useModalContext';

import customGet from 'utils/get';
import allTaxTables from 'utils/taxTables';

const ChildExpenses = ({ index, remove, expense, pathToAllChildExpenses, open = false }) => {
  const formik = useFormikContext();
  const { isProfessional } = useCalculationContext();
  const { toggle } = useModalContext();

  const clientTitle = isProfessional ? 'Client' : 'You';
  const options = useMemo(
    () => ({
      incomes: allTaxTables[formik.values.taxYear].income,
      hardships: allTaxTables[formik.values.taxYear].hardship,
      adjustments: allTaxTables[formik.values.taxYear].adjustments,
      childExpenses: allTaxTables[formik.values.taxYear].child_expenses,
    }),
    [formik.values.taxYear],
  );

  const [ratio, setRatio] = useState(1.0);

  const pathToChildExpense = `${pathToAllChildExpenses}.${index}`;

  const pathToFloatData = floatDataIndex =>
    `${pathToChildExpense}.userInputs.create.${floatDataIndex}.floatData`;

  const keyValue = options.childExpenses.find(
    expenseOpt => expenseOpt.key === (expense?.data?.key || expense.key),
  );

  const selectValue = { value: keyValue?.key, label: keyValue?.label };

  const isOpen = useMemo(() => {
    const value = customGet(formik.values, pathToChildExpense);

    return value?.userAmount === 0 && value?.key === 'other';
  }, [formik, pathToChildExpense]);

  const [show, toggleShow] = useState(open || isOpen);

  const selectOptions = useMemo(
    () =>
      options?.childExpenses?.map(({ key, label }) => ({
        value: key,
        name: label,
      })),
    [options.childExpenses],
  );

  const angle = show ? 'down' : 'right';

  const handleRemove = useCallback(() => remove(expense?.where?.id || expense?.id), [
    expense,
    remove,
  ]);

  const handleFocus = useCallback(() => {
    toggleShow(true);
  }, []);

  const getUserInputIndex = useCallback(name => {
    if (name === 'client') return 0;

    return 1;
  }, []);

  const clientUserInput = useMemo(() => getUserInputIndex('client'), [getUserInputIndex]);
  const exUserInput = useMemo(() => getUserInputIndex('ex'), [getUserInputIndex]);

  return (
    <React.Fragment>
      <div className="children-form-row">
        <h5>
          Expense
          {index + 1}
        </h5>
        <Row className="child-expense">
          <Col sm={7} className="col-10">
            <TextInput
              name={`${pathToChildExpense}.userAmount`}
              disabled
              disabledOnClick={toggle}
              type="number"
              prepend="dollar-sign"
              onFocus={handleFocus}
              handleChange={e => {
                // trim leading 0s
                e.target.value = e.target.value.replace(/^0+/, '');
                const userAmount = parseFloat(e.target.value) || 0;
                const roundedRatio = Math.round(ratio);

                formik.setFieldValue(`${pathToChildExpense}.userAmount`, userAmount);
                formik.setFieldTouched(`${pathToChildExpense}.userAmount`);

                formik.setFieldValue(
                  pathToFloatData(clientUserInput),
                  userAmount * roundedRatio || 0,
                );
                formik.setFieldValue(
                  pathToFloatData(exUserInput),
                  userAmount - userAmount * roundedRatio || 0,
                );
              }}
            />
          </Col>
          <Col className="col-2" sm={5}>
            <Row noGutters className="select-row">
              <CustomSelectContainer
                className="calculation-select"
                classNamePrefix="calculation-select"
                name={`${pathToChildExpense}.key`}
                options={selectOptions}
                defaultValue={selectValue}
                onFocus={handleFocus}
                isPremiumOptions
              />

              <div onClick={() => toggleShow(!show)} className="px-4 py-2 angle-button">
                <span className="btn-inner--icon">
                  <FontAwesomeIcon icon={`angle-${angle}`} />
                </span>
              </div>
            </Row>
          </Col>
        </Row>
      </div>

      <Collapse className="col-md-12 col-lg-10" isOpen={show}>
        <div className="mt-3 pb-3">
          <div className="d-block d-sm-none mb-3">
            <CustomSelectContainer
              className="d-sm-none calculation-select-mobile"
              classNamePrefix="calculation-select-mobile"
              name={`${pathToChildExpense}.key`}
              options={selectOptions}
              value={selectValue}
              isPremiumOptions
            />
          </div>

          <div className="upgrade-description bg-light p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="form-text text-muted mr-2 mb-2">
                <FontAwesomeIcon icon="info-circle" className="mr-2" />
                Special child-related expenses are a premium feature. Upgrade to calculate support
                including special expenses.
              </div>
            </div>
            <UpgradeButton className="mt-2 mb-3" />
          </div>

          <div className="d-flex justify-content-between">
            <div className="form-text text-muted mr-2 mb-2">
              <FontAwesomeIcon icon="info-circle" className="mr-2" />
              {keyValue?.description}
            </div>
          </div>

          <Col xs={12} className="ml-0 mr-0 pl-0 pr-0">
            <TextInput
              label={`Amount Paid by ${clientTitle}`}
              name={pathToFloatData(clientUserInput)}
              disabled
              disabledOnClick={toggle}
              type="number"
              className="mb-0"
              prepend="dollar-sign"
              hint={`Amount initially paid by ${clientTitle.toLowerCase()} (i.e. with receipt).`}
              handleChange={e => {
                // trim leading 0s
                e.target.value = e.target.value.replace(/^0+/, '');
                const clientAmount = parseFloat(e.target.value) || 0;
                const userAmount = customGet(formik, `values.${pathToChildExpense}.userAmount`, 0);
                const roundedRatio = Math.round(ratio);

                formik.setFieldTouched(`${pathToChildExpense}.userAmount`);
                formik.setFieldTouched(pathToFloatData(clientUserInput));
                formik.setFieldTouched(pathToFloatData(exUserInput));

                if (clientAmount === userAmount) {
                  formik.setFieldValue(`${pathToChildExpense}.userAmount`, clientAmount);

                  formik.setFieldValue(pathToFloatData(clientUserInput), clientAmount || 0);
                  formik.setFieldValue(pathToFloatData(exUserInput), 0);
                }

                if (clientAmount < userAmount) {
                  formik.setFieldValue(pathToFloatData(clientUserInput), clientAmount);
                  formik.setFieldValue(pathToFloatData(exUserInput), userAmount - clientAmount);

                  setRatio((clientAmount || 1) / (userAmount || 1));
                }

                if (userAmount === 0 || clientAmount > userAmount) {
                  formik.setFieldValue(`${pathToChildExpense}.userAmount`, clientAmount);

                  formik.setFieldValue(pathToFloatData(clientUserInput), clientAmount || 0);
                  formik.setFieldValue(
                    pathToFloatData(exUserInput),
                    clientAmount - clientAmount * roundedRatio || 0,
                  );
                }
              }}
            />
          </Col>

          <Col xs={12} className="ml-0 mr-0 pl-0 pr-0">
            <TextInput
              label="Amount Paid by Ex"
              name={pathToFloatData(exUserInput)}
              disabled
              disabledOnClick={toggle}
              type="number"
              className="mb-0"
              prepend="dollar-sign"
              hint="Amount initially paid by ex (i.e. with receipt)."
              handleChange={e => {
                // trim leading 0s
                e.target.value = e.target.value.replace(/^0+/, '');
                const exAmount = parseFloat(e.target.value) || 0;
                const userAmount = customGet(formik, `values.${pathToChildExpense}.userAmount`, 0);
                const roundedRatio = Math.round(ratio);

                formik.setFieldTouched(`${pathToChildExpense}.userAmount`);
                formik.setFieldTouched(pathToFloatData(exUserInput));
                formik.setFieldTouched(pathToFloatData(clientUserInput));

                if (exAmount === userAmount) {
                  formik.setFieldValue(`${pathToChildExpense}.userAmount`, exAmount);
                  formik.setFieldValue(pathToFloatData(clientUserInput), 0);
                  formik.setFieldValue(pathToFloatData(exUserInput), exAmount || 0);
                }

                if (exAmount < userAmount) {
                  formik.setFieldValue(pathToFloatData(exUserInput), exAmount);
                  formik.setFieldValue(pathToFloatData(clientUserInput), userAmount - exAmount);

                  setRatio((userAmount - exAmount) / userAmount);
                }

                if (userAmount === 0 || exAmount > userAmount) {
                  formik.setFieldValue(`${pathToChildExpense}.userAmount`, exAmount);

                  formik.setFieldValue(
                    pathToFloatData(clientUserInput),
                    exAmount - exAmount * roundedRatio || 0,
                  );
                  formik.setFieldValue(pathToFloatData(exUserInput), exAmount || 0);
                }
              }}
            />
          </Col>

          <div className="d-flex justify-content-between">
            <div className="form-text text-muted mb-2">
              <FontAwesomeIcon icon="info-circle" className="mr-2" />
              Typically one parent will pay the entire amount up front. Read about special expenses
              to learn more.
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <Button
              size="sm"
              color="transparent"
              onClick={handleRemove}
              className="p3 text-danger cursor-pointer"
            >
              <small>
                <FontAwesomeIcon
                  icon="trash"
                  className="mr-2"
                  style={{ width: '11.188px', height: '12.797px' }}
                />
                Delete
              </small>
            </Button>
          </div>
        </div>
      </Collapse>
    </React.Fragment>
  );
};

export default ChildExpenses;
