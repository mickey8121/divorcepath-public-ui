/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
import React, { useMemo } from 'react';

import loadable from '@loadable/component';

import { Element } from 'react-scroll';
import CardHeader from 'components/calculations/components/CardHeader';
import CalculateButtons from 'components/calculations/CalculateButtons';

import useCalculationContext from 'hooks/useCalculationContext';

const ResultSection = loadable(() =>
  import('components/calculations/sections/result/ResultSection'),
);

const SupportReport = ({ mutationLoading, isChanged, calculation, setIsChanged, showTaxes }) => {
  const isCalculated = !!calculation?.calculationResult;

  const resultsSectionCount = useMemo(() => (showTaxes ? 6 : 5), [showTaxes]);

  const { personPronoun } = useCalculationContext();

  return (
    <Element name="results">
      <div
        className={`calculator-section-container ${mutationLoading ? 'loading' : ''}`}
        id="results"
      >
        <CardHeader
          src="/canada/images/icons/dusk/png/account.png"
          text={`${resultsSectionCount}. Results`}
        />

        {(!isCalculated || isChanged) && (
          <React.Fragment>
            <div className="p-4">
              Click the &quot;calculate&quot; button to run the calculation and view{' '}
              {personPronoun.your}
              results. By clicking &quot;Calculate&quot; you confirm that you have reviewed and
              accepted the
              <a href="https://www.divorcepath.com/terms" target="_blank" rel="noreferrer">
                &nbsp;terms of use
              </a>{' '}
              and
              <a href="https://www.divorcepath.com/privacy" target="_blank" rel="noreferrer">
                &nbsp;privacy policy
              </a>
              .
            </div>
            <CalculateButtons
              supportCalculation={calculation}
              setIsChanged={setIsChanged}
              isChanged={isChanged}
              sidebar={false}
            />
            <p className="ml-4">
              For more information on how support is calculated, visit the
              <a href="https://www.divorcepath.com/help" target="_blank" rel="noreferrer">
                &nbsp;help centre
              </a>
              .
            </p>
          </React.Fragment>
        )}

        {isCalculated && !isChanged && (
          <div id="results">
            <ResultSection supportCalculation={calculation} showTaxes={showTaxes} />
          </div>
        )}
      </div>
    </Element>
  );
};

export default SupportReport;
