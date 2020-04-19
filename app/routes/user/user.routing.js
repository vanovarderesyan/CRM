const router = require('express').Router();
const swagger = require('./user.swagger');
const { UserController: Controller } = require("../../controller/controllers/user.controller");
const { UserMW: MW } = require("../../controller/middlewares/user.middleware");


swagger.getAll
router.get('/user', Controller.getAll);

swagger.getOne
router.get('/user/:Id', Controller.getOne);

swagger.update
router.put('/user', MW.update, Controller.update);

swagger.signUp
router.post('/user', MW.signUp, Controller.signUp);


module.exports.UserRouter = router;