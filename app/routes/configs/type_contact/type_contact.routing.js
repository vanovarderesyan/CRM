const router = require('express').Router();
const swagger = require('./type_contact.swagger');
const { TypeContactController: Controller } = require("../../../controller/controllers/configs/type_contact.controller");
const { TypeContactMW: MW } = require("../../../controller/middlewares/configs/type_contact.middleware");


swagger.getAll
router.get('/typeContact', Controller.getAll);

swagger.getOne
router.get('/typeContact/:Id', Controller.getOne);

swagger.update
router.put('/typeContact', MW.update, Controller.update);

swagger.signUp
router.post('/typeContact', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/typeContact/:Id',Controller.deleteOne);
module.exports.TypeContactRouter = router;