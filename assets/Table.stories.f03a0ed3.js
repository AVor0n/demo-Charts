import{T as m,c as b,a as d,f as p,t as C}from"./data.0e04284c.js";import{j as l}from"./jsx-runtime.6b9c8ff3.js";import"./iframe.420b3c21.js";import"./index.df59193b.js";import"./index.1882a7da.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { format } from 'date-fns';
import { ColorCell, Table } from '../components';
import { categoryChartData, timeChartData } from '../data';
import type { CategoryChartData, TimeChartData } from '../types';

export default {
    title: 'Charts/Table',
    component: Table,
    argTypes: {
        header: { table: { disable: true } },
        body: { table: { disable: true } },
        footer: { table: { disable: true } },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

const colors = ['red', 'orange', 'green', 'blue'];

const generateCategoryDataTable = (d: CategoryChartData['data']) => {
    const dataSum = d.reduce((acc, it) => acc + it.value, 0);

    const header = ['', '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F', '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E', ''];
    const body = d.map((item, idx) => [
        <ColorCell color={colors[idx]} />,
        item.name,
        item.value,
        \`\${((item.value / dataSum) * 100).toFixed(2)}%\`,
    ]);
    const footer = ['', '\u0418\u0442\u043E\u0433\u043E', dataSum, ''];

    return {
        header,
        body,
        footer,
    };
};
export const Base = Template.bind({});
Base.args = generateCategoryDataTable(categoryChartData.data);

const generateMultiColumnDataTable = ({datasets, times, labels}: TimeChartData) => {
    const header = [
        'time',
        ...datasets.map((_, idx) => <ColorCell color={colors[idx]}>{labels[idx]}</ColorCell>),
    ];
    const body = times.map((time, rowIdx) => [
        format(new Date(time), 'dd.MM HH:mm:ss'),
        ...datasets.map(dataset => dataset[rowIdx]),
    ]);

    return {
        header,
        body,
    };
};
export const MultiColumn = Template.bind({});
MultiColumn.args = generateMultiColumnDataTable(timeChartData);
`,locationsMap:{base:{startLoc:{col:47,line:17},endLoc:{col:74,line:17},startBody:{col:47,line:17},endBody:{col:74,line:17}},"multi-column":{startLoc:{col:47,line:17},endLoc:{col:74,line:17},startBody:{col:47,line:17},endBody:{col:74,line:17}}}}},title:"Charts/Table",component:m,argTypes:{header:{table:{disable:!0}},body:{table:{disable:!0}},footer:{table:{disable:!0}}}},u=a=>l(m,{...a}),c=["red","orange","green","blue"],y=a=>{const o=a.reduce((e,t)=>e+t.value,0),n=["","\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F","\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",""],r=a.map((e,t)=>[l(d,{color:c[t]}),e.name,e.value,`${(e.value/o*100).toFixed(2)}%`]);return{header:n,body:r,footer:["","\u0418\u0442\u043E\u0433\u043E",o,""]}},g=u.bind({});g.args=y(b.data);const T=({datasets:a,times:o,labels:n})=>{const r=["time",...a.map((e,t)=>l(d,{color:c[t],children:n[t]}))],s=o.map((e,t)=>[p(new Date(e),"dd.MM HH:mm:ss"),...a.map(i=>i[t])]);return{header:r,body:s}},f=u.bind({});f.args=T(C);const v=["Base","MultiColumn"];export{g as Base,f as MultiColumn,v as __namedExportsOrder,S as default};
//# sourceMappingURL=Table.stories.f03a0ed3.js.map
