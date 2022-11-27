/* eslint-disable indent */
import React, { useMemo } from 'react';

import classNames from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import getChildSupportType from 'components/calculations/utils/getChildSupportType';

const ChildSupportType = ({ child, abridged }) => {
  const type = useMemo(() => getChildSupportType(child), [child]);

  const typeText = useMemo(() => (abridged ? type?.slice(0, 1).toUpperCase() : type), [
    abridged,
    type,
  ]);

  const tooltipText = useMemo(() => {
    switch (type) {
      case 'none':
        return 'No child support for this child';

      case 'other':
        return 'Other child support amount specified';

      case 'special':
        return 'Section 7 expense support only';

      default:
        return 'Guideline child support will be calculated';
    }
  }, [type]);

  return (
    <OverlayTrigger
      overlay={
        <Tooltip id="tooltip-top">
          <p className="mb-0">{tooltipText}</p>
        </Tooltip>
      }
    >
      <small className={classNames('child-support-type', { 'text-muted': abridged })}>
        {typeText}
      </small>
    </OverlayTrigger>
  );
};

export default ChildSupportType;
