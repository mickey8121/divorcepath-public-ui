/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';

const SidebarTimelineItem = ({ id, index, color, title, children, current, noLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="custom-timeline">
      <div
        className={classNames('timeline-item my-0 pb-4', { link: !noLink })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseLeave}
      >
        <a href={id}>
          <span
            className={classNames(
              `custom-timeline-step bg-${color} border-${color} text-white custom-timeline-step-hover-${color}`,
              {
                [`custom-timeline-step-shadow-${color}`]: id.includes(current) || isHovered,
              },
            )}
          >
            {index}
          </span>
          {!noLink && (
            <div className={classNames('timeline-item-content', { underline: isHovered })}>
              <h6
                className={classNames('text-sm mb-1', {
                  underline: id.includes(current),
                })}
              >
                {title}
              </h6>

              {children}
            </div>
          )}
        </a>
        {noLink && (
          <div className="timeline-item-content">
            <h6 className={classNames('text-sm mb-1', { underline: isHovered || current === id })}>
              <Link href={id}>{title}</Link>
            </h6>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default SidebarTimelineItem;
