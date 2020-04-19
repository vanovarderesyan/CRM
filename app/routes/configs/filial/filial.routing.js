const router = require('express').Router();
const swagger = require('./filial.swagger');
const { FilialController: Controller } = require("../../../controller/controllers/configs/filial.controller");
const { FilialMW: MW } = require("../../../controller/middlewares/configs/filial.middleware");


swagger.getAll
router.get('/filial', Controller.getAll);

swagger.getOne
router.get('/filial/:Id', Controller.getOne);

swagger.update
router.put('/filial', MW.update, Controller.update);

swagger.signUp
router.post('/filial', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/filial/:Id',Controller.deleteOne);

module.exports.FilialRouter = router;