import pkg from 'pg';
const { Pool } = pkg;

export default new Pool({
    user: 'cospworld',
    host: 'localhost',
    database: 'cospworld',
    password: 'cospworld',
    port: 5432,
});