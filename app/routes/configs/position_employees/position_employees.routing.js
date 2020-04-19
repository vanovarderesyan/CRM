const router = require('express').Router();
const swagger = require('./position_employees.swagger');
const { PositionEmployeesController: Controller } = require("../../../controller/controllers/configs/position_employees.controller");
const { PositionEmployeesMW: MW } = require("../../../controller/middlewares/configs/position_employees.middleware");


swagger.getAll
router.get('/PositionEmployees', Controller.getAll);

swagger.getOne
router.get('/PositionEmployees/:Id', Controller.getOne);

swagger.update
router.put('/PositionEmployees', MW.update, Controller.update);

swagger.signUp
router.post('/PositionEmployees', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/PositionEmployees/:Id',Controller.deleteOne);
module.exports.PositionEmployeesRouter = router;