import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';

import { Input } from 'reactstrap';
import classnames from 'classnames';

import Button from 'components/common/Button';
import Slider from 'components/common/Slider';

import useCalculationContext from 'hooks/useCalculationContext';

import toUSD from 'utils/toUSD';
import useModalContext from 'hooks/useModalContext';

const SupportReportSlider = ({ lowSpousalSupport, midSpousalSupport, highSpousalSupport }) => {
  const { supportCalculation } = useCalculationContext();
  const [isCriticalWidth, setIsCriticalWidth] = useState(0);
  const [markWidth, setMarkWidth] = useState(0);
  const trackRef = useRef();
  const markRef = useRef();
  const { toggle } = useModalContext();

  const { low, mid, high } = useMemo(
    () => ({ low: lowSpousalSupport[0], mid: midSpousalSupport[0], high: highSpousalSupport[0] }),
    [highSpousalSupport, lowSpousalSupport, midSpousalSupport],
  );
  const defaultValue = useMemo(
    () =>
      supportCalculation?.agreedSpousalSupport > -1
        ? supportCalculation?.agreedSpousalSupport
        : mid,
    [mid, supportCalculation],
  );

  const [value, setValue] = useState(defaultValue);

  const minRange = useMemo(() => Math.round(low - low * 0.2), [low]);
  const maxRange = useMemo(() => Math.round(high + high * 0.2), [high]);

  const proposalText = useMemo(() => {
    if (value < mid) return 'low';

    if (value < high) return 'middle';

    return 'high';
  }, [high, mid, value]);

  const marks = useMemo(() => [low, mid, high], [high, low, mid]);

  const inputValue = useMemo(() => toUSD(value), [value]);

  const handleSliderChange = useCallback(sliderValue => setValue(sliderValue), []);

  const handleResetButtonClick = useCallback(() => setValue(mid), [mid]);

  const handleInputChange = useCallback(event => {
    const parsedValue = parseInt(event.target.value?.match(/\d/g)?.join(''), 10);

    setValue(parsedValue || 0);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (value > maxRange) setValue(maxRange);

    if (value < minRange) setValue(minRange);
  }, [maxRange, minRange, value]);

  const compareText = useMemo(
    () =>
      `Upgrade your account to compare $${value} in monthly spousal support to the guideline range.`,
    [value],
  );

  const getMarkText = useCallback(
    key => {
      switch (key) {
        case low:
          return isCriticalWidth ? '(L)' : `$${low} (L)`;

        case mid:
          return isCriticalWidth ? '(M)' : `$${mid} (M)`;

        default:
          return isCriticalWidth ? '(H)' : `$${high} (H)`;
      }
    },
    [high, low, mid, isCriticalWidth],
  );

  const handleMouseDown = useCallback((event, key) => {
    event.stopPropagation();

    setValue(key);
  }, []);

  const CustomMark = useCallback(
    props => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <span {...props} onMouseDown={event => handleMouseDown(event, props.key)} ref={markRef}>
        {getMarkText(props.key)}
      </span>
    ),
    [getMarkText, handleMouseDown],
  );

  const handleResize = useCallback(() => {
    const track = trackRef.current;

    // The variable "criticalWidth" is needed to determine when to reduce the text of the marks
    // so that it does not overlap each other. The number 5.8 was obtained experimentally and
    // allows to remove excess text in time.
    setIsCriticalWidth(track?.state.sliderLength < markWidth * 5.8);
  }, [markWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const startMarkWidth = markRef.current?.getBoundingClientRect().width;

    setMarkWidth(startMarkWidth);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  return (
    <div className="spousal-slider">
      <h6>Negotiate Support</h6>
      <p>Negotiate support by comparing your proposal to the guideline range.</p>
      <div className="spousal-slider-container">
        <div className="d-flex flex-column align-items-center">
          <p className="text-muted mb-1">Your Proposal</p>
          <h6 className="h2 font-weight-bold mb-0">
            <Input
              className="currency-input"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </h6>
          <p className="neutral-300">
            {proposalText}
            -range (
            <a
              href="https://www.divorcepath.com/help/spousal-support-quickstart#toc-review-your-results"
              target="_blank"
              rel="noopener noreferrer"
            >
              more info
            </a>
            )
          </p>
        </div>

        <Slider
          marks={marks}
          min={minRange}
          max={maxRange}
          onChange={handleSliderChange}
          value={value}
          onAfterChange={toggle}
          renderMark={CustomMark}
          ref={trackRef}
          className={classnames({ shorted: isCriticalWidth })}
        />
      </div>

      <div className="collapse-body">
        <p>{compareText}</p>
        <div className="btn-container">
          <Button onClick={toggle} disabled={value === defaultValue}>
            Upgrade
          </Button>
          {value !== mid && (
            <button type="button" className="btn btn-default" onClick={handleResetButtonClick}>
              Reset ranges
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportReportSlider;
