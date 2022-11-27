import React, { useMemo } from 'react';

import customGet from 'utils/get';
import Table from '../Table';

const DurationDetails = ({ spousalSupport, payeeName, showChildSupportResults }) => {
  const data = useMemo(
    () =>
      [
        {
          yearsValue:
            spousalSupport?.durationOfRelationship > 0
              ? spousalSupport?.durationOfRelationship
              : '0',
          label: 'Duration of Relationship',
          description: 'Years of Marriage or Cohabitation'
        },
        {
          yearsValue: spousalSupport?.ageAtSeparation > 0 ? spousalSupport?.ageAtSeparation : '0',
          label: 'Age at Separation',
          description: `${payeeName}'s age at Separation`
        },
        showChildSupportResults && {
          yearsValue:
            spousalSupport?.yearsUntilStartSchool > 0 ? spousalSupport?.yearsUntilStartSchool : '0',
          label: 'Years Until F/T School',
          description: 'Years Until Youngest Child Attends Full-time School'
        },
        showChildSupportResults && {
          yearsValue:
            spousalSupport?.yearsUntilEndSchool > 0 ? spousalSupport?.yearsUntilEndSchool : '0',
          label: 'Years Until End of School',
          description: 'Years Until Youngest Child Finishes High School'
        },
        {
          stringValue: customGet(spousalSupport, 'twentyYearRelationship') ? 'Yes' : 'No',
          label: '>20 Year Relationship',
          description: 'Marriage/Cohabitation Period of 20 years or more'
        },
        {
          stringValue: customGet(spousalSupport, 'ruleOf65') ? 'Yes' : 'No',
          label: 'Rule of 65',
          description: `${payeeName}'s age plus marriage/cohabitation period`
        }
      ].filter(d => d),
    [payeeName, showChildSupportResults, spousalSupport]
  );

  return (
    <div className="mt-3">
      <div className="amountlist tab-pane pt-2 mb-4" id="spousalDuration">
        <Table data={data} />
      </div>
    </div>
  );
};

export default DurationDetails;
