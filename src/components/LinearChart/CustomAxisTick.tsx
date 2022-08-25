import { FC } from "react";

const CustomAxisTick: FC<any> = (props: any) => {
    const { x, y, payload, index, step, tickFormatter, visibleTicksCount } = props;
    const isMinorTick = !!(index % (step));

    // const align = index === 0? 'start': index === visibleTicksCount - 1 ? 'end': 'middle'
    return (
        <g transform={`translate(${x},${y-2})`}>
            <line
                y2={isMinorTick ? 4 : 12}
                stroke='black'
            />
            {!isMinorTick && <text
                dx={-20}
                dy={15}
                text-anchor={'end'}
                transform={'rotate(-60)'}
            >
                {tickFormatter([payload.value])}
            </text>}
        </g>
    );
};

export default CustomAxisTick
