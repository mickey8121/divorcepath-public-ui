import React, { useMemo } from 'react';
import Link from 'next/link';

import { CALCULATOR_TYPES } from 'components/calculations/utils/constants';

const CalculatorBreadcrumb = ({ calculatorType }) => {
  const type = useMemo(() => CALCULATOR_TYPES[calculatorType], [calculatorType]);

  return (
    <div className="breadcrumb custom-breadcrumb">
      <div className="breadcrumb-item">
        <a href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-up`}>Home</a>
      </div>
      <div className="breadcrumb-item">
        <Link href={`/${type.path}`}>{type.name}</Link>
      </div>
    </div>
  );
};

export default CalculatorBreadcrumb;
