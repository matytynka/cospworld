import UserService from '../services/user.service.js';

export default class UserController {

    constructor() {
        this.userService = new UserService();
    }

    async register(req, res, next) {
        this.userService.register(req.body).then((result) => {
            res.json(result);
        });
    }
}