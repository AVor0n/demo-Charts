import { FC } from "react";

const CustomAxisTick: FC<any> = (props: any) => {
    const { x, y, payload, index, step, tickFormatter } = props;
    const isMainTick = !(index % (step));

    return (
        <g transform={`translate(${x},${y - 2})`}>
            <line y2={isMainTick ? 12 : 4} stroke='black'/>

            {isMainTick && (
                <text dy={30} textAnchor={'middle'}>
                    {tickFormatter(payload.value)}
                </text>
            )}
        </g>
    );
};

export default CustomAxisTick
