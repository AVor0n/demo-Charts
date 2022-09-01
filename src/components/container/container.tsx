import React, { CSSProperties, FC } from 'react';
import { IChartCategoryItem } from '../../types';
import { BarChart,Table } from '../../components';
import './container.css';

type CategoryChartData = IChartCategoryItem[];

const ColorCell: FC<{ color: string }> = ({ color }) => {
  const style: CSSProperties = {
    backgroundColor: color,
    width: 10,
    height: 10,
    border: '1px solid grey',
  };
  return <div style={style} />;
};
interface ContainerProps {
  hideTable?: boolean,
  hideChart?: boolean,
  data: CategoryChartData
  layout?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
}

export const Container: FC<ContainerProps> = ({ hideTable, hideChart, layout, data }) => {
  const colors = ['red', 'yellow', 'green', 'blue', 'cyan'];
  const sum = data.reduce((acc, item) => acc + item.value, 0);

  const header = ['', 'Источники', 'Количество', '%'];
  const rows = data.map((item, idx) => [
    <ColorCell color={colors[idx]} key={colors[idx]} />,
    item.name,
    item.value.toString(),
    ((item.value / sum) * 100).toFixed(2),
  ]);
  const footer = ['', 'Итого', `${sum}`, ''];

  const style:CSSProperties = {
    display: 'flex',
    flexDirection: layout,
  };

  return (
    <div className="container" style={style}>
      {!hideChart && (
        <div className="container__item">
          <BarChart data={data} colors={colors} layout="horizontal" />
        </div>
      )}
      <div className="container__separator" />
      {!hideTable && <div className="container__item"><Table header={header} body={rows} footer={footer} /></div>}
    </div>
  );
};

Container.defaultProps = {
  hideTable: false,
  hideChart: false,
  layout: 'row',
};
