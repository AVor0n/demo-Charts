import { ComponentStory, ComponentMeta } from '@storybook/react';
import { format } from 'date-fns';
import { Table } from '../components';
import { ColorCell } from '../components/table/components/colorCell';
import { categoryChartData, timeChartData } from '../data';
import type { CategoryChartData, TimeChartData } from '../types';

export default {
    title: 'Charts/Table',
    component: Table,
    argTypes: {
        header: { table: { disable: true } },
        body: { table: { disable: true } },
        footer: { table: { disable: true } },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

const colors = ['red', 'orange', 'green', 'blue'];

const generateCategoryDataTable = (d: CategoryChartData['data']) => {
    const dataSum = d.reduce((acc, it) => acc + it.value, 0);

    const header = ['', 'Категория', 'Количество', ''];
    const body = d.map((item, idx) => [
        <ColorCell color={colors[idx]} />,
        item.name,
        item.value,
        `${((item.value / dataSum) * 100).toFixed(2)}%`,
    ]);
    const footer = ['', 'Итого', dataSum, ''];

    return {
        header,
        body,
        footer,
    };
};
export const Base = Template.bind({});
Base.args = generateCategoryDataTable(categoryChartData.data);

const generateMultiColumnDataTable = ({datasets, times, labels}: TimeChartData) => {
    const header = [
        'time',
        ...datasets.map((_, idx) => <ColorCell color={colors[idx]}>{labels[idx]}</ColorCell>),
    ];
    const body = times.map((time, rowIdx) => [
        format(new Date(time), 'dd.MM HH:mm:ss'),
        ...datasets.map(dataset => dataset[rowIdx]),
    ]);

    return {
        header,
        body,
    };
};
export const MultiColumn = Template.bind({});
MultiColumn.args = generateMultiColumnDataTable(timeChartData);
