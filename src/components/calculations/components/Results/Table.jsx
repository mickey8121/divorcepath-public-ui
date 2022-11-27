import React, { useMemo, useState } from 'react';

import TableRow from './TableRow';

const Table = ({ data, clientName, exName }) => {
  const [activeRow, setRow] = useState();

  const showName = useMemo(() => clientName && exName, [clientName, exName]);

  return (
    <div className="amount-table">
      {showName && (
        <div className="col-12 p-0 border-top">
          <div className="row no-gutters ml-1 mr-1">
            <div className="d-flex justify-content-between col-12 p-0 pb-2 pr-4 pl-2 amountrow">
              <div className="col-5 pt-3 pb-0 pr-0 align-text-bottom">&nbsp;</div>
              <div className="col-3 pt-3 pb-0 pl-0 align-text-bottom text-break">
                <div className="text-truncate">
                  <strong>{clientName}</strong>
                </div>
              </div>
              <div className="col-3 pt-3 pb-0 pl-0 align-text-bottom text-break">
                <div className="text-truncate">
                  <strong>{exName}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {data.map((d, index) => (
        <TableRow
          {...d}
          index={index}
          activeRow={activeRow}
          setRow={setRow}
          key={index}
          resultsTable={d?.resultsTable}
        />
      ))}
    </div>
  );
};

export default Table;
