import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

const GeneratePDFButton = ({ text, handleClick }) => (
  <Button onClick={handleClick} type="button" className="mb-0 no-margin" size="md">
    <span>
      <FontAwesomeIcon icon="file-pdf" className="mr-2" />
      {text}
    </span>
  </Button>
);

export default GeneratePDFButton;
