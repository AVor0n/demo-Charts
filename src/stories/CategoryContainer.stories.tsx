import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryContainer } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Containers/CategoryContainer',
    component: CategoryContainer,
    argTypes: {},
} as ComponentMeta<typeof CategoryContainer>;

const CategoryTemplate: ComponentStory<typeof CategoryContainer> = args => <CategoryContainer {...args} />;

export const categoryContainer = CategoryTemplate.bind({});
categoryContainer.args = {
    data: categoryChartData,
};
