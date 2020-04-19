const router = require('express').Router();
const swagger = require('./cyclical_project.swagger');
const { CyclicalProjectController: Controller } = require("../../../controller/controllers/configs/cyclical_project.controller");
const { CyclicalProjectMW: MW } = require("../../../controller/middlewares/configs/cyclical_project.middleware");


swagger.getAll
router.get('/cyclicalProject', Controller.getAll);

swagger.getOne
router.get('/cyclicalProject/:Id', Controller.getOne);

swagger.update
router.put('/cyclicalProject', MW.update, Controller.update);

swagger.signUp
router.post('/cyclicalProject', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/cyclicalProject/:Id',Controller.deleteOne);

module.exports.CyclicalProjectRouter = router;