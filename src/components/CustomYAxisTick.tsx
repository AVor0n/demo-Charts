import { FC } from 'react';

const CustomYAxisTick: FC<any> = (props: any) => {
    const { x, y, payload, index, step, tickFormatter } = props;
    const isMainTick = !(index % step);

    return (
        <g transform={`translate(${x + 2},${y})`}>
            <line x2={isMainTick ? -12 : -4} stroke="#666666" />

            {isMainTick && (
                <text dx={-15} alignmentBaseline='middle' textAnchor={'end'} fill="#666666">
                    {tickFormatter(payload.value)}
                </text>
            )}
        </g>
    );
};

export default CustomYAxisTick;
