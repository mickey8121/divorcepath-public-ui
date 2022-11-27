import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import omit from 'lodash/omit';
import { toast } from 'react-toastify';
import { mutation } from 'gql-query-builder';
import { scroller } from 'react-scroll';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faAngleRight,
  faArrowAltCircleUp,
  faBalanceScale,
  faBook,
  faCalculator,
  faChartBar,
  faChartPie,
  faChild,
  faClock,
  faDollarSign,
  faEdit,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFilePdf,
  faHome,
  faInfoCircle,
  faMoneyBillAlt,
  faPercentage,
  faPlus,
  faSave,
  faSpinner,
  faTrash,
  faUser,
  faUserPlus,
  faUsers,
  faWindowClose,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

import { useFormik, FormikProvider } from 'formik';
import { Row, Col, Container } from 'reactstrap';

import BackgroundSection from 'components/calculations/sections/BackgroundSection';
import CalculationSection from 'components/calculations/sections/CalculationSection';
import CalculationToggleInput from 'components/calculations/components/common/CalculationToggleInput';
import ChildrenSection from 'components/calculations/sections/ChildrenSection';
import IncomeSection from 'components/calculations/sections/IncomeSection';
import Sidebar from 'components/calculations/sidebar/Sidebar';
import SupportReport from 'components/calculations/SupportReport';
import TaxBenefitsSection from 'components/calculations/sections/TaxBenefitsSection';
import getInitialValuesFromLocalStorage from 'components/calculations/utils/getInitialValuesFromLocalStorage';

import validationSchema from 'components/calculations/utils/validationSchema';
import loadInitialValues from 'components/calculations/utils/loadInitialValues';

import useCalculationContext from 'hooks/useCalculationContext';

import SUPPORT_CALCULATION_FRAGMENT from 'graphql/SUPPORT_CALCULATION_FRAGMENT';

library.add(
  faSpinner,
  faAngleDown,
  faAngleRight,
  faArrowAltCircleUp,
  faBalanceScale,
  faBook,
  faCalculator,
  faChartBar,
  faChartPie,
  faChild,
  faClock,
  faDollarSign,
  faEdit,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFilePdf,
  faHome,
  faInfoCircle,
  faMoneyBillAlt,
  faPercentage,
  faPlus,
  faSave,
  faTrash,
  faUser,
  faUserPlus,
  faUsers,
  faWindowClose,
  faFile,
);

