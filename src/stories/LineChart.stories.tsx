import { ComponentStory, ComponentMeta } from '@storybook/react';
import rawData from '../data/severity_hour.json'
import LineChart from '../components/LineChart/LineChart';
import { initConverter } from '../utils/converter';
import { useEffect, useRef } from 'react';
import { InitialData } from '../types/RawData';

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
        updateInterval: { description: 'Период обновления графика, мс', type: 'number' }
    },
} as ComponentMeta<typeof LineChart>;

const addRandomItem = (data: InitialData): InitialData => {
    data.datasets.forEach(it => {
        it.shift()
        it.push(Math.floor(Math.random() * 5000))
    })
    const timeDiff = data.times[1] - data.times[0];
    data.times = data.times.slice(1)
    data.times.push(data.times.at(-1)! + timeDiff);
    return data
}

const Template: ComponentStory<typeof LineChart> = args => {
    let { data, updateInterval } = args
    const initData = structuredClone(data);
    const timerRef = useRef<ReturnType<typeof setInterval>>()
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (updateInterval) {
            timerRef.current = setInterval(
                () => {data = addRandomItem(data)},
                updateInterval
            )
        }
        return () => clearInterval(timerRef.current)
    }, [updateInterval])

    return <LineChart {...args} data={updateInterval ? data : initData} />
};

export const Base = Template.bind({});
Base.args = {
    data: initConverter(rawData, ['high', 'mid', 'low', 'other']),
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    keys: ['high', 'mid', 'low', 'other'],
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};

export const WithAutoUpdate = Template.bind({});
WithAutoUpdate.args = {
    data: initConverter(rawData, ['high', 'mid', 'low', 'other']),
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    keys: ['high', 'other'],
    updateInterval: 2000,
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};
