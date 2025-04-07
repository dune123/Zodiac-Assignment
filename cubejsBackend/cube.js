// Cube configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
module.exports = {
    dbType: 'postgres',
    apiSecret: process.env.CUBEJS_API_SECRET,
    schemaPath: './schema',
    driverFactory: ({ dataSource }) => {
      if (dataSource === 'default') {
        return {
          type: process.env.CUBEJS_DB_TYPE,
          database:process.env.CUBEJS_DB_NAME, 
          host: 'localhost',
          user: 'postgres', 
          password:process.env.CUBEJS_DB_PASS, 
          port: 5435,
        };
      }
      throw new Error('Unknown dataSource');
    }
  };