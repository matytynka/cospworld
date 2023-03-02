import costumes from '../services/costume.service.js';

export default class CostumeController {

    async getAll(req, res, next) {
        costumes.getAll().then((result) => {
            res.json(result.rows);
        });
    }
    
    async getCostumeById(req, res, next) {
        costumes.getCostumeById(req.params.id).then((result) => {
            res.json(result.rows);
        });
    }
    
    async create(req, res, next) {
        costumes.create(req.body).then((result) => {
            res.json(result);
        });
    }
    
    async deleteById(req, res, next) {
        costumes.deleteById(req.params.id).then((result) => {
            res.json(result);
        });
    }
    
    async update(req, res, next) {
        costumes.update(req.body, req.params.id).then((result) => {
            res.json(result);
        });
    }
}