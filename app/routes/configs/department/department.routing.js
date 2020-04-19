const router = require('express').Router();
const swagger = require('./department.swagger');
const { DepartmentController: Controller } = require("../../../controller/controllers/configs/department.controller");
const { DepartmentMW: MW } = require("../../../controller/middlewares/configs/department.middleware");


swagger.getAll
router.get('/department', Controller.getAll);

swagger.getOne
router.get('/department/:Id', Controller.getOne);

swagger.update
router.put('/department', MW.update, Controller.update);

swagger.signUp
router.post('/department', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/department/:Id',Controller.deleteOne)

module.exports.DepartmentRouter = router;