const router = require('express').Router();
const swagger = require('./format_project.swagger');
const { FormatProjectController: Controller } = require("../../../controller/controllers/configs/format_project.controller");
const { FormatProjectMW: MW } = require("../../../controller/middlewares/configs/format_project.middleware");


swagger.getAll
router.get('/formatProject', Controller.getAll);

swagger.getOne
router.get('/formatProject/:Id', Controller.getOne);

swagger.update
router.put('/formatProject', MW.update, Controller.update);

swagger.signUp
router.post('/formatProject', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/formatProject/:Id',Controller.deleteOne);
module.exports.FormatProjectRouter = router;