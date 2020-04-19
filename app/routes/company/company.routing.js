const router = require('express').Router();
const swagger = require('./company.swagger');
const { CompanyController: Controller } = require("../../controller/controllers/company.controller");
const { CompanyMW: MW } = require("../../controller/middlewares/company.middleware");

//Controller.exampleGet();
swagger.getAll
router.get('/company', Controller.getAll);

swagger.getOne
router.get('/company/:Id', Controller.getOne);

swagger.update
router.put('/company',MW.update,Controller.update);

swagger.signUp
router.post('/company', MW.signUp, Controller.signUp);

swagger.signUpFilial
router.post('/company/filial',MW.signUpFilial,Controller.signUpFilial);

swagger.signUpDepartment
router.post('/company/department',MW.signUpDepartment,Controller.signUpDepartment);

swagger.signUpManager
router.post('/company/manager',MW.signUpManager,Controller.signUpManager);

swagger.signUpDepartmentFilial
router.post('/company/filial/department',MW.signUpDepartmentFilial,Controller.signUpDepartmentFilial);

swagger.signUpDepartmentManager
router.post('/company/department/manager',MW.signUpDepartmentManager,Controller.signUpDepartmentManager);

swagger.signUpFilailManager
router.post('/company/filial/manager',MW.signUpFilialManager,Controller.signUpFilialManager)

swagger.signUpContact
router.post('/company/contact/:Id',MW.signUpContact,Controller.signUpContact);

swagger.getFilialByCompanyId
router.get('/company/filial/:Id',Controller.getFilialByCompanyId);

swagger.getDepartmentByFilialId
router.get('/company/department/filial/:Id',Controller.getDepartmentByFilialId);

swagger.getManagerByCompanyId
router.get('/company/manager/:Id',Controller.getManagerByCompanyId);

swagger.getAllBySphereActivityId
router.get('/company/SphereActivityId/:Id',Controller.getAllBySphereActivityId);

swagger.searchCompany
//router.post('/company/search',MW.searchCompany, Controller.getAllBySearch);
router.get('/companys/query',MW.filtrCompany,Controller.getCompanyByQuery);

swagger.deleteOne
router.delete('/company/:Id',Controller.deleteOne);

swagger.signUpContracts
router.post('/company/contracts',MW.updateContracts,Controller.updateCompanyContracts);

router.get('/example/get',Controller.exampleGet);
module.exports.CompanyRouter = router;