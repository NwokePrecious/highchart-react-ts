import React, { useState, useEffect } from 'react';
import { Modal, Form, FormControl } from 'react-bootstrap';
import { Options } from 'highcharts';
import { AddChartModalProps } from '../../types/index';
import { getFilteredChartDataByVisibility, updateChartToShow } from '../../utils/api';

const AddChartModal: React.FC<AddChartModalProps> = ({
  onSave,
  onClose,
  setChartDataUpdated,
}) => {
  const [hiddenCharts, setHiddenCharts] = useState<
  { key: string; data: Options }[]
>([]);
  const [selectedChart, setSelectedChart] = useState<string>('');

  useEffect(() => {
    setHiddenCharts(getFilteredChartDataByVisibility(false));
  }, []);

  const handleSave = async () => {
    if (selectedChart) {
      await updateChartToShow(selectedChart);
      const chartData = hiddenCharts.find((hc) => hc.key === selectedChart)?.data;
      if (chartData) {
        onSave({ key: selectedChart, data: chartData, show: true });
        setChartDataUpdated(true);
      }
    }
    onClose();
  };  

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Chart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Available Charts</Form.Label>
            <FormControl as="select" value={selectedChart} onChange={(e) => setSelectedChart(e.target.value)}>
              <option value="">Select a chart</option>
              {hiddenCharts.map((hc) => (
                <option key={hc.key} value={hc.key}>{hc.key}</option>
              ))}
            </FormControl>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave} disabled={!selectedChart}>
          Add
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddChartModal;
