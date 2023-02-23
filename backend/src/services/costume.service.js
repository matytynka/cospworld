const pool = require('../queries');

let costumes = [];

async function getAll() {
    try {
        return pool.pool.query('SELECT * FROM costume');
    } catch (e) {
        console.error(e);
    }
}

async function getCostumeById(id) {
    try {
        return pool.pool.query('SELECT * FROM costume WHERE id = $1', [id])
    } catch (e) {
        console.error(e);
    }
}

async function create(costume) {
    const {name, tag, brand, description, rentalPrice, depositPrice, photo} = costume;
    try {
        return pool.pool.query(
            'INSERT INTO costume (name, tag, brand, description, rentalprice, depositprice, photo) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [name, tag, brand, description, rentalPrice, depositPrice, photo]
        );
    } catch (e) {
        console.error(e);
    }
}

async function deleteById(id) {
    try {
        return pool.pool.query('DELETE FROM costume WHERE id = $1', [id])
    } catch (e) {
        console.error(e);
    }
}

async function update(costume, id) {
    const {name, tag, brand, description, rentalPrice, depositPrice, photo} = costume;
    try {
        return await pool.pool.query(
            'UPDATE costume SET name = $1, tag = $2, brand = $3, description = $4, rentalprice = $5, depositprice = $6, photo = $7 WHERE id = $8',
            [name, tag, brand, description, rentalPrice, depositPrice, photo, id]
        );
    } catch (e) {
        console.error(e);
        //throw e;
    }
}

module.exports = {
    getAll,
    getCostumeById,
    create,
    deleteById,
    update,
}