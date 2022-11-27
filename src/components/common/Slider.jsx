import React, { forwardRef } from 'react';

import classnames from 'classnames';
import ReactSlider from 'react-slider';

const Slider = forwardRef(({ className, ...props }, ref) => (
  <ReactSlider
    ref={ref}
    className={classnames('slider', className)}
    thumbClassName="slider-thumb"
    trackClassName="slider-track"
    {...props}
  />
));

Slider.displayName = 'Slider';

export default Slider;
