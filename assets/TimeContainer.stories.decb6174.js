import{b as t,t as n}from"./data.0e04284c.js";import{j as o}from"./jsx-runtime.6b9c8ff3.js";import"./iframe.420b3c21.js";import"./index.df59193b.js";import"./index.1882a7da.js";const c={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimeContainer } from '../components';
import { timeChartData } from '../data';

export default {
    title: 'Containers/TimeContainer',
    component: TimeContainer,
    argTypes: {
        data: { table: { disable: true } },
        footer: { table: { disable: true } },
    },
} as ComponentMeta<typeof TimeContainer>;

const TimeTemplate: ComponentStory<typeof TimeContainer> = args => <TimeContainer {...args} />;

export const timeContainer = TimeTemplate.bind({});
timeContainer.args = {
    data: timeChartData,
    layout: 'row',
    hideChart: false,
    hideTable: false,
    chartProps: {
        minorTicks: 5,
        step: 2,
    },
};
`,locationsMap:{"time-container":{startLoc:{col:59,line:14},endLoc:{col:94,line:14},startBody:{col:59,line:14},endBody:{col:94,line:14}}}}},title:"Containers/TimeContainer",component:t,argTypes:{data:{table:{disable:!0}},footer:{table:{disable:!0}}}},a=e=>o(t,{...e}),r=a.bind({});r.args={data:n,layout:"row",hideChart:!1,hideTable:!1,chartProps:{minorTicks:5,step:2}};const C=["timeContainer"];export{C as __namedExportsOrder,c as default,r as timeContainer};
//# sourceMappingURL=TimeContainer.stories.decb6174.js.map
