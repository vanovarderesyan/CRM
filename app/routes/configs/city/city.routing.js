const router = require('express').Router();
const swagger = require('./city.swagger');
const { CityController: Controller } = require("../../../controller/controllers/configs/city.controller");
const { CityMW: MW } = require("../../../controller/middlewares/configs/city.middleware");


swagger.getAll
router.get('/city', Controller.getAll);

swagger.getOne
router.get('/city/:Id', Controller.getOne);

swagger.update
router.put('/city', MW.update, Controller.update);

swagger.signUp
router.post('/city', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/city/:Id',Controller.deleteOne);
module.exports.CityRouter = router;