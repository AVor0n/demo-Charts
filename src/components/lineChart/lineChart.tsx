import React, { FC, useState, useEffect, useRef } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { TimeChartData } from '../../types';
import { CustomXAxisTick } from './customXAxisTick';
import { DateUtils, getTicks, prepareData } from './utils';

export interface LineChartProps {
  format?: string;
  step?: number;
  minorTicks?: number;
  start?: number | 'auto' | 'dataMin';
  finish?: number | 'auto' | 'dataMax';
  min?: number | 'auto' | 'dataMin';
  max?: number | 'auto' | 'dataMax';
  data: TimeChartData;
  updateInterval?: number;
}

export const LineChart: FC<LineChartProps> = ({
  start,
  finish,
  min,
  max,
  step,
  minorTicks,
  format,
  data,
  updateInterval,
}) => {
  const [, update] = useState(0); // для принудительной перерисовки графика по таймеру
  const timerIdRef = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);
    if (updateInterval) {
      timerIdRef.current = setInterval(
        () => update(Math.random()),
        updateInterval,
      );
    }
    return () => clearInterval(timerIdRef.current);
  }, [updateInterval]);

  const dataset = prepareData(data.datasets, data.times);

  return (
    <ResponsiveContainer width="100%" height={'100%'}>
      <RechartsLineChart data={dataset}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis
          dataKey="time"
          type="number"
          domain={[start ?? data.times[0], finish ?? data.times.at(-1)!]}
          allowDataOverflow
          tickSize={0}
          interval={0}
          ticks={getTicks(data.times, minorTicks || step || 1)}
          tick={<CustomXAxisTick step={step || 1} />}
          tickFormatter={(timestamp: number) => DateUtils.format(new Date(timestamp), format!)} />
        <YAxis type="number" domain={[min!, max!]} allowDataOverflow />
        <Tooltip
          labelFormatter={(timestamp: number) => DateUtils.format(new Date(timestamp), format!)}
          isAnimationActive={false} />
        {[...data.datasets.keys()].map((key, idx) => (
          <Line
            dataKey={key}
            name={data.labels[idx]}
            stroke={data.colors[idx % data.colors.length]}
            key={key}
            dot={false}
            isAnimationActive={false} />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

LineChart.defaultProps = {
  min: 'auto',
  max: 'auto',
  format: 'dd MMM yyyy',
  minorTicks: 1,
  step: 1,
  start: 'dataMin',
  finish: 'dataMax',
};
