const express = require('express');
const router = express.Router();
const costumeController = require('../controllers/costume.controller');

/*GET*/
router.get('/', costumeController.getAll);
router.get('/:id', costumeController.getCostumeById);
/*POST*/
router.post('/', costumeController.create);
/*PUT*/
router.put('/:id', costumeController.update);
/*DELETE*/
router.delete('/:id', costumeController.deleteById);

module.exports = router;