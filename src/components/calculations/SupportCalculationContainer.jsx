import React, { useMemo, useState, useCallback } from 'react';

import Head from 'next/head';

import SupportCalculation from 'components/calculations/SupportCalculation';
import Layout from 'layout/Layout';

import CalculationContextProvider from 'context/CalculationContext/CalculationContextProvider';

import ModalContainer from 'components/modals/ModalContainer';
import UpgradePlanModal from 'components/modals/upgrade/UpgradePlanModal';

const url = typeof document !== 'undefined' ? new URL(window.location.href) : null;
const residence = url?.searchParams.get('residence');

const ContainerWithContext = ({ calculatorType }) => {
  const [isProfessional, setIsProfessional] = useState(null);

  const personPronoun = useMemo(
    () =>
      isProfessional
        ? { you: ' client ', your: ' your client ' }
        : { you: ' you ', your: ' your ' },
    [isProfessional],
  );

  const pageTitle = useMemo(
    () =>
      calculatorType === 'SPOUSAL'
        ? '[2022] Spousal Support Calculator - Divorcepath.ca'
        : '[2022] Child Support Calculator - Divorcepath.ca',
    [calculatorType],
  );

  const pageDescription = useMemo(
    () =>
      calculatorType === 'SPOUSAL'
        ? 'Calculate spousal support and save a courtroom-ready support report. Easy-to-use professional support calculator.'
        : 'Calculate child support and create a report for court or mediation. Run your own support calculations and save legal fees.',
    [calculatorType],
  );

  const pageUrl = useMemo(
    () =>
      calculatorType === 'SPOUSAL' ? 'spousal-support-calculator' : 'child-support-calculator',
    [calculatorType],
  );

  const handleCalcCheckboxChange = useCallback(
    () =>
      setIsProfessional(prev => {
        if (typeof document !== 'undefined') {
          localStorage.setItem('isProfessional', !prev);

          return !prev;
        }

        return null;
      }),
    [],
  );

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/canada/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/canada/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/canada/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/canada/images/favicon-16x16.png" />
        <link rel="canonical" href={`https://www.divorcepath.com/canada/${pageUrl}/`} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="description" content={pageDescription} />
        <title>{pageTitle}</title>
      </Head>
      <CalculationContextProvider
        value={{
          residence,
          type: 'create',
          isProfessional,
          calculatorType,
          handleCalcCheckboxChange,
          personPronoun,
        }}
      >
        <Layout>
          <ModalContainer>
            <SupportCalculation />
            <UpgradePlanModal />
          </ModalContainer>
        </Layout>
      </CalculationContextProvider>
    </React.Fragment>
  );
};

export default ContainerWithContext;
