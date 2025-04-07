import React from 'react';
import { CubeProvider } from '@cubejs-client/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import cubejsApi from './cubejs-api';
import LineChartComponent from './components/LineChart';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import cube from "@cubejs-client/core";
import Dashboard from './components/Dashboard';
import './App.css';

const { Header, Content, Footer } = Layout;

const apiUrl = 'http://localhost:4000';
const cubeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDM4MzUzMTYsImV4cCI6MTc0MzkyMTcxNn0.4LBgHkO3mhhdl3FHMv_834dRLw3womzZOQOAggSXdi0';

const cubeApi = cube(cubeToken,{
    apiUrl: `${apiUrl}/cubejs-api/v1`
  });

function App() {
  console.log("cube js api",cubejsApi)
  return (
    <CubeProvider cubeApi={cubeApi}>
      <Router>
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/line">Line Chart</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/bar">Bar Chart</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/pie">Pie Chart</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ margin: '16px 0', minHeight: '80vh' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/line" element={<LineChartComponent />} />
                <Route path="/bar" element={<BarChartComponent />} />
                <Route path="/pie" element={<PieChartComponent />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Cube.js React Integration ©2025</Footer>
        </Layout>
      </Router>
    </CubeProvider>
  );
}

export default App;
