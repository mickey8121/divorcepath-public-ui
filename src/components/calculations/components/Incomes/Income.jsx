/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';

import classnames from 'classnames';

import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import CloseButton from 'components/common/CloseButton';
import TextInputComponent from 'components/common/inputs/TextInput';
import UpgradeButton from 'components/common/UpgradeButton';
import CustomSelectContainer from 'components/common/inputs/Select/CustomSelectContainer';

import useModalContext from 'hooks/useModalContext';
import usePrevious from 'hooks/usePrevious';

import {
  defaultAdjustment,
  defaultHardship,
  defaultIncome,
  freeIncomeOptions,
} from 'components/calculations/utils/defaultValues';

const freeIncomeOptionsKeys = freeIncomeOptions?.map(opt => opt?.key);

const Income = ({
  options,
  pathToAll,
  index,
  amount,
  remove,
  open,
  disabled = false,
  disableInput,
  upgradeDescription = 'Income types other than T4 Employment income are a premium feature. Upgrade to calculate support with other income types.',
}) => {
  const { setFieldValue, setFieldTouched, isSubmitting } = useFormikContext();
  const { toggle: toggleModal, isOpen: modalIsOpen } = useModalContext();
  const [isPremium, setIsPremium] = useState(false);
  const prev = usePrevious(modalIsOpen);

  const isEmpty = useMemo(() => {
    if (amount?.userAmount === 0 && amount?.amount === 0) {
      return [defaultIncome.key, defaultAdjustment.key, defaultHardship.key].includes(amount?.key);
    }

    return false;
  }, [amount]);

  const [enabled, setEnabled] = useState(true);
  const [isOpen, setIsOpen] = useState(open || isEmpty);

  const choosenAmount = useMemo(() => options?.find(option => option.key === amount.key), [
    amount.key,
    options,
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      if (mediaQuery.matches) setEnabled(false);

      const handleScreen = e => {
        if (e?.matches) setEnabled(false);
        else setEnabled(true);
      };

      mediaQuery.addListener(handleScreen);

      return () => mediaQuery.removeListener(handleScreen);
    }
  }, []);

  const optionsArray = useMemo(
    () =>
      options.map(({ key, label, disabled }) => ({
        value: key,
        name: label,
        isDisabled: disabled,
      })),
    [options],
  );

  const selectName = useMemo(() => `${pathToAll}.${index}.key`, [pathToAll, index]);

  const inputName = useMemo(() => `${pathToAll}.${index}.userAmount`, [pathToAll, index]);

  const setAmountType = useCallback(
    newIncome => {
      // called by select function for amount type select input at top of modal
      // set state to the defaults for the amount type selected by user
      if (newIncome.value === amount.key) return;

      const isPremium = !freeIncomeOptionsKeys.includes(newIncome.value);

      if (isPremium) toggleModal();

      setIsPremium(isPremium);

      const setIncome = options.find(opt => opt.key === newIncome.value);
      const userAmount = isPremium
        ? 0
        : setIncome?.sign === 'negative'
        ? amount?.userAmount > 0
          ? amount?.userAmount * -1
          : amount?.userAmount
        : amount?.userAmount < 0
        ? amount?.userAmount * -1
        : amount?.userAmount;

      setFieldValue(inputName, userAmount);
      setFieldValue(selectName, newIncome?.value);
      setFieldTouched(pathToAll, true);
    },
    [
      amount.key,
      amount.userAmount,
      toggleModal,
      options,
      setFieldValue,
      inputName,
      selectName,
      setFieldTouched,
      pathToAll,
    ],
  );

  const toggle = useCallback(() => disabled === false && setIsOpen(prev => !prev), [disabled]);

  const isValueNegative = useMemo(() => choosenAmount?.sign === 'negative', [choosenAmount]);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleBlur = useCallback(() => {
    if (enabled) {
      setIsOpen(false);
    }
  }, [enabled]);

  const isGrossUp = useMemo(() => choosenAmount?.key?.includes('gross_up'), [choosenAmount]);
  const isDisabled = useMemo(() => choosenAmount?.disabled === true, [choosenAmount]);

  const name = useMemo(() => (isGrossUp ? inputName.replace('userAmount', 'amount') : inputName), [
    inputName,
    isGrossUp,
  ]);

  useEffect(() => {
    if (prev !== modalIsOpen) setIsOpen(true);
  }, [modalIsOpen, prev]);

  return (
    <div className="income-item">
      <Row>
        <Col sm={5} lg={7} className="col-10">
          <TextInputComponent
            name={name}
            type="number"
            isValueNegative={isValueNegative}
            prepend="dollar-sign"
            disabled={
              isPremium || disabled || isSubmitting || isGrossUp || isDisabled || disableInput
            }
            disabledOnClick={!(isSubmitting || isGrossUp || isDisabled) && toggleModal}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Col>

        <Col lg={5} className="col">
          <Row noGutters className="select-row">
            <CustomSelectContainer
              name={selectName}
              className={classnames('calculation-select', {
                disabled: disabled || isGrossUp || isDisabled,
              })}
              classNamePrefix="calculation-select"
              options={optionsArray}
              defaultValue={choosenAmount}
              disabled={disabled || isGrossUp || isDisabled}
              handleChange={setAmountType}
              onFocus={handleFocus}
              onBlur={handleBlur}
              freeOptionsKeys={freeIncomeOptionsKeys}
            />

            <div onClick={toggle} className="angle-btn">
              <span className="btn-inner--icon">
                <FontAwesomeIcon
                  icon={`angle-${isOpen ? 'down' : 'right'}`}
                  className="mr-2"
                  style={{ width: '10px', height: '16px' }}
                />
              </span>
            </div>
          </Row>
        </Col>
      </Row>

      <Collapse isOpen={isOpen}>
        <div className="pb-3">
          <CustomSelectContainer
            name={selectName}
            className="d-sm-none calculation-select-mobile"
            classNamePrefix="calculation-select-mobile"
            isDisabled={isSubmitting || disabled || isDisabled}
            options={optionsArray}
            defaultValue={choosenAmount}
            handleChange={setAmountType}
            freeOptionsKeys={freeIncomeOptionsKeys}
          />

          {choosenAmount?.description && (
            <div className="form-text text-muted mb-2">
              <FontAwesomeIcon
                icon="info-circle"
                className="mr-2"
                style={{ width: '16px', height: '16px' }}
              />
              {choosenAmount?.description}
            </div>
          )}

          {isPremium && (
            <div className="upgrade-description bg-light p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="form-text text-muted mr-2 mb-2">
                  <FontAwesomeIcon icon="info-circle" className="mr-2" />
                  {upgradeDescription}
                </div>
              </div>
              <UpgradeButton className="mt-2 mb-3" />
            </div>
          )}

          <div className="d-flex justify-content-between">
            <Button
              size="sm"
              className="text-danger small"
              onClick={remove}
              color="transparent"
              disabled={disabled}
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
        </div>
      </Collapse>
    </div>
  );
};

export default Income;
