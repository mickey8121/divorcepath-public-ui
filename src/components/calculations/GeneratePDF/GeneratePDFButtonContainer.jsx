/* eslint-disable no-negated-condition */
import React, { useState, useMemo } from 'react';

import Select from 'react-select';

import GeneratePDFButton from 'components/calculations/GeneratePDF/GeneratePDFButton';
import { reportTypes } from 'components/calculations/utils/constants';
import { customStyles } from 'components/calculations/GeneratePDF/styles';

import useModalContext from 'hooks/useModalContext';

const GeneratePDFButtonContainer = () => {
  const [reportType, setReportType] = useState('detailed');
  const { toggle } = useModalContext();

  // use calculationId from props when provided, e.g. when this component displayed in the previous calculations list
  // otherwise get calculationId from params

  const reportByReportType = useMemo(() => reportTypes[reportType] || {}, [reportType]);

  return (
    <div className="generate-pdf row no-gutters m-0 my-2">
      <div>
        <div className="report-type-img d-none d-sm-inline">
          <img
            src={reportByReportType.thumbnail}
            alt={reportByReportType.title}
            width="200px"
            height="238px"
          />
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-auto">
            <div className="form-group custom-input select-input w-80">
              <Select
                className="mr-2 custom-select-input"
                styles={customStyles}
                options={[
                  { value: 'detailed', label: 'Detailed Report' },
                  { value: 'condensed', label: 'Condensed Report' },
                ]}
                defaultValue={reportTypes.detailed}
                onChange={({ value }) => setReportType(value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-auto">
            <GeneratePDFButton text="Upgrade" handleClick={toggle} />
          </div>
        </div>
        <div className="recalculation-requirement-alert mt-2 font-italic small">
          To be able to create a report, you need to save calculation or enter the correct client
          name, and then calculate
        </div>
        <div className="col-12 mt-3">
          <h6>{reportByReportType.title}</h6>
          <p>{reportByReportType.description}</p>
          <React.Fragment>
            <p>Upgrade to generate a custom report.</p>
            <p>
              <a href={reportByReportType.sample} target="sample_report">
                View Sample Report
              </a>
            </p>
          </React.Fragment>
        </div>
        <div className="report-type-img d-inline d-sm-none">
          <img
            src={reportByReportType.thumbnail}
            alt={reportByReportType.title}
            width="200px"
            height="238px"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratePDFButtonContainer;
