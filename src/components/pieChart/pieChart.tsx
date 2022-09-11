import React, { FC } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { CategoryChartData } from '../../types/types';

interface PieChartProps {
  data: CategoryChartData
  legend?: boolean;
}

export const PieChart: FC<PieChartProps> = ({ legend, data }) => (
  <ResponsiveContainer height="100%" width="100%">
    <RechartsPieChart>
      {legend && <Legend />}
      <Pie
        data={data.data}
        cx="50%"
        cy="50%"
        label
        outerRadius="50%"
        dataKey="value">
        {data.data.map(({ name }, index) => (
          <Cell key={name} fill={data.colors[index % data.colors.length]} />
        ))}
      </Pie>
    </RechartsPieChart>
  </ResponsiveContainer>
);

PieChart.defaultProps = {
  legend: true,
};
