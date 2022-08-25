import PieChart from '../components/PieChart/PieChar';
type prefixField<prefix extends string> = `${prefix}_${number}`

export type ChartDataItem = {
    time: number,
    [key: string]: number
}

export type PieChartItem = {
    name: string,
    value: number,
}
