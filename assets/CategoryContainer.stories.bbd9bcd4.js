import{C as t,c as n}from"./data.6e7f37b3.js";import{j as a}from"./jsx-runtime.c8ef2c97.js";import"./iframe.685a89af.js";import"./index.3c140b13.js";import"./index.5c6ac396.js";const p={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
`,locationsMap:{"category-container":{startLoc:{col:67,line:11},endLoc:{col:106,line:11},startBody:{col:67,line:11},endBody:{col:106,line:11}}}}},title:"Containers/CategoryContainer",component:t,argTypes:{}},e=o=>a(t,{...o}),r=e.bind({});r.args={data:n};const g=["categoryContainer"];export{g as __namedExportsOrder,r as categoryContainer,p as default};
//# sourceMappingURL=CategoryContainer.stories.bbd9bcd4.js.map
