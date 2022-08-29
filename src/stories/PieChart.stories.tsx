import { ComponentStory, ComponentMeta } from '@storybook/react';
import PieChart from '../components/PieChart/PieChart';
import PieChartWithActive from '../components/PieChart/PieChartWithActive';
import pieRawData from '../data/categoryData.json'
import { preparePieData } from '../utils/converter';

const pieData = preparePieData(pieRawData as [string, number][])

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        colors: {description: 'Цвета графиков'},
        legend: {description: 'Показать легенду'}
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 500, height: 500, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data: pieData,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    legend: true,
};

const TemplateWithActive: ComponentStory<typeof PieChartWithActive> = args => (
    <div style={{ width: 500, height: 400, margin: 'auto' }}>
        <PieChartWithActive {...args} />
    </div>
);

export const WithActiveSector = TemplateWithActive.bind({});
WithActiveSector.args = {
    data: pieData,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    legend: true,
};
