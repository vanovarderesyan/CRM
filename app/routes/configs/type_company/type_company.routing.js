const router = require('express').Router();
const swagger = require('./type_company.swagger');
const { TypeCompanyController: Controller } = require("../../../controller/controllers/configs/type_company.controller");
const { TypeCompanyMw: Mw } = require("../../../controller/middlewares/configs/type_company.middleware");


swagger.getAll
router.get('/typeCompany', Controller.getAll);

swagger.getOne
router.get('/typeCompany/:Id', Controller.getOne);

swagger.update
router.put('/typeCompany', Mw.update, Controller.update);

swagger.signUp
router.post('/typeCompany', Mw.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/typeCompany/:Id',Controller.deleteOne);
module.exports.TypeCompanyRouter = router;