import { FC } from 'react';
import { Cell, CellContent } from '.';

export const Row: FC<{ content: CellContent[] }> = ({ content }) => (
    <tr className="table__row">
        {content.map(cell => (
            <Cell content={cell} key={Math.random()} />
        ))}
    </tr>
);
