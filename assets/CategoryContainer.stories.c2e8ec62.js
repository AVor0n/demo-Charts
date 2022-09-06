import{C as t,c as e}from"./data.0e04284c.js";import{j as a}from"./jsx-runtime.6b9c8ff3.js";import"./iframe.420b3c21.js";import"./index.df59193b.js";import"./index.1882a7da.js";const c={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryContainer } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Containers/CategoryContainer',
    component: CategoryContainer,
    argTypes: {
        data: { table: { disable: true } },
        footer: { table: { disable: true } },
    },
} as ComponentMeta<typeof CategoryContainer>;

const CategoryTemplate: ComponentStory<typeof CategoryContainer> = args => <CategoryContainer {...args} />;

export const categoryContainer = CategoryTemplate.bind({});
categoryContainer.args = {
    data: categoryChartData,
    layout: 'row',
    hideChart: false,
    hideTable: false,
};
`,locationsMap:{"category-container":{startLoc:{col:67,line:14},endLoc:{col:106,line:14},startBody:{col:67,line:14},endBody:{col:106,line:14}}}}},title:"Containers/CategoryContainer",component:t,argTypes:{data:{table:{disable:!0}},footer:{table:{disable:!0}}}},r=o=>a(t,{...o}),n=r.bind({});n.args={data:e,layout:"row",hideChart:!1,hideTable:!1};const p=["categoryContainer"];export{p as __namedExportsOrder,n as categoryContainer,c as default};
//# sourceMappingURL=CategoryContainer.stories.c2e8ec62.js.map
