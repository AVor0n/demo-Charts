import { ChartDataItem } from "../../types/ChartData";
import rawSingleData from '../../data/total_hour.json';
import rawMultiData from '../../data/severity_hour.json';
import { InitialData } from "../../types/RawData";
import { PropsOfType } from "../../types/PropsOfType";


export function initConverterOneLine(raw: typeof rawSingleData): InitialData {
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

type Labels = PropsOfType<typeof rawMultiData.rows[0], number>

export function initConverterMultiLine(
    raw: typeof rawMultiData, labels: Labels[]
): InitialData {
    const res: InitialData = {
        datasets: [],
        times: raw.rows.map(it => Date.parse(it.timestamp)),
        labels,
    }
    labels.forEach(label => {
        res.datasets.push(
            raw.rows.map(row => row[label])
        )
    })

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
