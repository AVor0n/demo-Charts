import React, { FC } from 'react';
import { CellContent, Row } from './components';
import './table.css';

export interface TableProps {
    header?: CellContent[];
    body: CellContent[][];
    footer?: CellContent[];
}

export const Table: FC<TableProps> = ({ header, body, footer }) => (
    <table className="table">
        <thead className="table__header">
            <Row content={header ?? []} />
        </thead>

        <tbody className="table__body">
            {body.map(row => (
                <Row content={row} key={row.join('-')} />
            ))}
        </tbody>

        <tfoot className="table__footer">
            <Row content={footer ?? []} />
        </tfoot>
    </table>
);

Table.defaultProps = {
    header: [],
    footer: [],
};
