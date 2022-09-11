import { FC, PropsWithChildren } from 'react';

export interface ColorCellProps extends PropsWithChildren {
    color: string;
}

export const ColorCell: FC<ColorCellProps> = ({ color, children }) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <div
            style={{
                width: 10,
                height: 10,
                backgroundColor: color,
                border: '1px solid grey',
            }}
        />
        {children}
    </div>
);
