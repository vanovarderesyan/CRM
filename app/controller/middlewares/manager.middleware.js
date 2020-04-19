"use strict";

const Schema = require("../interfaces/manager.interface");
const Interface = require("../../service/interface.service");


class ManagerMW {
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

    static filtrManager (req,res,next){
        req.checkInterface = Schema.filtrManager;
        req.checkObject = req.query;
        Interface.checker(req, next); 
    }
}

module.exports = { ManagerMW };