import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart } from '../components';
import { data } from '../data';

export default {
    title: 'Charts/BarChart',
    component: BarChart,
    argTypes: {
        data: { table: { disable: true } },
        labels: { description: 'Названия линий, показываются во всплывающей подсказке' },
        legend: { description: 'Показывать всплывающую подсказку' },
        tooltip: { description: 'Показывать легенду' },
        layout: { description: 'Направление отображения графика' },
        min: { description: 'Ось Y, минимальное значение' },
        max: { description: 'Ось Y, максимальное значение' },
        colors: { description: 'Цвета графиков' },
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => <BarChart {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'vertical',
    tooltip: true,
    legend: false,
};
