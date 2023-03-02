import express from 'express';
import costumeController from '../controllers/costume.controller.js';
const router = express.Router();

/*GET*/
router.get('/', (req, res, next) => costumeController.getAll(req, res, next));
router.get('/:id', (req, res, next) => costumeController.getCostumeById(req, res, next));
/*POST*/
router.post('/', (req, res, next) => costumeController.create(req, res, next));
/*PUT*/
router.put('/:id', (req, res, next) => costumeController.update(req, res, next));
/*DELETE*/
router.delete('/:id', (req, res, next) => costumeController.deleteById(req, res, next));

export default router;