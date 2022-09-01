import{P as e,d as n}from"./data.a3771a44.js";import{j as t}from"./jsx-runtime.ebe20fb4.js";import"./iframe.fb1aea21.js";import"./index.b18c8500.js";import"./index.78b2fe5a.js";const l={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { data } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        colors: { description: '\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432' },
        legend: { description: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443' },
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 500, height: 500, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data,
    colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2'],
    legend: true,
};
`,locationsMap:{base:{startLoc:{col:50,line:15},endLoc:{col:1,line:19},startBody:{col:50,line:15},endBody:{col:1,line:19}}}}},title:"Charts/PieChart",component:e,argTypes:{data:{table:{disable:!0}},colors:{description:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432"},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"}}},a=o=>t("div",{style:{width:500,height:500,margin:"auto"},children:t(e,{...o})}),r=a.bind({});r.args={data:n,colors:["#ef476f","#ffd166","#06d6a0","#118ab2"],legend:!0};const c=["Base"];export{r as Base,c as __namedExportsOrder,l as default};
//# sourceMappingURL=PieChart.stories.b762234d.js.map
