import cube from '@cubejs-client/core';

const apiUrl = 'http://localhost:4000';
const cubeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDM4MzUzMTYsImV4cCI6MTc0MzkyMTcxNn0.4LBgHkO3mhhdl3FHMv_834dRLw3womzZOQOAggSXdi0';

const cubejsApi = cube(cubeToken,{
    apiUrl: `${apiUrl}/cubejs-api/v1`
  });
  
  export default cubejsApi;
