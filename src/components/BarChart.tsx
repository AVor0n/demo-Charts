import { format as formatDate } from 'date-fns';
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
} from 'recharts';
import { prepareData } from '../utils/converter';
import rawData from '../data/severity_hour.json';
import { PropsOfType } from '../types/PropsOfType';
import { getTicks, trimData } from '../utils/charUtils';
import { InitialData } from '../types/RawData';
import CustomXAxisTick from './CustomXAxisTick';
import CustomYAxisTick from './CustomYAxisTick';

type Keys = PropsOfType<typeof rawData.rows[0], number>;
interface BarChartProps {
    format?: string;
    step?: number;
    minorTicks?: number;
    labels?: string[];
    keys: Keys[];
    start?: number;
    finish?: number;
    min?: number | 'auto' | 'dataMin';
    max?: number | 'auto' | 'dataMax';
    data: InitialData;
    colors?: string[];
    layout: 'vertical' | 'horizontal';
    tooltip?: boolean;
    legend?: boolean;
}

const BarChart: FC<BarChartProps> = ({
    start,
    finish,
    min,
    max,
    step,
    minorTicks,
    format,
    labels,
    keys,
    colors,
    layout,
    data,
    legend,
    tooltip,
}) => {
    if (start || finish) {
        data = trimData(data, start ?? data.times[0], finish ?? data.times.at(-1)!);
    }
    const dataset = prepareData({ ...data });

    start ??= data.times[0];
    finish ??= data.times.at(-1)!;
    const offset = (data.times[1] - data.times[0]) / 2;

    min ||= typeof min !== 'number' ? Math.min(...data.datasets[0]) : min;
    max ||= typeof max !== 'number' ? Math.max(...data.datasets[0]) : max;

    const [TimeAxis, DataAxis] = layout === 'horizontal' ? [XAxis, YAxis] : [YAxis, XAxis];
    const CustomAxisTick = layout === 'horizontal' ? CustomXAxisTick : CustomYAxisTick;

    return (
        <ResponsiveContainer width={'100%'} height={400}>
            <RechartsBarChart data={dataset} layout={layout}>
                <CartesianGrid strokeDasharray="5 5" />
                <TimeAxis
                    dataKey="time"
                    domain={[start - offset, finish + offset]}
                    allowDataOverflow
                    interval={0}
                    tickSize={0}
                    tick={<CustomAxisTick step={step || 1} layout={layout} />}
                    ticks={getTicks(data.times, minorTicks || step || 1)}
                    tickFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
                    {...(layout === 'vertical' ? { width: 130 } : {})}
                />
                <DataAxis type="number" domain={[min, max]} allowDataOverflow />
                {tooltip && (
                    <Tooltip
                        labelFormatter={(timestamp: number) =>
                            formatDate(new Date(timestamp), format!)
                        }
                    />
                )}
                {legend && <Legend />}
                {keys.map((key, idx) => (
                    <Bar
                        layout="vertical"
                        type="monotone"
                        dataKey={key}
                        stackId={0}
                        key={key}
                        name={labels?.[idx] ?? data.keys[idx]}
                        fill={colors![idx % colors!.length]}
                    />
                ))}
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

export default BarChart;

BarChart.defaultProps = {
    min: 'auto',
    max: 'auto',
    format: 'dd MMM yyyy',
    minorTicks: 1,
    step: 1,
    keys: [],
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};
