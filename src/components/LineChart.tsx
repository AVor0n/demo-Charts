import { format as formatDate } from "date-fns";
import { FC } from "react";
import {
    CartesianGrid,
    Line,
    LineChart as RechartsLineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { prepareData, initConverterMultiLine } from '../utils/converter';
import rawData from '../data/severity_hour.json';
import CustomAxisTick from './CustomAxisTick';
import { PropsOfType } from '../types/PropsOfType';
import { getTicks } from "../utils/charUtils";

type Keys = PropsOfType<typeof rawData.rows[0], number>
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
    data?: Array<any>;
    colors?: string[]
}

const LineChart: FC<LinearGraphProps> = ({ start, finish, min, max, step, minorTicks, format, labels, keys, colors }) => {
    const data = initConverterMultiLine(rawData, keys);
    if (labels) data.labels = labels
    const dataset = prepareData({ ...data })

    min ||= typeof min !== 'number' ? Math.min(...data.datasets[0]) : min
    max ||= typeof max !== 'number' ? Math.max(...data.datasets[0]) : max

    start ??= dataset[0]!.time
    finish ??= dataset.at(-1)!.time

    format ||= "dd MMM yyyy"
    colors = colors || ['blue']

    return (
        <RechartsLineChart data={dataset} width={800} height={400}>
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
            <YAxis type='number' domain={[min, max]} allowDataOverflow />
            <Tooltip labelFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)} />
            {keys.map((key, idx) => (
                <Line type="monotone" dataKey={key} stroke={colors![idx % colors!.length]} key={key} />
            )
            )}
        </RechartsLineChart>
    );
};

export default LineChart;

LineChart.defaultProps = {
    min: "auto",
    max: "auto",
    format: "dd MMM yyyy",
    minorTicks: 1,
    step: 1,
    keys: [],
    colors: ['blue', 'red', 'green', 'orange']
};
