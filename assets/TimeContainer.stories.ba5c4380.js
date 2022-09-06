import{b as t,t as n}from"./data.8404badb.js";import{j as o}from"./jsx-runtime.37f8a773.js";import"./iframe.9b6c9b0f.js";import"./index.e99e7434.js";import"./index.a396b262.js";const c={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
//# sourceMappingURL=TimeContainer.stories.ba5c4380.js.map
