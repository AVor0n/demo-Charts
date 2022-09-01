import{B as u,d as o}from"./data.a3771a44.js";import{j as a}from"./jsx-runtime.ebe20fb4.js";import"./iframe.fb1aea21.js";import"./index.b18c8500.js";import"./index.78b2fe5a.js";const p={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart } from '../components';
import { data } from '../data';

export default {
    title: 'Charts/BarChart',
    component: BarChart,
    argTypes: {
        data: { table: { disable: true } },
        labels: { description: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435' },
        legend: { description: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443' },
        tooltip: { description: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443' },
        layout: { description: '\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430' },
        min: { description: '\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        max: { description: '\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        colors: { description: '\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432' },
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => <BarChart {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    labels: ['high', 'mid', 'low', 'other'],
    layout: 'vertical',
    tooltip: true,
    legend: false,
};
`,locationsMap:{horizontal:{startLoc:{col:50,line:20},endLoc:{col:80,line:20},startBody:{col:50,line:20},endBody:{col:80,line:20}},vertical:{startLoc:{col:50,line:20},endLoc:{col:80,line:20},startBody:{col:50,line:20},endBody:{col:80,line:20}}}}},title:"Charts/BarChart",component:u,argTypes:{data:{table:{disable:!0}},labels:{description:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435"},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443"},tooltip:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"},layout:{description:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430"},min:{description:"\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},max:{description:"\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},colors:{description:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432"}}},t=e=>a(u,{...e}),n=t.bind({});n.args={data:o,colors:["#ef476f","#ffd166","#06d6a0","#118ab2"],labels:["high","mid","low","other"],layout:"horizontal",tooltip:!0,legend:!1};const r=t.bind({});r.args={data:o,colors:["#ef476f","#ffd166","#06d6a0","#118ab2"],labels:["high","mid","low","other"],layout:"vertical",tooltip:!0,legend:!1};const m=["Horizontal","Vertical"];export{n as Horizontal,r as Vertical,m as __namedExportsOrder,p as default};
//# sourceMappingURL=BarChart.stories.db2b137a.js.map
