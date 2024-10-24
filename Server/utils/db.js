import sql from 'mssql';

const config = {
    server: 'DESKTOP-APDKCP5\\SQLEXPRESS',
    database: 'HRMS_DB',
    options: {
        trustedConnection: true,
        // Uncomment the following line if you're using Azure or require encrypted connections
        // encrypt: true,
        // If using self-signed certificates, uncomment the line below
        // trustServerCertificate: true,
    },
};

// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         console.log('Connected to SQL Server');
//         return pool;
//     })
//     .catch(err => {
//         console.error('Database connection failed: ', err);
//         // Optionally handle the error further, such as exiting the process
//     });

// export { sql, poolPromise }


(async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.log("Connected to DB....")
        console.dir(result)
    } catch (err) {
        console.log(err);
        // ... error checks
    }
})();