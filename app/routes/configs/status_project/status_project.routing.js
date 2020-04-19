const router = require('express').Router();
//FIXME: route status-project => status_project
const swagger = require('./status-project.swagger');
const { StatusProjectController: Controller } = require("../../../controller/controllers/configs/status_project.controller");
const { StatusProjectMW: MW } = require("../../../controller/middlewares/configs/status_project.middleware");


swagger.getAll
router.get('/status', Controller.getAll);

swagger.getOne
router.get('/status/:Id', Controller.getOne);

swagger.update
router.put('/status', MW.update, Controller.update);

swagger.signUp
router.post('/status', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/status/:Id',Controller.deleteOne);


module.exports.StatusProjectRouter = router;