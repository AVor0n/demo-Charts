import { FC } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import rawData from '../../data/pieData.json';
import { randColor } from '@ngneat/falso';
import { preparePieData } from "../../utils/converter";
import { CustomLabel } from "./CustomLabel";

interface PieChartProps {
  data?: Array<any>;
  colors?: string[];
}

export const PieChart: FC<PieChartProps> = ({ colors }) => {
  const data = preparePieData(rawData as [string, number][])
  colors??= data.map(() => randColor())

    return (
        <RechartsPieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors![index % colors!.length]} />
            ))}
          </Pie>
        </RechartsPieChart>
    );
  }

export default PieChart;

PieChart.defaultProps = {
  colors: ['blue', 'red', 'green', 'orange']
};
