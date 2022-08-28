import { format as formatDate } from 'date-fns';
import { FC } from 'react';
import {
    CartesianGrid,
    Line,
    LineChart as RechartsLineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { prepareData, initConverter } from '../utils/converter';
import rawData from '../data/severity_hour.json';
import CustomAxisTick from './CustomAxisTick';
import { PropsOfType } from '../types/PropsOfType';
import { getTicks } from '../utils/charUtils';
import { InitialData } from '../types/RawData';

type Keys = PropsOfType<typeof rawData.rows[0], number>;
interface LinearGraphProps {
    format?: string;
    step?: number;
    minorTicks?: number;
    labels?: string[];
    keys: Keys[];
    start?: number | 'auto' | 'dataMin';
    finish?: number | 'auto' | 'dataMax';
    min?: number | 'auto' | 'dataMin';
    max?: number | 'auto' | 'dataMax';
    data: InitialData;
    colors?: string[];
}

const LineChart: FC<LinearGraphProps> = ({
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
    const dataset = prepareData({ ...data });

    min = min === 'dataMin' ? Math.min(...data.datasets[0]) : min ?? 'auto';
    max = max === 'dataMax' ? Math.max(...data.datasets[0]) : max ?? 'auto';

    start ??= dataset[0]!.time;
    finish ??= dataset.at(-1)!.time;

    return (
        <ResponsiveContainer width={'100%'} height={400}>
            <RechartsLineChart data={dataset}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis
                    dataKey="time"
                    type="number"
                    domain={[start, finish]}
                    allowDataOverflow
                    tickSize={0}
                    interval={0}
                    ticks={getTicks(data.times, minorTicks || step || 1)}
                    tick={<CustomAxisTick step={step || 1} />}
                    tickFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
                />
                <YAxis type="number" domain={[min, max]} allowDataOverflow />
                <Tooltip
                    labelFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
                />
                {keys.map((key, idx) => (
                    <Line
                        type="monotone"
                        dataKey={key}
                        name={labels?.[idx] ?? data.keys[idx]}
                        stroke={colors![idx % colors!.length]}
                        key={key}
                    />
                ))}
            </RechartsLineChart>
        </ResponsiveContainer>
    );
};

export default LineChart;

LineChart.defaultProps = {
    min: 'auto',
    max: 'auto',
    format: 'dd MMM yyyy',
    minorTicks: 1,
    step: 1,
    keys: [],
    start: 'dataMin',
    finish: 'dataMax',
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
};
