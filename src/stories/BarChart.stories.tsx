import { ComponentStory, ComponentMeta } from '@storybook/react';
import rawData from '../data/categoryData.json'
import BarChart from '../components/BarChart';
import { preparePieData } from '../utils/converter';

export default {
    title: 'Charts/BarChart',
    component: BarChart,
    argTypes: {
        data: { table: { disable: true } },
        labels: { description: 'Названия линий, показываются во всплывающей подсказке' },
        legend: { description: 'Показывать всплывающую подсказку' },
        tooltip: { description: 'Показывать легенду' },
        layout: {description: 'Направление отображения графика'},
        min: {description: 'Ось Y, минимальное значение'},
        max: {description: 'Ось Y, максимальное значение'},
        colors: {description: 'Цвета графиков'}
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => <BarChart {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    data: preparePieData(rawData as [string, number][]),
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    data: preparePieData(rawData as [string, number][]),
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'vertical',
    tooltip: true,
    legend: false,
};
