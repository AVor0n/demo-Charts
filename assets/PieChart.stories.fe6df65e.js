import{P as e,c as a}from"./data.0e04284c.js";import{j as t}from"./jsx-runtime.6b9c8ff3.js";import"./iframe.420b3c21.js";import"./index.df59193b.js";import"./index.1882a7da.js";const m={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        colors: { description: '\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432' },
        legend: { description: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443' },
    },
} as ComponentMeta<typeof PieChart>;

const { data, colors } = categoryChartData;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data,
    legend: true,
    colors,
};
`,locationsMap:{base:{startLoc:{col:50,line:17},endLoc:{col:1,line:21},startBody:{col:50,line:17},endBody:{col:1,line:21}}}}},title:"Charts/PieChart",component:e,argTypes:{data:{table:{disable:!0}},colors:{description:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432"},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"}}},{data:n,colors:r}=a,s=o=>t("div",{style:{width:300,height:300,margin:"auto"},children:t(e,{...o})}),i=s.bind({});i.args={data:n,legend:!0,colors:r};const h=["Base"];export{i as Base,h as __namedExportsOrder,m as default};
//# sourceMappingURL=PieChart.stories.fe6df65e.js.map
