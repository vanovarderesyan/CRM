const router = require('express').Router();
const swagger = require('./indoor_outdoor.swagger');
const { IndoorOutdoorController: Controller } = require("../../../controller/controllers/configs/indoor_outdoor.controller");
const { IndoorOutdoorMW: MW } = require("../../../controller/middlewares/configs/indoor_outdoor.middleware");


swagger.getAll
router.get('/indoor_outdoor', Controller.getAll);

swagger.getOne
router.get('/indoor_outdoor/:Id', Controller.getOne);

swagger.update
router.put('/indoor_outdoor', MW.update, Controller.update);

swagger.signUp
router.post('/indoor_outdoor', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/indoor_outdoor/:Id',Controller.deleteOne);
module.exports.IndoorOutdoorRouter = router;