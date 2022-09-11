import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart } from '../components';
import { categoryChartData } from '../data';

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
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => (
    <div style={{ height: 300 }}>
        <BarChart {...args} />
    </div>
);
export const Horizontal = Template.bind({});
Horizontal.args = {
    data: categoryChartData,
    layout: 'horizontal',
    tooltip: true,
    legend: false,
    min: 'auto',
    max: 'auto',
};

export const Vertical = Template.bind({});
Vertical.args = {
    data: categoryChartData,
    layout: 'vertical',
    tooltip: true,
    legend: false,
    min: 'auto',
    max: 'auto',
};
