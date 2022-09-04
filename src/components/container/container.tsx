import React, { FC } from 'react';
import './container.css';

type TimeChartData = {
  datasets: number[][],
  times: number[],
  colors: string[],
};

interface ContainerProps {
  hideTable?: boolean,
  hideChart?: boolean,
  layout?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
}

export const Container: FC<ContainerProps> = ({ hideTable, hideChart, layout }) => {

  return (
    <div>test</div>
  );
};

Container.defaultProps = {
  hideTable: false,
  hideChart: false,
  layout: 'row',
};
