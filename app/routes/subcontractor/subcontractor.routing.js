const router = require('express').Router();
const swagger = require('./subcontractor.swagger');
const { SubcontractorController: Controller } = require("../../controller/controllers/subcontractor.controller");
const { SubcontractorMW: MW } = require("../../controller/middlewares/subcontractor.middleware");


swagger.getAll
router.get('/subcontractor', Controller.getAll);

swagger.getOne
router.get('/subcontractor/:Id', Controller.getOne);

swagger.update
router.put('/subcontractor', MW.update, Controller.update);

swagger.signUp
router.post('/subcontractor', MW.signUp, Controller.signUp);

swagger.signUpContact
router.post('/subcontractor/contact/:Id',MW.signUpContact,Controller.signUpContact);

swagger.deleteOne
router.delete('/subcontractor/:Id', Controller.deleteOne)

swagger.signUpContracts
router.post('/subcontractor/contracts',MW.updateContracts,Controller.updateSubcontractorContracts)

router.get('/subcontractors/query',MW.filtrSubcontractor,Controller.getSubcontractorByQuery);

router.get('/subcontractors/projects/:Id',Controller.getAllProjectBySubcontractorId);
module.exports.SubcontractorRouter = router;