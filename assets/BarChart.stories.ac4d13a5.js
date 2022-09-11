import{B as t,c as a}from"./data.2ef20629.js";import{j as u}from"./jsx-runtime.9e933db7.js";import"./iframe.28e77ba4.js";import"./index.fc23c884.js";import"./index.ac5c11d0.js";const d={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart } from '../components';
import { categoryChartData } from '../data';

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
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => (
    <div style={{ height: 300 }}>
        <BarChart {...args} />
    </div>
);
export const Horizontal = Template.bind({});
Horizontal.args = {
    data: categoryChartData,
    layout: 'horizontal',
    tooltip: true,
    legend: false,
    min: 'auto',
    max: 'auto',
};

export const Vertical = Template.bind({});
Vertical.args = {
    data: categoryChartData,
    layout: 'vertical',
    tooltip: true,
    legend: false,
    min: 'auto',
    max: 'auto',
};
`,locationsMap:{horizontal:{startLoc:{col:50,line:19},endLoc:{col:1,line:23},startBody:{col:50,line:19},endBody:{col:1,line:23}},vertical:{startLoc:{col:50,line:19},endLoc:{col:1,line:23},startBody:{col:50,line:19},endBody:{col:1,line:23}}}}},title:"Charts/BarChart",component:t,argTypes:{data:{table:{disable:!0}},labels:{description:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435"},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443"},tooltip:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"},layout:{description:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430"},min:{description:"\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},max:{description:"\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"}}},o=n=>u("div",{style:{height:300},children:u(t,{...n})}),e=o.bind({});e.args={data:a,layout:"horizontal",tooltip:!0,legend:!1,min:"auto",max:"auto"};const r=o.bind({});r.args={data:a,layout:"vertical",tooltip:!0,legend:!1,min:"auto",max:"auto"};const m=["Horizontal","Vertical"];export{e as Horizontal,r as Vertical,m as __namedExportsOrder,d as default};
//# sourceMappingURL=BarChart.stories.ac4d13a5.js.map
