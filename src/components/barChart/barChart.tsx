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
import { CategoryChartData } from '../../types/types';

export interface BarChartProps {
    labels?: string[];
    min?: number | 'auto';
    max?: number | 'auto';
    data: CategoryChartData;
    layout?: 'vertical' | 'horizontal';
    tooltip?: boolean;
    legend?: boolean;
}

export const BarChart: FC<BarChartProps> = ({
    min,
    max,
    labels,
    layout,
    data,
    legend,
    tooltip,
}) => {
    const [CategoryAxis, ValueAxis] = layout === 'horizontal' ? [XAxis, YAxis] : [YAxis, XAxis];
    const legendData: Payload[] = data.data.map((item, idx) => ({
        value: labels?.[idx] ?? item.name,
        type: 'rect',
        id: item.name,
        color: data.colors[idx % data.colors.length],
    }));

    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <RechartsBarChart data={data.data} layout={layout}>
                <CartesianGrid strokeDasharray="5 5" />
                <CategoryAxis dataKey="name" type="category" />
                <ValueAxis type="number" dataKey="value" domain={[min!, max!]} allowDataOverflow />

                {tooltip && <Tooltip formatter={(v: IChartCategoryItem['value']) => [v]} isAnimationActive={false} />}
                {legend && <Legend payload={legendData} />}

                <Bar dataKey="value">
                    {Object.keys(data.data).map((key, idx) => (
                        <Cell
                            key={key}
                            name={labels?.[idx] ?? key}
                            fill={data.colors[idx % data.colors.length]}
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
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};
