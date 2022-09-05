import { CSSProperties, FC } from 'react';
import { format } from 'date-fns';
import { LineChart, LineChartProps } from '../../lineChart';
import { TimeChartData } from '../../../types';
import { Table } from '../../table';
import { ColorCell } from '.';
import '../container.css';

interface TimeContainerProps {
    hideTable?: boolean;
    hideChart?: boolean;
    data: TimeChartData;
    chartProps: Omit<LineChartProps, keyof TimeChartData>;
    layout?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const chart2TableTimeData = ({ datasets, times, labels, colors }: TimeChartData) => {
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

export const TimeContainer: FC<TimeContainerProps> = ({
    hideTable,
    hideChart,
    layout,
    data,
    chartProps,
}) => {
    const style: CSSProperties = {
        display: 'flex',
        flexDirection: layout,
    };

    return (
        <div className="container" style={style}>
            {!hideChart && (
                <div className="container__item">
                    <LineChart {...data} {...chartProps} />
                </div>
            )}
            {!hideChart && !hideTable && <div className="container__separator" />}
            {!hideTable && (
                <div className="container__item">
                    <Table {...chart2TableTimeData(data)} />
                </div>
            )}
        </div>
    );
};

TimeContainer.defaultProps = {
    hideTable: false,
    hideChart: false,
    layout: 'row',
};
