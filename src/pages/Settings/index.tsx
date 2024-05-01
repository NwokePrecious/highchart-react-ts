import React, { useState, useEffect } from "react";
import EditChartSettingsModal from "../../components/EditChartSettingsModal";
import AddChartModal from "../../components/AddChartModal/index";
import { Table, Button } from "react-bootstrap";
import {
  getFilteredChartDataByVisibility,
  ChartData,
  updateChartToShow,
} from "../../utils/api";
import { Options } from "highcharts";

const Settings: React.FC = () => {
  const [shownCharts, setShownCharts] = useState<
  { key: string; data: Options }[]
>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedChartIndex, setEditedChartIndex] = useState<number | null>(null);

  const [chartDataUpdated, setChartDataUpdated] = useState(false);

  useEffect(() => {
    setShownCharts(getFilteredChartDataByVisibility());
    setChartDataUpdated(false);
  }, [chartDataUpdated]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (index: number) => {
    setEditedChartIndex(index);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const saveChartSettings = (chart: ChartData) => {
    closeModal();
  };

  const handleUpdate = (chart:  { key: string; data: Options }) => {
    const chartData = { key: chart.key, data: chart.data };
  const index = shownCharts.findIndex((c) => c.key === chart.key);
  if (index !== -1) {
    setShownCharts([...shownCharts.slice(0, index), chartData, ...shownCharts.slice(index + 1)]);
  } else {
    setShownCharts([...shownCharts, chartData]);
  }
  };

  const toggleChartVisibility = async (key: string) => {
    await updateChartToShow(key);
    setShownCharts(getFilteredChartDataByVisibility());
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Chart Title</th>
            <th>Chart Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shownCharts.map((chart, index) => (
            <tr key={chart.key}>
              <td>{chart.key}</td>
              <td>{chart.data.title.text}</td>
              <td>{chart.data.chart.type}</td>
              <td>
                <Button variant="primary" onClick={() => openEditModal(index)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => toggleChartVisibility(chart.key)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={openAddModal}>
        Add Chart
      </Button>
      {isAddModalOpen && (
        <AddChartModal onSave={saveChartSettings} onClose={closeModal} setChartDataUpdated={setChartDataUpdated} />

      )}
      {isEditModalOpen && (
        <EditChartSettingsModal
          chart={
            editedChartIndex !== null
              ? shownCharts[editedChartIndex]
              : undefined
          }
          onSave={saveChartSettings}
          onClose={closeModal}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default Settings;

