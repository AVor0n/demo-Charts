import{r as a,j as f}from"./jsx-runtime.719826b6.js";import{L as r,t as C}from"./data.bc3a4329.js";import"./iframe.acb9611b.js";import"./index.5059dc98.js";import"./index.728e3f25.js";const v={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
import { LineChart, LineChartProps } from '../components';
import { timeChartData } from '../data';

export default {
    title: 'Charts/LineChart',
    component: LineChart,
    argTypes: {
        format: { control: 'text', description: '\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0441\u0438 X' },
        data: { table: { disable: true } },
        minorTicks: { description: '\u0428\u0430\u0433 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 X' },
        step: { description: '\u0428\u0430\u0433, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043E\u0441\u0438 X' },
        keys: { description: '\u041C\u0430\u0441\u0441\u0438\u0432 \u043A\u043B\u044E\u0447\u0435\u0439' },
        start: { control: 'date', description: '\u041E\u0441\u044C X, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430' },
        finish: { control: 'date', description: '\u041E\u0441\u044C X, \u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430' },
        labels: { description: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435' },
        min: { description: '\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        max: { description: '\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        colors: { description: '\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432' },
        updateInterval: { description: '\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430, \u043C\u0441', type: 'number' },
    },
} as ComponentMeta<typeof LineChart>;

type LineChartData = {
    datasets: LineChartProps['datasets'],
    times: LineChartProps['times']
}
const addRandomItem = ({datasets, times}: LineChartData): LineChartData => {
    datasets.forEach(it => {
        it.shift();
        it.push(Math.floor(Math.random() * 5000));
    });
    const timeDiff = times[1] - times[0];
    times = times.slice(1);
    times.push(times.at(-1)! + timeDiff);
    return {datasets, times};
};

const Template: ComponentStory<typeof LineChart> = args => {
    let { datasets, times, updateInterval } = args;
    const initDatasets = structuredClone(datasets);
    const initTimes = structuredClone(times);
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (updateInterval) {
            timerRef.current = setInterval(() => {
                ({datasets, times} = addRandomItem({datasets, times}));
            }, updateInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [updateInterval]);

    return (
        <LineChart
            {...args}
            datasets={updateInterval ? datasets : initDatasets}
            times={updateInterval ? times : initTimes}
        />
    );
};

const {datasets, times, colors, labels} = timeChartData;

export const Base = Template.bind({});
Base.args = {
    datasets,
    times,
    colors,
    labels,
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};

export const WithAutoUpdate = Template.bind({});
WithAutoUpdate.args = {
    datasets,
    times,
    colors,
    labels,
    updateInterval: 2000,
    format: 'dd.MM HH:mm',
    minorTicks: 1,
    step: 5,
};
`,locationsMap:{base:{startLoc:{col:51,line:40},endLoc:{col:1,line:62},startBody:{col:51,line:40},endBody:{col:1,line:62}},"with-auto-update":{startLoc:{col:51,line:40},endLoc:{col:1,line:62},startBody:{col:51,line:40},endBody:{col:1,line:62}}}}},title:"Charts/LineChart",component:r,argTypes:{format:{control:"text",description:"\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0441\u0438 X"},data:{table:{disable:!0}},minorTicks:{description:"\u0428\u0430\u0433 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 X"},step:{description:"\u0428\u0430\u0433, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043E\u0441\u0438 X"},keys:{description:"\u041C\u0430\u0441\u0441\u0438\u0432 \u043A\u043B\u044E\u0447\u0435\u0439"},start:{control:"date",description:"\u041E\u0441\u044C X, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"},finish:{control:"date",description:"\u041E\u0441\u044C X, \u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430"},labels:{description:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0439, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435"},min:{description:"\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},max:{description:"\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},colors:{description:"\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432"},updateInterval:{description:"\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430, \u043C\u0441",type:"number"}}},h=({datasets:n,times:t})=>{n.forEach(u=>{u.shift(),u.push(Math.floor(Math.random()*5e3))});const e=t[1]-t[0];return t=t.slice(1),t.push(t.at(-1)+e),{datasets:n,times:t}},i=n=>{let{datasets:t,times:e,updateInterval:u}=n;const p=structuredClone(t),l=structuredClone(e),s=a.exports.useRef();return a.exports.useEffect(()=>(s.current&&clearInterval(s.current),u&&(s.current=setInterval(()=>{({datasets:t,times:e}=h({datasets:t,times:e}))},u)),()=>clearInterval(s.current)),[u]),f(r,{...n,datasets:u?t:p,times:u?e:l})},{datasets:o,times:d,colors:c,labels:m}=C,E=i.bind({});E.args={datasets:o,times:d,colors:c,labels:m,format:"dd.MM HH:mm",minorTicks:1,step:5};const D=i.bind({});D.args={datasets:o,times:d,colors:c,labels:m,updateInterval:2e3,format:"dd.MM HH:mm",minorTicks:1,step:5};const T=["Base","WithAutoUpdate"];export{E as Base,D as WithAutoUpdate,T as __namedExportsOrder,v as default};
//# sourceMappingURL=LineChart.stories.b5fed717.js.map
