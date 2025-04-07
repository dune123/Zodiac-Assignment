import React, { useEffect, useState } from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = () => {
    const [startDate,setStartDate]=useState('2023-01-01');
    const [endDate,setEndDate]=useState('2023-01-05');
    const { resultSet, isLoading, error ,refetch} = useCubeQuery({
        measures: ['Metrics.totalValue'],
        timeDimensions: [{
          dimension: 'Metrics.timestamp',
          granularity: 'day',
          dateRange: [startDate, endDate]
        }]
      });

      // Refetch data when date range changes
    useEffect(() => {
        refetch();
    }, [startDate, endDate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const LineChartdata = resultSet.chartPivot().map(item => ({
    date: item.x,
    value: item['Metrics.totalValue']
  }));
  

  return (
    <>
    <div>
        <h1>Date Range</h1>
        <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
        <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
    </div>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={LineChartdata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;