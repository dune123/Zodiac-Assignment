import React from 'react';
import { Row, Col } from 'antd';
import LineChartComponent from './LineChart';
import BarChartComponent from './BarChart';
import PieChartComponent from './PieChart';

const Dashboard = () => {
  return (
    <div>
      <h2>Metrics Dashboard</h2>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <LineChartComponent />
        </Col>
        <Col span={12}>
          <BarChartComponent />
        </Col>
        <Col span={12}>
          <PieChartComponent />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;