export interface IChartTimeItem {
    time: number;
    [key: string]: number;
}
export interface IChartCategoryItem {
    name: string;
    value: number;
}
export interface LineChartData {
    datasets: number[][];
    timer: number[];
}
