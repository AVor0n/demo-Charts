import{C as t,c as n}from"./data.bc3a4329.js";import{j as a}from"./jsx-runtime.719826b6.js";import"./iframe.acb9611b.js";import"./index.5059dc98.js";import"./index.728e3f25.js";const p={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=CategoryContainer.stories.a88d75db.js.map
