import { ChartDataItem } from "../../types/ChartData";
import rawData from '../../data/total_hour.json';
import { InitialData } from "../../types/RawData";

export function initConverter(raw: typeof rawData): InitialData {
    const res: InitialData = {
        datasets: [],
        labels: ['count'],
        times: []
    }
    const dataset: number[] = [];
    raw.rows.forEach(it => {
        dataset.push(it.count)
        res.times.push(Date.parse(it.timestamp))
    })
    res.datasets.push(dataset)

    return res
}

export function prepareData(d: InitialData): ChartDataItem[] {
    const countItems = d.times.length;

    return Array.from(Array(countItems), ((_, itemIdx) => {
        const item: ChartDataItem = {
            time: d.times[itemIdx]
        };

        d.datasets.forEach((dataset, datasetIdx) => {
            item[d.labels[datasetIdx]] = dataset[itemIdx];
        })

        return item
    }))
}
