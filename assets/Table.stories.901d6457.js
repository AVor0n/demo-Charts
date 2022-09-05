import{T as m,c as p,a as c,f as C,t as b}from"./data.6e7f37b3.js";import{j as l}from"./jsx-runtime.c8ef2c97.js";import"./iframe.685a89af.js";import"./index.3c140b13.js";import"./index.5c6ac396.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { format } from 'date-fns';
import { ColorCell, Table } from '../components';
import { categoryChartData, timeChartData } from '../data';
import type { CategoryChartData, TimeChartData } from '../types';

export default {
    title: 'Charts/Table',
    component: Table,
    argTypes: {},
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
`,locationsMap:{base:{startLoc:{col:47,line:13},endLoc:{col:74,line:13},startBody:{col:47,line:13},endBody:{col:74,line:13}},"multi-column":{startLoc:{col:47,line:13},endLoc:{col:74,line:13},startBody:{col:47,line:13},endBody:{col:74,line:13}}}}},title:"Charts/Table",component:m,argTypes:{}},u=e=>l(m,{...e}),d=["red","orange","green","blue"],y=e=>{const o=e.reduce((t,a)=>t+a.value,0),n=["","\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F","\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",""],r=e.map((t,a)=>[l(c,{color:d[a]}),t.name,t.value,`${(t.value/o*100).toFixed(2)}%`]);return{header:n,body:r,footer:["","\u0418\u0442\u043E\u0433\u043E",o,""]}},g=u.bind({});g.args=y(p.data);const T=({datasets:e,times:o,labels:n})=>{const r=["time",...e.map((t,a)=>l(c,{color:d[a],children:n[a]}))],s=o.map((t,a)=>[C(new Date(t),"dd.MM HH:mm:ss"),...e.map(i=>i[a])]);return{header:r,body:s}},f=u.bind({});f.args=T(b);const v=["Base","MultiColumn"];export{g as Base,f as MultiColumn,v as __namedExportsOrder,S as default};
//# sourceMappingURL=Table.stories.901d6457.js.map
