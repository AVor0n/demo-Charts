import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        colors: { description: 'Цвета графиков' },
        legend: { description: 'Показать легенду' },
    },
} as ComponentMeta<typeof PieChart>;

const { data, colors } = categoryChartData;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data,
    legend: true,
    colors,
};
