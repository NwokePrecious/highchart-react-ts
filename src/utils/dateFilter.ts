import { FilteredChartData } from "../types/index";

export const filterDataByDateRange = (
  data: FilteredChartData,
  startDate: Date,
  endDate: Date
): FilteredChartData => {
  const filteredData: FilteredChartData = {};

  for (const chartKey in data) {
    const chartData = data[chartKey];
    const pointStart = chartData.plotOptions?.series?.pointStart ?? 2000;
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const filteredSeries = chartData.series?.map(
      (series: { data: unknown[] }) => {
        const seriesData = series.data.filter(
          (_, index) =>
            pointStart + index >= startYear &&
            pointStart + index <= endYear &&
            new Date(pointStart + index, 0, 1) >= startDate &&
            new Date(pointStart + index, 11, 31) <= endDate
        );
        return { ...series, data: seriesData };
      }
    );

    filteredData[chartKey] = {
      ...chartData,
      series: filteredSeries,
    };
  }

  return filteredData;
};
