import { FC } from "react";
import {
    PieChart as RechartsPieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
} from "recharts";
import rawData from '../data/pieData.json';
import { preparePieData } from "../utils/converter";

interface PieChartProps {
    data?: Array<any>;
    colors?: string[];
    legend?: boolean;
}

export const PieChart: FC<PieChartProps> = ({ colors, legend }) => {
    const data = preparePieData(rawData as [string, number][])

    return (
        <ResponsiveContainer height={'100%'} width={'100%'}>
            <RechartsPieChart>
                {legend && <Legend/>}
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={'50%'}
                    dataKey="value"
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors![index % colors!.length]}/>
                    ))}
                </Pie>
            </RechartsPieChart>
        </ResponsiveContainer>
    );
}

export default PieChart;

PieChart.defaultProps = {
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    legend: true,
};
