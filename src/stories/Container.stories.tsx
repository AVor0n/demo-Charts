import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart, Container, LineChart, PieChart, Table } from '../components';
import { chart2TableCategoryData, chart2TableTimeData } from '../components/table/utils';
import { categoryChartData, timeChartData } from '../data';

export default {
    title: 'Containers/Container',
    component: Container,
    argTypes: {
        chart: {table: {disable: true}},
        table: {table: {disable: true}},
    },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => <Container {...args} />;

export const LinearChartContainer = Template.bind({});
LinearChartContainer.args = {
    chart: <LineChart data={timeChartData} minorTicks={5}/>,
    table: <Table {...chart2TableTimeData(timeChartData)}/>,
    layout: 'row',
};

export const BarChartContainer = Template.bind({});
BarChartContainer.args = {
    chart: <BarChart data={categoryChartData}/>,
    table: <Table {...chart2TableCategoryData(categoryChartData)}/>,
    layout: 'row',
};

export const PieChartContainer = Template.bind({});
PieChartContainer.args = {
    chart: <PieChart data={categoryChartData}/>,
    table: <Table {...chart2TableCategoryData(categoryChartData)}/>,
    layout: 'row',
};
