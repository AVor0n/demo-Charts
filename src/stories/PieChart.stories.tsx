import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        legend: { description: 'Показать легенду' },
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data: categoryChartData,
    legend: true,
};
