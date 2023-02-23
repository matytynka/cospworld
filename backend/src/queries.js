const Pool = require('pg').Pool
const pool = new Pool({
    user: 'cospworld',
    host: 'localhost',
    database: 'cospworld',
    password: 'cospworld',
    port: 5432,
});

module.exports = {
    pool,
}