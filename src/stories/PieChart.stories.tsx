import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { data } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        colors: { description: 'Цвета графиков' },
        legend: { description: 'Показать легенду' },
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 500, height: 500, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    legend: true,
};
