const router = require('express').Router();
const swagger = require('./role.swagger');
const { RoleController: Controller } = require("../../../controller/controllers/configs/role.controller");
const { RoleMW: MW } = require("../../../controller/middlewares/configs/role.middleware");


swagger.getAll
router.get('/role', Controller.getAll);

swagger.getOne
router.get('/role/:Id', Controller.getOne);

swagger.update
router.put('/role', MW.update, Controller.update);

swagger.signUp
router.post('/role', MW.signUp, Controller.signUp);


module.exports.RoleRouter = router;