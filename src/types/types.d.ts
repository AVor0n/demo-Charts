export interface TimeChartData {
    datasets: number[][];
    times: number[];
    colors: string[];
    labels: string[];
};

export interface CategoryChartData {
    data: IChartCategoryItem[];
    colors: string[];
};

export interface IChartTimeItem {
    time: number;
    [key: string]: number;
}
export interface IChartCategoryItem {
    name: string;
    value: number;
}
