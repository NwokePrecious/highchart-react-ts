import React from "react";
import { DateRangeFilterProps } from "../../types/index";

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = event.target.valueAsNumber
      ? new Date(event.target.valueAsNumber)
      : null;
    onStartDateChange(date);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.valueAsNumber
      ? new Date(event.target.valueAsNumber)
      : null;
    onEndDateChange(date);
  };

  return (
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={startDate ? startDate.toISOString().split("T")[0] : ""}
          onChange={handleStartDateChange}
          placeholder="Start date"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={endDate ? endDate.toISOString().split("T")[0] : ""}
          onChange={handleEndDateChange}
          placeholder="End date"
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;
