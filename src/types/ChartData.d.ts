import PieChart from '../components/PieChart/PieChar';

export type ChartDataItem = {
    time: number,
    [key: string]: number
}

export type PieChartItem = {
    name: string,
    value: number,
}
