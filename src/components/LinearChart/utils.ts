import { InitialData } from '../../types/RawData';
export function getTicks(times: number[], gridStepX: number) {
  if (gridStepX === 1) return times;

  const ticks: number[] = [];
  times.forEach((it, idx) => {
    if (!(idx % gridStepX)) ticks.push(it)
  })
  return ticks
}

export function trimData(data: InitialData, start: number, finish: number):InitialData {
  const startIdx = data.times.findIndex(time => time >= start)
  const endIdx = data.times.findIndex(time => time >= finish)
  if(startIdx === -1 || endIdx === -1){
    return {
      datasets: data.labels.map(() => []),
      labels: data.labels,
      times: []
    }
  }
  data.times = data.times.slice(startIdx, endIdx)
  data.datasets.forEach((dataset, idx) => {
    data.datasets[idx] = dataset.slice(startIdx, endIdx)
  })
  return data
}
