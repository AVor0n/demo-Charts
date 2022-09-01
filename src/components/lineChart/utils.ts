import { format } from 'date-fns';
import { IChartTimeItem } from '../../types';

export function prepareData(datasets: number[][], times: number[]): IChartTimeItem[] {
  const countItems = times.length;
  return Array.from(Array(countItems), ((_, itemIdx) => {
    const item: IChartTimeItem = { time: times[itemIdx] };
    datasets.forEach((dataset, datasetIdx) => {
      item[datasetIdx] = dataset[itemIdx];
    });
    return item;
  }));
}

export function getTicks(times: number[], gridStepX: number): number[] {
  if (gridStepX === 1) return times;

  const ticks: number[] = [];
  times.forEach((it, idx) => {
    if (!(idx % gridStepX)) ticks.push(it);
  });
  return ticks;
}

export const DateUtils = {
  format
}
