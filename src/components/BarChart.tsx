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
} from 'recharts';
import { prepareData, initConverter } from '../utils/converter';
import rawData from '../data/severity_hour.json';
import CustomAxisTick from './CustomAxisTick';
import { PropsOfType } from '../types/PropsOfType';
import { getTicks, trimData } from '../utils/charUtils';
import { InitialData } from '../types/RawData';

type Keys = PropsOfType<typeof rawData.rows[0], number>;
interface LinearGraphProps {
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
    layout: 'vertical' | 'horizontal'
}

const BarChart: FC<LinearGraphProps> = ({
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
    data,
}) => {
    if (start || finish) {
        data = trimData(data, start ?? data.times[0], finish ?? data.times.at(-1)!);
    }
    const dataset = prepareData({ ...data });

    start ??= data.times[0];
    finish ??= data.times.at(-1)!;

    min ||= typeof min !== 'number' ? Math.min(...data.datasets[0]) : min;
    max ||= typeof max !== 'number' ? Math.max(...data.datasets[0]) : max;

    return (
        <ResponsiveContainer width={'100%'} height={400}>
            <RechartsBarChart data={dataset} margin={{ right: 50 }}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis
                    dataKey="time"
                    domain={[start, finish]}
                    allowDataOverflow
                    height={35}
                    interval={0}
                    tickSize={0}
                    tick={<CustomAxisTick step={step || 1} />}
                    ticks={getTicks(data.times, minorTicks || step || 1)}
                    tickFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
                />
                <YAxis type="number" domain={[min, max]} allowDataOverflow />
                <Tooltip
                    labelFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
                />
                {keys.map((key, idx) => (
                    <Bar
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
    layout: 'horizontal'
};
