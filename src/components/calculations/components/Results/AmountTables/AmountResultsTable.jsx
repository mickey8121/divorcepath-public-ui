import React from 'react';

const AmountResultsTable = ({ name, context, rows }) => (
  <div className="row mt-2 tax-results-row">
    <div className="col-12 col-md-10">
      <table className="table small border-none table-striped amount-results">
        <thead>
          <tr className="border-none">
            <th scope="col">{name}</th>
            <th scope="col">{context.clientName}</th>
            <th scope="col">{context.exName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, ex, client, type = 'tax-row' }, index) => (
            <tr key={index}>
              <th colSpan={type === 'tax-section' ? 3 : 1} scope="row" className={type}>
                {label}
              </th>
              {type !== 'tax-section' && (
                <React.Fragment>
                  <td>{client || '-'}</td>
                  <td>{ex || '-'}</td>
                </React.Fragment>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AmountResultsTable;
