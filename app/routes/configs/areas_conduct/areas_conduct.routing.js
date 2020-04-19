const router = require('express').Router();
const swagger = require('./areas_conduct.swagger');
const { AreasConductController: Controller } = require("../../../controller/controllers/configs/areas_conduct.controller");
const { AreasConductMW: MW } = require("../../../controller/middlewares/configs/areas_conduct.middleware");


swagger.getAll
router.get('/areas_conduct', Controller.getAll);

swagger.getOne
router.get('/areas_conduct/:Id', Controller.getOne);

swagger.update
router.put('/areas_conduct', MW.update, Controller.update);

swagger.signUp
router.post('/areas_conduct', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/areas_conduct/:Id',Controller.deleteOne);


module.exports.AreasConductRouter = router;