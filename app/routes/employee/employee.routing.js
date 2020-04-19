const router = require('express').Router();
const swagger = require('./employee.swagger');
const { EmployeeController: Controller } = require("../../controller/controllers/employee.controller");
const { EmployeeMW: MW } = require("../../controller/middlewares/employee.middleware");
const { isImage,upload} = require('../../service/image.service');

swagger.getAll
router.get('/employee', Controller.getAll);

swagger.getOne
router.get('/employee/:Id', Controller.getOne);

swagger.update
router.put('/employee', MW.update, Controller.update);

swagger.signUp
router.post('/employee', MW.signUp, Controller.signUp);

swagger.signUpContact
router.post('/employee/contact/:Id',MW.signUpContact,Controller.signUpContact);

swagger.getByPositionId
router.get('/employee/position/:Id',Controller.getEmployeeByPositionId);

swagger.signUpImageEmployee
router.post('/employee/image/:Id',upload.single('file'),isImage,Controller.updateImage);

swagger.deleteOne
router.delete('/employee/:Id', Controller.deleteOne);

router.get('/employees/projects/:Id',Controller.getAllProjectByEmployeeId);
module.exports.EmployeeRouter = router;