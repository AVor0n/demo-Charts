import { FC, useState } from "react";
import {
    PieChart as RechartsPieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import PieActiveSector from "./PieActiveSector";

interface PieChartProps {
    data: Array<any>;
    colors?: string[];
}

export const PieChart: FC<PieChartProps> = ({ colors, data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ResponsiveContainer height={'100%'} width={'100%'}>
            <RechartsPieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={PieActiveSector}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={'28%'}
                    outerRadius={'40%'}
                    paddingAngle={3}
                    dataKey="value"
                    onMouseEnter={(_, idx) => setActiveIndex(idx)}
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
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
};
