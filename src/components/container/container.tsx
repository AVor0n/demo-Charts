import React, { CSSProperties, FC, ReactNode } from 'react';
import './container.css';

interface ContainerProps {
    chart?: ReactNode;
    table?: ReactNode;
    layout?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const Container: FC<ContainerProps> = ({
    chart,
    table,
    layout,
}) => {
    const style: CSSProperties = {
        display: 'flex',
        flexDirection: layout,
    };

    return (
        <div className="container" style={style}>
            {chart && (
                <div className="container__item container__chart">
                    {chart}
                </div>
            )}
            {chart && table && <div className="container__separator" />}
            {table && (
                <div className="container__item container__table">
                    {table}
                </div>
            )}
        </div>
    );
};

Container.defaultProps = {
    layout: 'row',
};
