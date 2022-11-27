import React, { useEffect, useMemo, useCallback } from 'react';
import { useFormikContext } from 'formik';

import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

import scrollToError from 'components/calculations/sidebar/scrollToError';

const CalculateButtons = ({ supportCalculation, setIsChanged, isChanged, sidebar = true }) => {
  const { isSubmitting, touched, values } = useFormikContext();

  useEffect(() => {
    if (Object.keys(touched).length !== 0) {
      setIsChanged(true);
    }
  }, [values, touched, setIsChanged]);

  const hasCalculationResult = useMemo(
    () => supportCalculation?.calculationResult?.spousalSupport,
    [supportCalculation],
  );

  const handleClick = useCallback(() => {
    const element =
      typeof document !== 'undefined' && document
        ? document.getElementById('generateReports')
        : null;

    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const showDwnBtn = useMemo(() => hasCalculationResult && isChanged === false, [
    hasCalculationResult,
    isChanged,
  ]);
  return (
    <div className={classnames('calculate-buttons', { 'ml-4 mb-4 mt-0': !sidebar }, { sidebar })}>
      <Button
        id="calculateButton"
        type="submit"
        onClick={() => {
          scrollToError();
        }}
        disabled={isSubmitting}
        className={classnames('preloader-btn', {
          open: !hasCalculationResult || isChanged,
        })}
      >
        <FontAwesomeIcon
          icon="spinner"
          spin={isSubmitting}
          className="mr-2"
          style={{ width: '16px', height: '16px' }}
        />
        {isSubmitting ? 'Calculating' : 'Calculate'}
      </Button>
      {showDwnBtn && (
        <Button
          id="downloadButton"
          className={classnames({ open: hasCalculationResult })}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon="file-pdf" className="mr-2" />
          Download Report
        </Button>
      )}
    </div>
  );
};

export default CalculateButtons;
