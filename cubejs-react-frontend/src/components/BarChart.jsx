import React, { useState } from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {
    const [selectedProduct,setSelectedProduct]=useState("All")
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['Metrics.totalValue'],
    dimensions: ['Metrics.name']
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const barchartdata = resultSet.chartPivot().map(item => ({
    name: item.x,
    value: item['Metrics.totalValue']
  }));

  const filteredData=selectedProduct==="All"?
  barchartdata:barchartdata.filter((item)=>item.name===selectedProduct)

  return (
    <>
    <select onChange={(e)=>setSelectedProduct(e.target.value)}>
        <option>All</option>
        {
            barchartdata.map((item)=>(
                <option>{item.name}</option>
            ))
        }
    </select>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;