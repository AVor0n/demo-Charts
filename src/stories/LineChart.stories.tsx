import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
import { LineChart } from '../components';
import { timeChartData } from '../data';
import { TimeChartData } from '../types';

export default {
    title: 'Charts/LineChart',
    component: LineChart,
    argTypes: {
        format: { control: 'text', description: 'Формат значений оси X' },
        minorTicks: { description: 'Шаг сетки по оси X' },
        step: { description: 'Шаг, с которым добавляются подписи оси X' },
        start: { control: 'date', description: 'Ось X, начальная дата' },
        finish: { control: 'date', description: 'Ось X, конечная дата' },
        min: { description: 'Ось Y, минимальное значение' },
        max: { description: 'Ось Y, максимальное значение' },
        updateInterval: { description: 'Период обновления графика, мс', type: 'number' },
    },
} as ComponentMeta<typeof LineChart>;

const addRandomItem = ({ datasets, times }: TimeChartData) => {
    datasets.forEach(it => {
        it.shift();
        it.push(Math.floor(Math.random() * 5000));
    });
    const timeDiff = times[1] - times[0];
    times = times.slice(1);
    times.push(times.at(-1)! + timeDiff);
    return { datasets, times };
};

const Template: ComponentStory<typeof LineChart> = args => {
    const { data, updateInterval } = args;
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (updateInterval) {
            timerRef.current = setInterval(() => {
                ({datasets: data.datasets, times: data.times} = addRandomItem(data));
            }, updateInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [updateInterval]);

    return (
        <div style={{height: 300}}>
            <LineChart
                {...args}
                data={updateInterval ? data : timeChartData}
            />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    data: timeChartData,
    format: 'dd.MM HH:mm',
    step: 5,
    minorTicks: 1,
    start: 'dataMin',
    finish: 'dataMax',
    min: 'auto',
    max: 'auto',
};

export const WithAutoUpdate = Template.bind({});
WithAutoUpdate.args = {
    data: timeChartData,
    updateInterval: 2000,
    format: 'dd.MM HH:mm',
    step: 5,
    minorTicks: 1,
    start: 'dataMin',
    finish: 'dataMax',
    min: 'auto',
    max: 'auto',
};
