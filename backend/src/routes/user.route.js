import express from 'express';
import UserController from '../controllers/user.controller.js';
const router = express.Router();

const userController = new UserController();

router.post('/register', (req, res, next) => userController.register(req, res, next));

export default router;