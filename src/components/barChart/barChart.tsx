import React, { FC } from 'react';
import {
    CartesianGrid,
    BarChart as RechartsBarChart,
    Tooltip,
    XAxis,
    YAxis,
    Bar,
    ResponsiveContainer,
    Legend,
    Cell,
} from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';
import { IChartCategoryItem } from '../../types';

export interface BarChartProps {
    labels?: string[];
    min?: number | 'auto';
    max?: number | 'auto';
    data: Array<IChartCategoryItem>;
    colors?: string[];
    layout?: 'vertical' | 'horizontal';
    tooltip?: boolean;
    legend?: boolean;
}

export const BarChart: FC<BarChartProps> = ({
    min,
    max,
    labels,
    colors,
    layout,
    data,
    legend,
    tooltip,
}) => {
    const [CategoryAxis, ValueAxis] = layout === 'horizontal' ? [XAxis, YAxis] : [YAxis, XAxis];
    const legendData: Payload[] = data.map((item, idx) => ({
        value: labels?.[idx] ?? item.name,
        type: 'rect',
        id: item.name,
        color: colors![idx % colors!.length],
    }));

    return (
        <ResponsiveContainer  width={'100%'} height={300}>
            <RechartsBarChart data={data} layout={layout}>
                <CartesianGrid strokeDasharray="5 5" />
                <CategoryAxis dataKey="name" type="category" />
                <ValueAxis type="number" dataKey="value" domain={[min!, max!]} allowDataOverflow />

                {tooltip && <Tooltip formatter={(v: IChartCategoryItem['value']) => [v]} />}
                {legend && <Legend payload={legendData} />}

                <Bar dataKey="value">
                    {Object.entries(data).map(([key], idx) => (
                        <Cell
                            key={key}
                            name={labels?.[idx] ?? key}
                            fill={colors![idx % colors!.length]}
                        />
                    ))}
                </Bar>
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

BarChart.defaultProps = {
    min: 'auto',
    max: 'auto',
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};
