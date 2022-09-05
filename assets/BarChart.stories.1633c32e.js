import{B as u,c as r}from"./data.bc3a4329.js";import{j as e}from"./jsx-runtime.719826b6.js";import"./iframe.acb9611b.js";import"./index.5059dc98.js";import"./index.728e3f25.js";const C={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
        colors: { description: '\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432' },
    },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = args => <BarChart {...args} />;
const {data, colors} = categoryChartData;
export const Horizontal = Template.bind({});
Horizontal.args = {
    data,
    colors,
    layout: 'horizontal',
    tooltip: true,
    legend: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    data,
    colors,
    layout: 'vertical',
    tooltip: true,
    legend: false,
};
`,locationsMap:{horizontal:{startLoc:{col:50,line:20},endLoc:{col:80,line:20},startBody:{col:50,line:20},endBody:{col:80,line:20}},vertical:{startLoc:{col:50,line:20},endLoc:{col:80,line:20},startBody:{col:50,line:20},endBody:{col:80,line:20}}}}},title:"Charts/BarChart",component:u,argTypes:{data:{table:{disable:!0}},labels:{description:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435"},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443"},tooltip:{description:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"},layout:{description:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430"},min:{description:"\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},max:{description:"\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},colors:{description:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432"}}},t=n=>e(u,{...n}),{data:o,colors:a}=r,i=t.bind({});i.args={data:o,colors:a,layout:"horizontal",tooltip:!0,legend:!1};const l=t.bind({});l.args={data:o,colors:a,layout:"vertical",tooltip:!0,legend:!1};const B=["Horizontal","Vertical"];export{i as Horizontal,l as Vertical,B as __namedExportsOrder,C as default};
//# sourceMappingURL=BarChart.stories.1633c32e.js.map
