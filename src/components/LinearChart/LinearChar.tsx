import { randColor } from "@ngneat/falso";
import { format } from "date-fns";
import { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomizedAxisTick from "./CustomAxisTick";
import { getMaxdata, getMinData, getTicks, prepareData } from "./utils";
import rawData from '../../data/severity_hour.json';

interface LinearGraphProps {
  format?: (v: number) => string;
  step?: number;
  minorTicks?: number;
  labels?: string[];
  start?: number | 'dataMin';
  finish?: number | 'dataMax';
  min?: number | 'dataMin';
  max?: number | 'dataMax';
  data?: Array<any>;
}

const LinearChart: FC<LinearGraphProps> = ({ format: tickFormat, start, finish, min, max, labels, data: dataProp, step, minorTicks }) => {
  const [data, countLines] = prepareData(rawData)
  min = typeof min !== 'number' ? getMinData(data) : min
  max = typeof max !== 'number' ? getMaxdata(data) : max
  tickFormat = (v: Date) => format(v, 'dd MMM yyyy')

  return (
    <LineChart data={data} width={800} height={400}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis
        dataKey="x"
        type="number"
        domain={[start!, finish!]}
        tickSize={0}
        ticks={step && getTicks(minData, maxData, step, minorTicks)}
        interval={0}
        tickFormatter={tickFormat}
        tick={<CustomizedAxisTick minorTicks={minorTicks} />}
        allowDataOverflow
        height={100}
      />
      <YAxis domain={[min!, max!]} allowDataOverflow/>

      <Tooltip
        formatter={(v, _, p) => [v, JSON.stringify(p?.payload?.[p.dataKey.replace('y', 'label')])]}
        labelFormatter={tickFormat}
      />

      {Array(countLines).fill(0).map((_, i) => (
        <Line type="monotone" dataKey={`y_${i}`} stroke={randColor()} />
      ))}
    </LineChart>
  );
};

export default LinearChart;

LinearChart.defaultProps = {
  start: "dataMin",
  finish: "dataMax",
  min: "auto",
  max: "auto",
  format: v => v.toString(),
  minorTicks: 0,
  step: 0,
};
