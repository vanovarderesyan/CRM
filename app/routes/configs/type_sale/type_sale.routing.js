const router = require('express').Router();
const swagger = require('./type_sale.swagger');
const {TypeSaleController : Controller } = require('../../../controller/controllers/configs/type_sale.controller');
const { TypeSaleMW : MW } = require("../../../controller/middlewares/configs/type_sale.middleware");


swagger.getAll
router.get('/typeSale', Controller.getAll);

swagger.getOne
router.get('/typeSale/:Id', Controller.getOne);

swagger.update
router.put('/typeSale', MW.update, Controller.update);

swagger.signUp
router.post('/typeSale', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/typeSale/:Id',Controller.deleteOne)
module.exports.TypeSaleRouter = router;