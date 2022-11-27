import React from 'react';
import { Row, Col, Collapse } from 'reactstrap';

import { startCase } from 'lodash';
import { useFormikContext } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CloseButton from 'components/common/CloseButton';
import Select from 'components/common/inputs/Select/CustomSelect';
import RemoveButton from 'components/calculations/components/common/RemoveButton';
import UpgradeButton from 'components/common/UpgradeButton';

import formatAmountKey from 'components/calculations/utils/formatAmountKey';

const PublicAmountModal = ({
  show,
  toggleActiveRow,
  displayedValue,
  amountLabel,
  index,
  selectValue,
  formattedFieldType,
  pathToAllAmount,
  selectOptions,
  fieldType,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className="amount-table-row">
      <Row
        noGutters
        className={`${show[index] ? 'activerow' : 'amountrow'}`}
        onClick={() => {
          toggleActiveRow(prev => ({ ...prev, [index]: !prev[index] }));
        }}
      >
        <Col xs={3} sm={4}>
          {displayedValue}
        </Col>

        <Col xs={8} sm={7}>
          <div className="text-truncate">{amountLabel}</div>
        </Col>
        <Col sm={1} className="col-1">
          <span className="btn-inner--icon">
            <FontAwesomeIcon icon={`angle-${show[index] ? 'down' : 'right'}`} />
          </span>
        </Col>
      </Row>

      <Collapse isOpen={show[index]}>
        <Col sm={12} md={{ size: 7, offset: 4 }} className="pl-0 pt-3 pb-3">
          <p className="p-3 mb-3 d-flex flex-column align-items-start bg-light">
            <span>
              <FontAwesomeIcon icon="info-circle" className="mr-2" />
              {`Upgrade to edit benefits, credits & deductions. `}
            </span>
            <UpgradeButton size="sm" className="d-inline-block my-2" />
          </p>

          <div className="mb-3">
            <strong>{`${startCase(formattedFieldType)} Type`}</strong>
            <Select
              value={selectValue.value}
              disabled
              name={`${pathToAllAmount}.${index}.data.key`}
              options={
                selectValue && selectValue.value !== 'default_benefit'
                  ? [...selectOptions, selectValue]
                  : selectOptions
              }
              handleChange={({ value }) => {
                setFieldValue(`${pathToAllAmount}.${index}.data.key`, value);
              }}
            />
            <small className="form-text text-muted">
              {`Select the ${startCase(formattedFieldType)} type. Each ${startCase(
                formattedFieldType,
              )} can only be claimed once, so if you don't see it in the list of options it might already be claimed.`}
            </small>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <RemoveButton />
            <CloseButton
              toggle={() => toggleActiveRow(prev => ({ ...prev, [index]: !prev[index] }))}
            >
              {`Close ${formatAmountKey(fieldType)}`}
            </CloseButton>
          </div>
        </Col>
      </Collapse>
    </div>
  );
};

export default PublicAmountModal;
