import { ComponentStory, ComponentMeta } from '@storybook/react';
import { format } from 'date-fns';
import { FC, PropsWithChildren } from 'react';
import { Table } from '../components';
import { data, datasets, times } from '../data';

export default {
    title: 'Charts/Table',
    component: Table,
    argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

const ColorCell: FC<PropsWithChildren<{ color: string }>> = ({ color, children }) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <div
            style={{
                width: 10,
                height: 10,
                backgroundColor: color,
                border: '1px solid grey',
            }}
        />
        {children}
    </div>
);

const colors = ['red', 'orange', 'green', 'blue'];

const generateCategoryDataTable = (d: typeof data) => {
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
Base.args = generateCategoryDataTable(data);

const generateMultiColumnDataTable = (datasets: number[][], times: number[], labels: string[]) => {
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
MultiColumn.args = generateMultiColumnDataTable(datasets, times, ['high', 'medium', 'low']);
