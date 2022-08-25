import { FC } from "react";

const CustomAxisTick: FC<any> = (props: any) => {
    const { x, y, payload, index, step, tickFormatter, visibleTicksCount } = props;

    // const isFirstTick = index === 0;
    // const isLastTick = index === visibleTicksCount - 1;
    const isMainTick = !(index % (step));

    // const align = isFirstTick ? 'start' : isLastTick ? 'end' : 'middle'
    return (
        <g transform={`translate(${x},${y - 2})`}>
            <line
                y2={isMainTick ? 12 : 4}
                stroke='black'
            />
            {isMainTick && (
                <text dy={30} textAnchor={'middle'}>
                    {tickFormatter(payload.value)}
                </text>
            )}
        </g>
    );
};

export default CustomAxisTick
