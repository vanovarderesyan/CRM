const router = require('express').Router();
const swagger = require('./project_task.swagger');
const { ProjectTaskController: Controller } = require("../../../controller/controllers/configs/project_task.controller");
const { ProjectTaskMW: MW } = require("../../../controller/middlewares/configs/project_task.middleware");


swagger.getAll
router.get('/project_task', Controller.getAll);

swagger.getOne
router.get('/project_task/:Id', Controller.getOne);

swagger.update
router.put('/project_task', MW.update, Controller.update);

swagger.signUp
router.post('/project_task', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/project_task/:Id',Controller.deleteOne);
module.exports.ProjectTaskRouter = router;