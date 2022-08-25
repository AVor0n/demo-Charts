type prefixField<prefix extends string> = `${prefix}_${number}`

export type ChartDataItem = {
    time: number,
    [key: string]: number
}

export type ChartData = ChartDataItem[];