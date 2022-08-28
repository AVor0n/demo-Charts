import { FC } from "react";
import {
    PieChart as RechartsPieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import rawData from '../data/pieData.json';
import { preparePieData } from "../utils/converter";

interface PieChartProps {
    data?: Array<any>;
    colors?: string[];
}

export const PieChart: FC<PieChartProps> = ({ colors }) => {
    const data = preparePieData(rawData as [string, number][])

    return (
        <ResponsiveContainer height={'100%'} width={'100%'}>
            <RechartsPieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={'70%'}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors![index % colors!.length]} />
                    ))}
                </Pie>
            </RechartsPieChart>
        </ResponsiveContainer>
    );
}

export default PieChart;

PieChart.defaultProps = {
    colors: ['blue', 'red', 'green', 'orange']
};
