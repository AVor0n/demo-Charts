import { FC } from 'react';
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
import { PieChartItem } from '../types/ChartData';

interface BarChartProps {
    labels?: string[];
    min?: number | 'auto' | 'dataMin';
    max?: number | 'auto' | 'dataMax';
    data: Array<PieChartItem>;
    colors?: string[];
    layout: 'vertical' | 'horizontal';
    tooltip?: boolean;
    legend?: boolean;
}

const BarChart: FC<BarChartProps> = ({
    min,
    max,
    labels,
    colors,
    layout,
    data,
    legend,
    tooltip,
}) => {
    min ||= typeof min !== 'number' ? Math.min(...data.map(item => item.value)) : min;
    max ||= typeof max !== 'number' ? Math.max(...data.map(item => item.value)) : max;
    const [CategoryAxis, ValueAxis] = layout === 'horizontal' ? [XAxis, YAxis] : [YAxis, XAxis];
    const legendData: Payload[] = data.map((item, idx) => ({
        value: labels?.[idx] ?? item.name,
        type: 'rect',
        id: item.name,
        color: colors![idx % colors?.length!]
    }))
    return (
        <ResponsiveContainer width={'100%'} height={400}>
            <RechartsBarChart data={data} layout={layout}>
                <CartesianGrid strokeDasharray="5 5" />
                <CategoryAxis dataKey='name' type='category' tickFormatter={(v, idx) => labels?.[idx] ?? v}/>
                <ValueAxis type="number" dataKey='value' domain={[min, max]} allowDataOverflow />
                {tooltip && <Tooltip formatter={(v: PieChartItem['value']) => [v]} />}
                {legend && <Legend payload={legendData} />}
                <Bar dataKey='value'>
                    {
                        Object.entries(data).map(([key], idx) => (
                            <Cell key={`cell-${idx}`}
                                name={labels?.[idx] ?? key}
                                fill={colors![idx % colors!.length]} />
                        ))
                    }
                </Bar>
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

export default BarChart;

BarChart.defaultProps = {
    min: 'auto',
    max: 'auto',
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};
