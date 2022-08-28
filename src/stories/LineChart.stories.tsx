import { ComponentStory, ComponentMeta } from '@storybook/react';
import rawData from '../data/severity_hour.json'
import LineChart from '../components/LineChart';
import { initConverter } from '../utils/converter';

export default {
    title: 'Charts/LineChart',
    component: LineChart,
    argTypes: {
        format: { control: 'text', description: 'Формат значений оси X' },
        data: { table: { disable: true } },
        minorTicks: { description: 'Шаг сетки по оси X' },
        step: { description: 'Шаг, с которым добавляются подписи оси X' },
        keys: { description: 'Массив ключей', table: { disable: true } },
        start: { control: 'select', options: ['auto', 'dataMin'], defaultValue: 'dataMin' },
        labels: { description: 'Названия линий, показываются во всплывающей подсказке' }
    },
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = args => <LineChart {...args} />;

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
