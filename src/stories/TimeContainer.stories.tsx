import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimeContainer } from '../components';
import { timeChartData } from '../data';

export default {
    title: 'Containers/TimeContainer',
    component: TimeContainer,
    argTypes: {},
} as ComponentMeta<typeof TimeContainer>;

const TimeTemplate: ComponentStory<typeof TimeContainer> = args => <TimeContainer {...args} />;

export const timeContainer = TimeTemplate.bind({});
timeContainer.args = {
    data: timeChartData,
};
