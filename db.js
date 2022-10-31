const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '26080302',
    host: 'localhost',
    port: 5432,
    database: 'node_first'
});

module.exports = pool;