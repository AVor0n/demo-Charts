import{f as T,C as h,L as g,t as p,T as d,B as f,c as l,P as _}from"./data.2ef20629.js";import{C as b}from"./colorCell.e386b746.js";import{j as t}from"./jsx-runtime.9e933db7.js";import"./iframe.28e77ba4.js";import"./index.fc23c884.js";import"./index.ac5c11d0.js";const i=({datasets:a,times:c,labels:o,colors:s})=>{const u=["time",...a.map((e,r)=>t(b,{color:s[r],children:o[r]}))],C=c.map((e,r)=>[T(new Date(e),"dd.MM HH:mm:ss"),...a.map(y=>y[r])]);return{header:u,body:C}},n=({data:a,colors:c})=>{const o=a.reduce((e,r)=>e+r.value,0),s=["","\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F","\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",""],u=a.map((e,r)=>[t(b,{color:c[r]}),e.name,e.value,`${(e.value/o*100).toFixed(2)}%`]);return{header:s,body:u,footer:["","\u0418\u0442\u043E\u0433\u043E",o,""]}};try{i.displayName="chart2TableTimeData",i.__docgenInfo={description:"",displayName:"chart2TableTimeData",props:{datasets:{defaultValue:null,description:"",name:"datasets",required:!0,type:{name:"number[][]"}},times:{defaultValue:null,description:"",name:"times",required:!0,type:{name:"number[]"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},labels:{defaultValue:null,description:"",name:"labels",required:!0,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/utils.tsx#chart2TableTimeData"]={docgenInfo:i.__docgenInfo,name:"chart2TableTimeData",path:"src/components/table/utils.tsx#chart2TableTimeData"})}catch{}try{n.displayName="chart2TableCategoryData",n.__docgenInfo={description:"",displayName:"chart2TableCategoryData",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IChartCategoryItem[]"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/table/utils.tsx#chart2TableCategoryData"]={docgenInfo:n.__docgenInfo,name:"chart2TableCategoryData",path:"src/components/table/utils.tsx#chart2TableCategoryData"})}catch{}const P={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BarChart, Container, LineChart, PieChart, Table } from '../components';
import { chart2TableCategoryData, chart2TableTimeData } from '../components/table/utils';
import { categoryChartData, timeChartData } from '../data';

export default {
    title: 'Containers/Container',
    component: Container,
    argTypes: {
        chart: {table: {disable: true}},
        table: {table: {disable: true}},
    },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => <Container {...args} />;

export const LinearChartContainer = Template.bind({});
LinearChartContainer.args = {
    chart: <LineChart data={timeChartData} minorTicks={5}/>,
    table: <Table {...chart2TableTimeData(timeChartData)}/>,
    layout: 'row',
};

export const BarChartContainer = Template.bind({});
BarChartContainer.args = {
    chart: <BarChart data={categoryChartData}/>,
    table: <Table {...chart2TableCategoryData(categoryChartData)}/>,
    layout: 'row',
};

export const PieChartContainer = Template.bind({});
PieChartContainer.args = {
    chart: <PieChart data={categoryChartData}/>,
    table: <Table {...chart2TableCategoryData(categoryChartData)}/>,
    layout: 'row',
};
`,locationsMap:{"linear-chart-container":{startLoc:{col:51,line:15},endLoc:{col:82,line:15},startBody:{col:51,line:15},endBody:{col:82,line:15}},"bar-chart-container":{startLoc:{col:51,line:15},endLoc:{col:82,line:15},startBody:{col:51,line:15},endBody:{col:82,line:15}},"pie-chart-container":{startLoc:{col:51,line:15},endLoc:{col:82,line:15},startBody:{col:51,line:15},endBody:{col:82,line:15}}}}},title:"Containers/Container",component:h,argTypes:{chart:{table:{disable:!0}},table:{table:{disable:!0}}}},m=a=>t(h,{...a}),D=m.bind({});D.args={chart:t(g,{data:p,minorTicks:5}),table:t(d,{...i(p)}),layout:"row"};const S=m.bind({});S.args={chart:t(f,{data:l}),table:t(d,{...n(l)}),layout:"row"};const B=m.bind({});B.args={chart:t(_,{data:l}),table:t(d,{...n(l)}),layout:"row"};const R=["LinearChartContainer","BarChartContainer","PieChartContainer"];export{S as BarChartContainer,D as LinearChartContainer,B as PieChartContainer,R as __namedExportsOrder,P as default};
//# sourceMappingURL=Container.stories.0523326f.js.map
