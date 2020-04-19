const router = require('express').Router();
const swagger = require('./country.swagger');
const { CountryController :Controller} = require("../../../controller/controllers/configs/country.controller");
const { CountryMW : MW} = require("../../../controller/middlewares/configs/country.middleware");


swagger.getAll
router.get('/country', Controller.getAll);

swagger.getOne
router.get('/country/:Id', Controller.getOne);

swagger.update
router.put('/country', MW.update, Controller.update);

swagger.signUp
router.post('/country', MW.signUp, Controller.signUp);

swagger.deleteOne
router.delete('/country/:Id',Controller.deleteOne);
module.exports.CountryRouter = router;