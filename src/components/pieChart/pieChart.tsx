import React, { FC } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { IChartCategoryItem } from '../../types';

interface PieChartProps {
  data: IChartCategoryItem[];
  colors?: string[];
  legend?: boolean;
}

export const PieChart: FC<PieChartProps> = ({ colors, legend, data }) => (
  <ResponsiveContainer height="100%" width="100%">
    <RechartsPieChart>
      {legend && <Legend />}
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label
        outerRadius="50%"
        dataKey="value">
        {data.map(({ name }, index) => (
          <Cell key={name} fill={colors![index % colors!.length]} />
        ))}
      </Pie>
    </RechartsPieChart>
  </ResponsiveContainer>
);

PieChart.defaultProps = {
  colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
  legend: true,
};
