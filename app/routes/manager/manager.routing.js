const router = require('express').Router();
const swagger = require('./manager.swagger');
const { ManagerController: Controller } = require("../../controller/controllers/manager.controller");
const { ManagerMW: MW } = require("../../controller/middlewares/manager.middleware");


swagger.getAll
router.get('/manager', Controller.getAll);

swagger.getOne
router.get('/manager/:Id', Controller.getOne);

swagger.update
router.put('/manager', MW.update, Controller.update);

swagger.signUp
router.post('/manager', MW.signUp, Controller.signUp);

swagger.signUpContact
router.post('/manager/contact/:Id',MW.signUpContact,Controller.signUpContact);

swagger.deleteOne
router.delete('/manager/:Id', Controller.deleteOne);

swagger.signUpContracts
router.post('/manager/contracts',MW.updateContracts,Controller.updateManagerContracts);

router.get('/managers/query',MW.filtrManager,Controller.getManagerByQuery);
router.get('/managers/projects/:Id',Controller.getAllProjectByManagerId);


module.exports.ManagerRouter = router;