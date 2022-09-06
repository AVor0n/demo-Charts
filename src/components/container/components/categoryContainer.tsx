import React, { CSSProperties, FC } from 'react';
import { ColorCell } from '.';
import { Table } from '../..';
import { CategoryChartData } from '../../../types';
import { BarChart, BarChartProps } from '../../barChart';
import '../container.css';

interface CategoryContainerProps {
    hideTable?: boolean;
    hideChart?: boolean;
    data: CategoryChartData;
    chartProps?: Omit<BarChartProps, keyof CategoryChartData>;
    layout?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const chart2TableCategoryData = ({ data, colors }: CategoryChartData) => {
    const dataSum = data.reduce((acc, it) => acc + it.value, 0);

    const header = ['', 'Категория', 'Количество', ''];
    const body = data.map((item, idx) => [
        <ColorCell color={colors[idx]} />,
        item.name,
        item.value,
        `${((item.value / dataSum) * 100).toFixed(2)}%`,
    ]);
    const footer = ['', 'Итого', dataSum, ''];

    return {
        header,
        body,
        footer,
    };
};

export const CategoryContainer: FC<CategoryContainerProps> = ({
    hideTable,
    hideChart,
    layout,
    data,
    chartProps,
}) => {
    const style: CSSProperties = {
        display: 'flex',
        flexDirection: layout,
    };

    return (
        <div className="container" style={style}>
            {!hideChart && (
                <div className="container__item container__chart">
                    <BarChart {...data} {...chartProps} />
                </div>
            )}
            {!hideChart && !hideTable && <div className="container__separator" />}
            {!hideTable && (
                <div className="container__item container__table">
                    <Table {...chart2TableCategoryData(data)} />
                </div>
            )}
        </div>
    );
};

CategoryContainer.defaultProps = {
    hideTable: false,
    hideChart: false,
    layout: 'row',
};
