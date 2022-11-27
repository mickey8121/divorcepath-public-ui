/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Link from 'components/common/Link';

import DonutChart from 'components/charts/DonutChart';
import SupportReportSlider from 'components/calculations/SupportReportSlider';

import toUSD from 'utils/toUSD';

const SpousalSupportRanges = ({
  agreedSpousalSupport,
  agreedSpousalSupportScenario,
  lowSpousalSupport,
  midSpousalSupport,
  highSpousalSupport,
  rangeLabels,
  instant,
}) => (
  <div>
    <h6>Spousal Support Ranges</h6>
    <p>
      The charts below show the low, mid and high range of spousal support that Person 2 may have to
      pay Person 1 according to the Spousal Support Advisory Guidelines, assuming entitlement.
    </p>
    <div className="row no-gutters text-center doughnut-row">
      {!!agreedSpousalSupport && (
        <div className="support-doughnut text-center">
          <DonutChart
            data={agreedSpousalSupportScenario}
            labels={rangeLabels}
            subtext="monthly"
            text={`${toUSD(Math.round(Math.abs(agreedSpousalSupportScenario[0])))}`}
            className="mb-4"
            instant={instant}
          />
          <span className="chart-label">Agreed Amount</span>
        </div>
      )}
      <div className="support-doughnut text-center">
        <DonutChart
          data={lowSpousalSupport}
          labels={rangeLabels}
          subtext="monthly"
          text={`${toUSD(Math.round(Math.abs(lowSpousalSupport[0])))}`}
          className="mb-4"
          instant={instant}
        />
        <span className="chart-label">Low-Range</span>
      </div>
      {!agreedSpousalSupport && (
        <div className="support-doughnut">
          <DonutChart
            data={midSpousalSupport}
            labels={rangeLabels}
            subtext="monthly"
            text={`${toUSD(Math.round(Math.abs(midSpousalSupport[0])))}`}
            instant={instant}
          />
          <span className="chart-label">Mid-Range</span>
        </div>
      )}
      <div className="support-doughnut">
        <DonutChart
          data={highSpousalSupport}
          labels={rangeLabels}
          subtext="monthly"
          text={`${toUSD(Math.round(Math.abs(highSpousalSupport[0])))}`}
          instant={instant}
        />
        <span className="chart-label">High-Range</span>
      </div>
    </div>

    <p className="mt-3">
      For more information on how spousal support ranges are set, read our{' '}
      <Link href="https://www.divorcepath.com/help/calculate-spousal-support">
        guide to spousal support
      </Link>{' '}
      or review the calculation details below.
    </p>

    <SupportReportSlider
      lowSpousalSupport={lowSpousalSupport}
      midSpousalSupport={midSpousalSupport}
      highSpousalSupport={highSpousalSupport}
    />
  </div>
);

export default SpousalSupportRanges;
