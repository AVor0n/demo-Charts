import{r,j as o}from"./jsx-runtime.9e933db7.js";import{L as i,t as a}from"./data.2ef20629.js";import"./iframe.28e77ba4.js";import"./index.fc23c884.js";import"./index.ac5c11d0.js";const E={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
import { LineChart } from '../components';
import { timeChartData } from '../data';
import { TimeChartData } from '../types';

export default {
    title: 'Charts/LineChart',
    component: LineChart,
    argTypes: {
        format: { control: 'text', description: '\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0441\u0438 X' },
        minorTicks: { description: '\u0428\u0430\u0433 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 X' },
        step: { description: '\u0428\u0430\u0433, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043E\u0441\u0438 X' },
        start: { control: 'date', description: '\u041E\u0441\u044C X, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430' },
        finish: { control: 'date', description: '\u041E\u0441\u044C X, \u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430' },
        min: { description: '\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        max: { description: '\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435' },
        updateInterval: { description: '\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430, \u043C\u0441', type: 'number' },
    },
} as ComponentMeta<typeof LineChart>;

const addRandomItem = ({ datasets, times }: TimeChartData) => {
    datasets.forEach(it => {
        it.shift();
        it.push(Math.floor(Math.random() * 5000));
    });
    const timeDiff = times[1] - times[0];
    times = times.slice(1);
    times.push(times.at(-1)! + timeDiff);
    return { datasets, times };
};

const Template: ComponentStory<typeof LineChart> = args => {
    const { data, updateInterval } = args;
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (updateInterval) {
            timerRef.current = setInterval(() => {
                ({datasets: data.datasets, times: data.times} = addRandomItem(data));
            }, updateInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [updateInterval]);

    return (
        <div style={{height: 300}}>
            <LineChart
                {...args}
                data={updateInterval ? data : timeChartData}
            />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    data: timeChartData,
    format: 'dd.MM HH:mm',
    step: 5,
    minorTicks: 1,
    start: 'dataMin',
    finish: 'dataMax',
    min: 'auto',
    max: 'auto',
};

export const WithAutoUpdate = Template.bind({});
WithAutoUpdate.args = {
    data: timeChartData,
    updateInterval: 2000,
    format: 'dd.MM HH:mm',
    step: 5,
    minorTicks: 1,
    start: 'dataMin',
    finish: 'dataMax',
    min: 'auto',
    max: 'auto',
};
`,locationsMap:{base:{startLoc:{col:51,line:33},endLoc:{col:1,line:54},startBody:{col:51,line:33},endBody:{col:1,line:54}},"with-auto-update":{startLoc:{col:51,line:33},endLoc:{col:1,line:54},startBody:{col:51,line:33},endBody:{col:1,line:54}}}}},title:"Charts/LineChart",component:i,argTypes:{format:{control:"text",description:"\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0441\u0438 X"},minorTicks:{description:"\u0428\u0430\u0433 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 X"},step:{description:"\u0428\u0430\u0433, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043E\u0441\u0438 X"},start:{control:"date",description:"\u041E\u0441\u044C X, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"},finish:{control:"date",description:"\u041E\u0441\u044C X, \u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430"},min:{description:"\u041E\u0441\u044C Y, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},max:{description:"\u041E\u0441\u044C Y, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"},updateInterval:{description:"\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430, \u043C\u0441",type:"number"}}},d=({datasets:e,times:t})=>{e.forEach(n=>{n.shift(),n.push(Math.floor(Math.random()*5e3))});const u=t[1]-t[0];return t=t.slice(1),t.push(t.at(-1)+u),{datasets:e,times:t}},s=e=>{const{data:t,updateInterval:u}=e,n=r.exports.useRef();return r.exports.useEffect(()=>(n.current&&clearInterval(n.current),u&&(n.current=setInterval(()=>{({datasets:t.datasets,times:t.times}=d(t))},u)),()=>clearInterval(n.current)),[u]),o("div",{style:{height:300},children:o(i,{...e,data:u?t:a})})},m=s.bind({});m.args={data:a,format:"dd.MM HH:mm",step:5,minorTicks:1,start:"dataMin",finish:"dataMax",min:"auto",max:"auto"};const c=s.bind({});c.args={data:a,updateInterval:2e3,format:"dd.MM HH:mm",step:5,minorTicks:1,start:"dataMin",finish:"dataMax",min:"auto",max:"auto"};const D=["Base","WithAutoUpdate"];export{m as Base,c as WithAutoUpdate,D as __namedExportsOrder,E as default};
//# sourceMappingURL=LineChart.stories.2e6a1076.js.map
