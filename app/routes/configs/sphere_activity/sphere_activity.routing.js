const router = require('express').Router();
const swagger = require('./sphere_activity.swagger');
const { SphereActivityController: Controller } = require("../../../controller/controllers/configs/sphere_activity.controller");
const { SphereActivityMW: MW } = require("../../../controller/middlewares/configs/sphere_activity.middleware");


swagger.getAll
router.get('/sphereActivity', Controller.getAll);

swagger.getOne
router.get('/sphereActivity/:Id', Controller.getOne);

swagger.update
router.put('/sphereActivity', MW.update, Controller.update);

swagger.signUp
router.post('/sphereActivity', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/sphereActivity/:Id',Controller.deleteOne)
module.exports.SphereActivityRouter = router;