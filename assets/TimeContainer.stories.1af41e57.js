import{b as t,t as e}from"./data.6e7f37b3.js";import{j as o}from"./jsx-runtime.c8ef2c97.js";import"./iframe.685a89af.js";import"./index.3c140b13.js";import"./index.5c6ac396.js";const c={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
`,locationsMap:{"time-container":{startLoc:{col:59,line:11},endLoc:{col:94,line:11},startBody:{col:59,line:11},endBody:{col:94,line:11}}}}},title:"Containers/TimeContainer",component:t,argTypes:{}},a=n=>o(t,{...n}),r=a.bind({});r.args={data:e};const T=["timeContainer"];export{T as __namedExportsOrder,c as default,r as timeContainer};
//# sourceMappingURL=TimeContainer.stories.1af41e57.js.map
