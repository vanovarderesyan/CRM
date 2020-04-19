"use strict";

const Schema = require("../interfaces/employee.interface");
const Interface = require("../../service/interface.service");


class EmployeeMW {
    static signUp(req, res, next) {
        req.checkInterface = Schema.signUp;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static update(req, res, next) {
        req.checkInterface = Schema.update;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpContact(req, res, next) {
        req.checkInterface = Schema.signUpContact;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

}

module.exports = { EmployeeMW };