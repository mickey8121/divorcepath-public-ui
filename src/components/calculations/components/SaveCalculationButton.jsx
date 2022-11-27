import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

const SaveCalculationButton = () => (
  <div className="save-button-container">
    <Button disabled type="button" className="text-nowrap">
      <FontAwesomeIcon icon="save" className="mr-2" />
      Save
    </Button>

    <small className="form-text text-muted mt-1 mb-2">
      <a href={`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/sign-up`}>Create a free account </a>
      to save your calculations
    </small>
  </div>
);

export default SaveCalculationButton;
