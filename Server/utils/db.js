import sql from 'mssql';

const config = {
    server: 'DESKTOP-APDKCP5\\SQLEXPRESS',
    database: 'HRMS_DB',
    options: {
        trustedConnection: true,
        // encrypt: true, // Uncomment if you're using Azure or require encrypted connections
    },
};


const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => console.log('Database connection failed: ', err));

export { sql, poolPromise };