const SupportCalculation = () => {
  const { calculatorType, isProfessional, residence } = useCalculationContext();

  const router = useRouter();

  const { state } = router.query;

  const [isChanged, setIsChanged] = useState(false);

  const [publicSupportCalculation, setPublicSupportCalculation] = useState();

  const showSpousalSupport = useMemo(() => calculatorType === 'SPOUSAL', [calculatorType]);

  const showChildSupport = useMemo(() => {
    if (calculatorType === 'CHILD') return true;

    return !!state?.hasChildren;
  }, [calculatorType, state]);

  const defaultInitialValues = useMemo(
    () =>
      loadInitialValues({
        calculatorType,
        residence,
        showChildSupport,
        isProfessional,
      }),
    [calculatorType, residence, showChildSupport, isProfessional],
  );

  const initialValues = useMemo(
    () => getInitialValuesFromLocalStorage(defaultInitialValues, calculatorType),
    [calculatorType, defaultInitialValues],
  );

  const handleSubmitForm = useCallback(
    (values, { setSubmitting, setValues, setTouched }) => {
      setSubmitting(true);

      const variables = {
        data: {
          ...omit(values, [
            'clientSupportProfile.create.federalBenefits',
            'clientSupportProfile.create.federalCredits',
            'clientSupportProfile.create.federalDeductions',
            'clientSupportProfile.create.provincialBenefits',
            'clientSupportProfile.create.provincialCredits',
            'clientSupportProfile.create.provincialDeductions',
            'exSupportProfile.create.federalBenefits',
            'exSupportProfile.create.federalCredits',
            'exSupportProfile.create.federalDeductions',
            'exSupportProfile.create.provincialBenefits',
            'exSupportProfile.create.provincialCredits',
            'exSupportProfile.create.provincialDeductions',
          ]),
        },
      };

      if (typeof document !== 'undefined') {
        localStorage.setItem(calculatorType, JSON.stringify(values));
      }

      const query = mutation({
        operation: 'startFreeSupportCalculation',
        variables: {
          data: { value: { ...variables.data }, type: 'SupportCalculationCreateInput!' },
        },
        fields: SUPPORT_CALCULATION_FRAGMENT,
      });

      fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ ...query }),
      }).then(response => {
        response
          .json()
          .then(({ data }) => {
            const mutatedCalculation = data?.startFreeSupportCalculation;

            setIsChanged(false);

            setTouched({});

            const newValues = loadInitialValues({
              isProfessional,
              supportCalculation: mutatedCalculation,
              showChildSupport: mutatedCalculation?.showChildSupport,
              calculatorType,
            });

            setValues(
              {
                ...values,
                clientSupportProfile: {
                  create: {
                    ...values.clientSupportProfile?.create,
                    federalBenefits: newValues?.clientSupportProfile?.create?.federalBenefits,
                    federalCredits: newValues?.clientSupportProfile?.create?.federalCredits,
                    federalDeductions: newValues?.clientSupportProfile?.create?.federalDeductions,

                    provincialBenefits: newValues?.clientSupportProfile?.create?.provincialBenefits,
                    provincialCredits: newValues?.clientSupportProfile?.create?.provincialCredits,
                    provincialDeductions:
                      newValues?.clientSupportProfile?.create?.provincialDeductions,
                  },
                },
                exSupportProfile: {
                  create: {
                    ...values.exSupportProfile.create,
                    federalBenefits: newValues?.exSupportProfile?.create?.federalBenefits,
                    federalCredits: newValues?.exSupportProfile?.create?.federalCredits,
                    federalDeductions: newValues?.exSupportProfile?.create?.federalDeductions,

                    provincialBenefits: newValues?.exSupportProfile?.create?.provincialBenefits,
                    provincialCredits: newValues?.exSupportProfile?.create?.provincialCredits,
                    provincialDeductions: newValues?.exSupportProfile?.create?.provincialDeductions,
                  },
                },
              },
              false,
            );

            setPublicSupportCalculation({
              ...newValues,
              calculationResult: mutatedCalculation.calculationResult,
            });
          })
          .then(() => {
            scroller.scrollTo('results', {
              duration: 2000,
              delay: 500,
              smooth: 'easeInOutQuart',
              ignoreCancelEvents: true,
            });
          })
          .catch(
            err =>
              toast.error(err.message) ||
              err.graphQLErrors?.map(({ message }) => toast.error(message)),
          )
          .finally(() => setSubmitting(false));
      });
    },
    [calculatorType, isProfessional],
  );

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(calculatorType),
    onSubmit: handleSubmitForm,
  });

  const { handleSubmit, isSubmitting, values, setValues } = formik;

  useEffect(() => {
    const stringValues = JSON.stringify(values);

    if (typeof window === 'object') localStorage.setItem(calculatorType, stringValues);
  }, [calculatorType, values]);

  useEffect(() => {
    setValues(initialValues, false);
  }, [initialValues, setValues]);

  return (
    <FormikProvider value={formik}>
      <form className="formik-container" onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col md={8} lg={9} className="col-11 calculator-main filled pl-3 overflow-hidden">
              <CalculationToggleInput />
              <CalculationSection handleSubmit={handleSubmit} initialValues={initialValues} />
              <BackgroundSection />
              <ChildrenSection />
              <IncomeSection values={values} />
              <TaxBenefitsSection
                supportCalculation={publicSupportCalculation}
                showSpousalSupport={showSpousalSupport}
              />
              <SupportReport
                showTaxes
                isChanged={isChanged}
                calculation={publicSupportCalculation}
                setIsChanged={setIsChanged}
                mutationLoading={isSubmitting}
              />
            </Col>
            <Col md={4} lg={3} className="pl-0 pr-1 calculator-sidebar col-1">
              <Sidebar
                showTaxes
                supportCalculation={publicSupportCalculation}
                isSubmitting={isSubmitting}
                setIsChanged={setIsChanged}
                isChanged={isChanged}
              />
            </Col>
          </Row>
        </Container>
      </form>
    </FormikProvider>
  );
};

export default SupportCalculation;
