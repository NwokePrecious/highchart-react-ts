import React, { useEffect, useState } from "react";
import { storeAllChartsToLocalStorage, getChartData } from "../../utils/api";
import { Options } from "highcharts";
import Chart from "../../components/Chart";
import DateRangeFilter from "../../components/DateRangeFilter";
import { filterDataByDateRange } from "../../utils/dateFilter";

const ViewMode: React.FC = () => {
  const [chartsData, setChartsData] = useState<{ [key: string]: Options }>({});
  const [filteredChartsData, setFilteredChartsData] = useState<{ [key: string]: Options }>({});
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    storeAllChartsToLocalStorage();
    const fetchData = async () => {
      const fetchedChartsData: { [key: string]: Options } = {};
      const chartNames = [
        "CHART_ONE",
        "CHART_TWO",
        "CHART_THREE",
        "CHART_FOUR",
        "CHART_FIVE",
      ];
      for (const chartName of chartNames) {
        const chartData = await getChartData(chartName);
        if (chartData && chartData.show) {
          fetchedChartsData[chartName] = chartData;
        }
      }
      setChartsData(fetchedChartsData);
      setFilteredChartsData(fetchedChartsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filteredData = filterDataByDateRange(chartsData, startDate, endDate);
      setFilteredChartsData(filteredData);
    } else {
      setFilteredChartsData(chartsData);
    }
  }, [startDate, endDate, chartsData]);

  const hasCharts = Object.keys(filteredChartsData).length > 0;

  return (
    <>
      {hasCharts && (
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <DateRangeFilter
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
              />
            </div>
          </div>
        </div>
      )}
      {Object.entries(filteredChartsData).map(([chartName, chartData]) => (
        <div key={chartName} className="row mt-4 justify-content-center">
          <div className="col-md-8">
            <Chart {...chartData} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewMode;