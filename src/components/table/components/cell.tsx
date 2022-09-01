import { FC, ReactElement } from 'react';

export type CellContent = string | number | ReactElement;

export const Cell: FC<{ content: CellContent }> = ({ content }) => (
    <th className="table__cell">
        <div className="table__cell-inner">{content}</div>
    </th>
);
