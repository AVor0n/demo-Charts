import { format } from "date-fns";
import { CategoryChartData, TimeChartData } from "../../types";
import { ColorCell } from './components/colorCell';

export const chart2TableTimeData = ({ datasets, times, labels, colors }: TimeChartData) => {
    const header = [
        'time',
        ...datasets.map((_, idx) => <ColorCell color={colors[idx]}>{labels[idx]}</ColorCell>),
    ];
    const body = times.map((time, rowIdx) => [
        format(new Date(time), 'dd.MM HH:mm:ss'),
        ...datasets.map(dataset => dataset[rowIdx]),
    ]);

    return {
        header,
        body,
    };
};

export const chart2TableCategoryData = ({ data, colors }: CategoryChartData) => {
    const dataSum = data.reduce((acc, it) => acc + it.value, 0);

    const header = ['', 'Категория', 'Количество', ''];
    const body = data.map((item, idx) => [
        <ColorCell color={colors[idx]} />,
        item.name,
        item.value,
        `${((item.value / dataSum) * 100).toFixed(2)}%`,
    ]);
    const footer = ['', 'Итого', dataSum, ''];

    return {
        header,
        body,
        footer,
    };
};
