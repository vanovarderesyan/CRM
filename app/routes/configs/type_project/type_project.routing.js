const router = require('express').Router();
const swagger = require('./type_project.swagger');
const { TypeProjectController: Controller } = require("../../../controller/controllers/configs/type_project.controller");
const { TypeProjectMW: MW } = require("../../../controller/middlewares/configs/type_project.middleware");


swagger.getAll
router.get('/typeProject', Controller.getAll);

swagger.getOne
router.get('/typeProject/:Id', Controller.getOne);

swagger.update
router.put('/typeProject', MW.update, Controller.update);

swagger.signUp
router.post('/typeProject', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/typeProject/:Id',Controller.deleteOne);
module.exports.TypeProjectRouter = router;