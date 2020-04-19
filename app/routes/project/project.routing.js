const router = require('express').Router();
const swagger = require('./project.swagger');
const { ProjectController : Controller} = require("../../controller/controllers/project.controller");
const { ProjectMW: MW } = require("../../controller/middlewares/project.middleware");
var Joi = require('joi')

swagger.getAll
router.get('/project', Controller.getAll);

swagger.getOne
router.get('/project/:Id', Controller.getOne);

swagger.update
router.put('/project', MW.update, Controller.update);

swagger.signUp
router.post('/project', MW.signUp, Controller.signUp);

swagger.signUpCompanyManager
router.post('/project/company/manager',MW.signUpProjectManagerCompany,Controller.signUpProjectManager)

swagger.signUpSubcontractor
router.post('/project/subcontractor',MW.signUpSubcontractor,Controller.signUpSubcontractor);

swagger.signUpEmployee
router.post('/project/employee',MW.signUpEmployee,Controller.signUpEmployee);

swagger.deleteManager
router.delete('/project/company/manager/:ProjectId/:ManagerId/:CompanyId/:IsClient',Controller.deleteManager);

swagger.deleteSubcontractor
router.delete('/project/subcontractor/:ProjectId/:SubcontractorId',Controller.deleteSubcontractor);

swagger.deleteEmployee
router.delete('/project/employee/:ProjectId/:EmployeeId',Controller.deleteEmployee);

swagger.signUpProjectDate
router.put('/project/date',MW.signUpProjectDate,Controller.updateProjectDate);

swagger.updateProjectName
router.put('/project/name',MW.updateProjectName,Controller.updateProjectName);

swagger.deleteOne
router.delete('/project/:Id',Controller.deleteOne);

swagger.projectCountInformation
router.get('/project/countInformation/:newRequest/:canceled/:lost',Controller.getProjectCountInformation);

swagger.getAllName
router.get('/projects/name',Controller.getAllProjectName);

router.post('/project/comment',MW.signUpProjectComment,Controller.signUpProjectComent);

router.get('/projects/query',MW.projectFiltr,Controller.getProjectByQueryapp);

router.get('/projects/company/:Id',Controller.getAllByCompanyId);

router.post('/project/number',MW.getProjectNumber,Controller.getProjectNumber);
module.exports.ProjectRouter = router;