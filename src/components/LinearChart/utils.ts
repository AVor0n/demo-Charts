import { ChartData, ChartDataItem } from "../../types/ChartData";

export function prepareData(datasets: number[][], labels: string[], times: number[]): ChartData {
    const countItems = times.length;

    return Array.from(Array(countItems), ((_, itemIdx) => {
        const item: ChartDataItem = {
            time: times[itemIdx]
        };

        datasets.forEach((dataset, datasetIdx) => {
            item[labels[datasetIdx]] = dataset[itemIdx];
        })

        return item
    }))
}

export function getTicks(
    min: number,
    max: number,
    step: number,
    minorTicks = 0,
) {
    const minStep = step / (minorTicks + 1);
    const countTicks = Math.floor((max - min) / minStep) + 1;
    return Array.from(Array(countTicks), (_it, i) => min + minStep * i);
}

export function getMinData(data: ChartDataItem[], labels: string[]): number {
    const minsByLabel:number[] = []
    for(let label of labels){
        minsByLabel.push(Math.min(data[label]))
    }
    return Math.min(...data)
}

export function getMaxdata(data): number {

}
