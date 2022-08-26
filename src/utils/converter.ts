import { ChartDataItem, PieChartItem } from "../types/ChartData";
import rawMultiData from '../data/severity_hour.json';
import { InitialData } from "../types/RawData";
import { PropsOfType } from "../types/PropsOfType";

type Labels = PropsOfType<typeof rawMultiData.rows[0], number>

export function initConverter(
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

export function preparePieData(d: [string, number][]): PieChartItem[] {
    return d.map(it => ({
        name: it[0],
        value: it[1],
    }))
}
