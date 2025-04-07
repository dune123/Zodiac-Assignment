cube(`Metrics`, {
    sql: `SELECT * FROM metrics`,
    
    measures: {
      count: {
        type: `count`
      },
      
      totalValue: {
        sql: `value`,
        type: `sum`
      },
      
      averageValue: {
        sql: `value`,
        type: `avg`
      }
    },
    
    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true
      },
      
      name: {
        sql: `name`,
        type: `string`
      },
      
      value: {
        sql: `value`,
        type: `number`
      },
      
      timestamp: {
        sql: `timestamp`,
        type: `time`
      }
    }
  });