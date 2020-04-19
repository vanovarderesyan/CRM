"use strict";

const Schema = require("../interfaces/company.interface");
const Interface = require("../../service/interface.service");


class CompanyMW {
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

    static signUpFilial(req, res, next) {
        req.checkInterface = Schema.signUpFilial;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpDepartment(req, res, next) {
        req.checkInterface = Schema.signUpDepartment;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpManager(req, res, next) {
        req.checkInterface = Schema.signUpManager;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpDepartmentFilial(req, res, next) {
        req.checkInterface = Schema.signUpDepartmentFilial;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpDepartmentManager(req, res, next) {
        req.checkInterface = Schema.signUpDepartmentManager;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpFilialManager(req, res, next) {
        req.checkInterface = Schema.signUpFilialManager;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpContact(req, res, next) {
        req.checkInterface = Schema.signUpContact;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static searchCompany(req, res, next) {
        req.checkInterface = Schema.searchCompany;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static updateContracts(req, res, next) {
        req.checkInterface = Schema.updateContracts;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static filtrCompany (req,res,next){
        req.checkInterface = Schema.filtrCompany;
        req.checkObject = req.query;
        Interface.checker(req, next); 
    }
}

module.exports = { CompanyMW };