import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart: React.FC<Options> = (barChartsData) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={barChartsData}
  />
);

export default Chart;
