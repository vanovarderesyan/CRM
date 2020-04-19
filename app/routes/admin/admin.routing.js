const express = require('express');
const { AdminController: Controller } = require("../../controller/controllers/admin.controller");
const { AdminMW: MW } = require("../../controller/middlewares/admin.middleware");
const router = express.Router();
//routers
const { PositionEmployeesRouter } = require("../configs/position_employees/position_employees.routing");
const { CyclicalProjectRouter } = require("../configs/cyclical_project/cyclical_project.routing");
const { SphereActivityRouter } = require("../configs/sphere_activity/sphere_activity.routing");
const { IndoorOutdoorRouter } = require("../configs/indoor_outdoor/indoor_outdoor.routing");
const { StatusProjectRouter } = require('../configs/status_project/status_project.routing');
const { SubcontractorRouter } = require("../subcontractor/subcontractor.routing");
const { FormatProjectRouter } = require("../configs/format_project/format_project.routing");
const { AreasConductRouter } = require("../configs/areas_conduct/areas_conduct.routing");
const { ProjectTaskRouter } = require("../configs/project_task/project_task.routing");
const { TypeProjectRouter } = require('../configs/type_project/type_project.routing');
const { TypeCompanyRouter } = require("../configs/type_company/type_company.routing");
const { TypeContactRouter } = require('../configs/type_contact/type_contact.routing');
const { DepartmentRouter } = require("../configs/department/department.routing");
const { PayMethodRouter } = require('../configs/pay_method/pay_method.routing');
const { TypeSaleRouter } = require('../configs/type_sale/type_sale.routing');
const { EmployeeRouter } = require("../employee/employee.routing");
const { ManagerRouter } = require("../manager/manager.routing");
const { CountryRouter } = require('../configs/country/country.routing');
const { ProjectRouter } = require('../project/project.routing');
const { CompanyRouter } = require("../company/company.routing");
const { FilialRouter } = require("../configs/filial/filial.routing");
const { CityRouter } = require("../configs/city/city.routing");
const { RoleRouter } = require("../configs/role/role.routing");
const { UserRouter } = require("../user/user.routing");






//swagger
const adminSwagger = require("./admin.swagger");

//admin router
adminSwagger.login;
router.post('/login', MW.login, Controller.login);

adminSwagger.checkToken;
router.get('/check/token', MW.tokenCheck, Controller.checkTokenIsExpired);

adminSwagger.refreshToken;
router.get('/refresh/token', MW.tokenRefresh, Controller.getNewJwtToken);

router.use(Controller.checkToken);

router.use(PositionEmployeesRouter);
router.use(CyclicalProjectRouter)
router.use(SphereActivityRouter);
router.use(IndoorOutdoorRouter);
router.use(StatusProjectRouter);
router.use(SubcontractorRouter);
router.use(FormatProjectRouter);
router.use(AreasConductRouter);
router.use(ProjectTaskRouter);
router.use(TypeContactRouter);
router.use(TypeCompanyRouter);
router.use(TypeProjectRouter);
router.use(DepartmentRouter);
router.use(PayMethodRouter);
router.use(TypeSaleRouter);
router.use(EmployeeRouter);
router.use(CompanyRouter);
router.use(CountryRouter);
router.use(ProjectRouter);
router.use(ManagerRouter);
router.use(FilialRouter);
router.use(CityRouter);
router.use(RoleRouter);
router.use(UserRouter);




module.exports = router;
