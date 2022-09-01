import React, { FC, ReactElement } from 'react';
import './table.css';

const Cell: FC<{ content: CellContent }> = ({ content }) => (
  <th className="table__cell">
    <div className="table__cell-inner">{content}</div>
  </th>
);
type CellContent = string | ReactElement;

export interface TableProps {
  header?: CellContent[];
  body: CellContent[][];
  footer?: CellContent[];
}

export const Table: FC<TableProps> = ({ header, body, footer }) => (
  <table className="table">
    <thead className="table__header">
      <tr className="table__row">
        {header!.map(cell => <Cell content={cell} key={Math.random()} />)}
      </tr>
    </thead>
    <tbody className="table__body">
      {body.map(row => (
        <tr className="table__row" key={row.join('-')}>
          {row.map(cell => <Cell content={cell} key={Math.random()} />)}
        </tr>
      ))}
    </tbody>
    <tfoot className="table__footer">
      <tr className="table__row">
        {footer!.map(cell => <Cell content={cell} key={Math.random()} />)}
      </tr>
    </tfoot>
  </table>
);

Table.defaultProps = {
  header: [],
  footer: [],
};
