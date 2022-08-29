import { FC } from 'react';

const CustomXAxisTick: FC<any> = (props: any) => {
    const { x, y, payload, index, step, tickFormatter } = props;
    const isMainTick = !(index % (step));

    return (
        <g transform={`translate(${x},${y - 2})`}>
            <line y2={isMainTick ? 12 : 4} stroke='#666666'/>

            {isMainTick && (
                <text dy={30} textAnchor={'middle'} fill='#666666'>
                    {tickFormatter(payload.value)}
                </text>
            )}
        </g>
    );
};

export default CustomXAxisTick;
