import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { ChartData, ChartSettingsModalProps } from '../../types/index';
import { updateChartData } from '../../utils/api';

const ChartSettingsModal: React.FC<ChartSettingsModalProps> = ({
  chart,
  onSave,
  onClose,
  onUpdate,
}) => {
  const [name, setName] = useState(chart ? chart.data.title.text : '');
  const [type, setType] = useState(chart ? chart.data.chart.type : 'line');

  useEffect(() => {
    if (chart) {
      setName(chart.data.title.text);
      setType(chart.data.chart.type);
    }
  }, [chart]);

  const handleSave = () => {
    const chartKey = chart?.key;
    updateChartData(chartKey, type, name);
    onSave({ ...chart, name, type });
  };

  const handleUpdate = () => {
    const updatedChart: ChartData = {
      ...chart,
      data: {
        ...chart.data,
        title: {
          ...chart.data.title,
          text: name,
        },
        chart: {
          ...chart.data.chart,
          type,
        },
      },
    };
    onUpdate(updatedChart);
  };

  useEffect(() => {
    handleUpdate();
  }, [name, type]);

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Chart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="line">Line</option>
              <option value="areaspline">Area</option>
              <option value="bar">Bar</option>
              <option value="column">Column</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChartSettingsModal;
