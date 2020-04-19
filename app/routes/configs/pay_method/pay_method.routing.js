const router = require('express').Router();
const swagger = require('./pay_method.swagger');
const { PayMethodProjectController: Controller } = require("../../../controller/controllers/configs/pay_method.controller");
const { PayMethodMW: MW } = require("../../../controller/middlewares/configs/pay_method.middlewares");


swagger.getAll
router.get('/PayMethod', Controller.getAll);

swagger.getOne
router.get('/PayMethod/:Id', Controller.getOne);

swagger.update
router.put('/PayMethod', MW.update, Controller.update);

swagger.signUp
router.post('/PayMethod', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/PayMethod/:Id',Controller.deleteOne);

module.exports.PayMethodRouter = router;