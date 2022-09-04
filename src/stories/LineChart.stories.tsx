import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
import { LineChart, LineChartProps } from '../components';
import { timeChartData } from '../data';

export default {
    title: 'Charts/LineChart',
    component: LineChart,
    argTypes: {
        format: { control: 'text', description: 'Формат значений оси X' },
        data: { table: { disable: true } },
        minorTicks: { description: 'Шаг сетки по оси X' },
        step: { description: 'Шаг, с которым добавляются подписи оси X' },
        keys: { description: 'Массив ключей' },
        start: { control: 'date', description: 'Ось X, начальная дата' },
        finish: { control: 'date', description: 'Ось X, конечная дата' },
        labels: { description: 'Названия линий, показываются во всплывающей подсказке' },
        min: { description: 'Ось Y, минимальное значение' },
        max: { description: 'Ось Y, максимальное значение' },
        colors: { description: 'Цвета графиков' },
        updateInterval: { description: 'Период обновления графика, мс', type: 'number' },
    },
} as ComponentMeta<typeof LineChart>;

type LineChartData = {
    datasets: LineChartProps['datasets'],
    times: LineChartProps['times']
}
const addRandomItem = ({datasets, times}: LineChartData): LineChartData => {
    datasets.forEach(it => {
        it.shift();
        it.push(Math.floor(Math.random() * 5000));
    });
    const timeDiff = times[1] - times[0];
    times = times.slice(1);
    times.push(times.at(-1)! + timeDiff);
    return {datasets, times};
};

const Template: ComponentStory<typeof LineChart> = args => {
    let { datasets, times, updateInterval } = args;
    const initDatasets = structuredClone(datasets);
    const initTimes = structuredClone(times);
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (updateInterval) {
            timerRef.current = setInterval(() => {
                ({datasets, times} = addRandomItem({datasets, times}));
            }, updateInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [updateInterval]);

    return (
        <LineChart
            {...args}
            datasets={updateInterval ? datasets : initDatasets}
            times={updateInterval ? times : initTimes}
        />
    );
};

const {datasets, times, colors, labels} = timeChartData;

export const Base = Template.bind({});
Base.args = {
    datasets,
    times,
    colors,
    labels,
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};

export const WithAutoUpdate = Template.bind({});
WithAutoUpdate.args = {
    datasets,
    times,
    colors,
    labels,
    updateInterval: 2000,
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};
