import React from "react";
import { format as formatDate } from "date-fns";
import { FC } from "react";
import {
    CartesianGrid,
    BarChart as RechartsBarChart,
    Tooltip,
    XAxis,
    YAxis,
    Bar,
} from "recharts";
import { prepareData, initConverter } from '../utils/converter';
import rawData from '../data/severity_hour.json';
import CustomAxisTick from './CustomAxisTick';
import { PropsOfType } from '../types/PropsOfType';
import { getTicks, trimData } from "../utils/charUtils";

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

const HBarChart: FC<LinearGraphProps> = ({ start, finish, min, max, step, minorTicks, format, labels, keys, colors }) => {
    let data = initConverter(rawData, keys);

    if (labels) data.labels = labels

    start ??= data.times[0]
    finish ??= data.times.at(-1)!

    if ((start && typeof start === 'number')
        || (finish && typeof finish === 'number')) {
        data = trimData(data, start ?? data.times[0], finish ?? data.times.at(-1)!)
    }

    const dataset = prepareData({ ...data })
    min ||= typeof min !== 'number' ? Math.min(...data.datasets[0]) : min
    max ||= typeof max !== 'number' ? Math.max(...data.datasets[0]) : max

    format ||= "dd MM yyyy"
    colors = colors || ['blue']

    return (
        <RechartsBarChart data={dataset} width={800} height={400} margin={{ right: 50 }}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis
                dataKey="time"
                domain={[start, finish]}
                allowDataOverflow
                tickSize={0}
                interval={0}
                ticks={getTicks(data.times, minorTicks || step || 1)}
                tick={<CustomAxisTick step={step || 1} />}
                height={35}
                tickFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)}
            />
            <YAxis type='number' domain={[min, max]} allowDataOverflow />
            <Tooltip labelFormatter={(timestamp: number) => formatDate(new Date(timestamp), format!)} />
            {keys.map((key, idx) => (
                <Bar type="monotone" dataKey={key} stackId={0} fill={colors![idx % colors!.length]} key={key} />
            )
            )}
        </RechartsBarChart>
    );
};

export default HBarChart;

HBarChart.defaultProps = {
    min: "auto",
    max: "auto",
    format: "dd MMM yyyy",
    minorTicks: 1,
    step: 1,
    keys: [],
    colors: ['blue', 'red', 'green', 'orange']
};
