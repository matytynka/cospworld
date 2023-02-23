const costumes = require('../services/costume.service');

async function getAll(req, res, next) {
    costumes.getAll().then((result) => {
        res.json(result.rows);
    });
}

async function getCostumeById(req, res, next) {
    costumes.getCostumeById(req.params.id).then((result) => {
        res.json(result.rows);
    });
}

async function create(req, res, next) {
    costumes.create(req.body).then((result) => {
        res.json(result);
    })
}

async function deleteById(req, res, next) {
    costumes.deleteById(req.params.id).then((result) => {
        res.json(result);
    })
}

async function update(req, res, next) {
    costumes.update(req.body, req.params.id).then((result) => {
        res.json(result);
    })
}


module.exports = {
    getAll,
    getCostumeById,
    create,
    deleteById,
    update,
}