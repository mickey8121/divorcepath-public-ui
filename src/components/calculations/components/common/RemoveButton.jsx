import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RemoveButton = ({ remove, entityName }) => (
  <div onClick={remove} className="p3 text-danger cursor-pointer">
    <small>
      <FontAwesomeIcon
        icon="trash"
        className="mr-2"
        style={{ width: '11.188px', height: '12.797px' }}
      />
      {`Delete ${entityName || ''}`}
    </small>
  </div>
);

export default RemoveButton;
