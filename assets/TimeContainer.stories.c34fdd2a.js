import{b as t,t as e}from"./data.2ea6af77.js";import{j as o}from"./jsx-runtime.05adce38.js";import"./iframe.bc2a6216.js";import"./index.4490f172.js";import"./index.b46993ef.js";const C={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
    chartProps: {
        minorTicks: 5,
        step: 2,
    }
};
`,locationsMap:{"time-container":{startLoc:{col:59,line:11},endLoc:{col:94,line:11},startBody:{col:59,line:11},endBody:{col:94,line:11}}}}},title:"Containers/TimeContainer",component:t,argTypes:{}},r=n=>o(t,{...n}),a=r.bind({});a.args={data:e,chartProps:{minorTicks:5,step:2}};const T=["timeContainer"];export{T as __namedExportsOrder,C as default,a as timeContainer};
//# sourceMappingURL=TimeContainer.stories.c34fdd2a.js.map
