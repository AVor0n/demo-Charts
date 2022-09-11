import{P as e,c as o}from"./data.2ef20629.js";import{j as t}from"./jsx-runtime.9e933db7.js";import"./iframe.28e77ba4.js";import"./index.fc23c884.js";import"./index.ac5c11d0.js";const m={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../components';
import { categoryChartData } from '../data';

export default {
    title: 'Charts/PieChart',
    component: PieChart,
    argTypes: {
        data: { table: { disable: true } },
        legend: { description: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443' },
    },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <PieChart {...args} />
    </div>
);

export const Base = Template.bind({});
Base.args = {
    data: categoryChartData,
    legend: true,
};
`,locationsMap:{base:{startLoc:{col:50,line:14},endLoc:{col:1,line:18},startBody:{col:50,line:14},endBody:{col:1,line:18}}}}},title:"Charts/PieChart",component:e,argTypes:{data:{table:{disable:!0}},legend:{description:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0435\u0433\u0435\u043D\u0434\u0443"}}},n=a=>t("div",{style:{width:300,height:300,margin:"auto"},children:t(e,{...a})}),r=n.bind({});r.args={data:o,legend:!0};const c=["Base"];export{r as Base,c as __namedExportsOrder,m as default};
//# sourceMappingURL=PieChart.stories.be328309.js.map
