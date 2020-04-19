"use strict";

const Schema = require("../interfaces/subcontractor.interface");
const Interface = require("../../service/interface.service");


class SubcontractorMW {
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

    static updateContracts(req, res, next) {
        req.checkInterface = Schema.updateContracts;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static filtrSubcontractor (req,res,next){
        req.checkInterface = Schema.filtrSubcontractor;
        req.checkObject = req.query;
        Interface.checker(req, next); 
    }
}

module.exports = { SubcontractorMW };