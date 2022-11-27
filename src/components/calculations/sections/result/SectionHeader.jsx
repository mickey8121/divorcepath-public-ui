import React from 'react';
import classnames from 'classnames';


const SectionHeader = ({ id, src, title, subtitle, bordered = true }) => (
  <div
    className={classnames('row no-gutters ml-1 mr-1 pt-4 pb-0 mb-4', { 'border-top': bordered })}
    id={id}
  >
    <div className="col-12 align-items-justify mb-2 pl-1">
      <div className="d-flex align-items-center">
        <div className="avatar">
          <div className="img-saturate">
            <img alt="placeholder" src={src} width='50px' height='50px' />
          </div>
        </div>
        <div className="avatar-content">
          <h5 className="mb-0">{title}</h5>
          <small className="d-block text-muted">{subtitle}</small>
        </div>
      </div>
    </div>
  </div>
);

export default SectionHeader;
