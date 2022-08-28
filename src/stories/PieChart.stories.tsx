import { ComponentStory, ComponentMeta } from '@storybook/react';
import PieChart from '../components/PieChart';
import pieData from '../data/pieData.json'

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data: pieData,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
};
