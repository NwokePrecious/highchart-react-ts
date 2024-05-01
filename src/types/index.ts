import { Options } from "highcharts";

export interface FilteredChartData {
  [key: string]: Options;
}

export interface ChartData {
  name: string;
  data: Options;
  show: boolean;
}

export type AddChartModalProps = {
  onSave: (chart: ChartData) => void;
  onClose: () => void;
  setChartDataUpdated: () => void;
};

export type ChartSettingsModalProps = {
  chart?: ChartData;
  onSave: (chart: ChartData) => void;
  onClose: () => void;
  onUpdate: (chart: ChartData) => void;
};

export type DateRangeFilterProps = {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
};
