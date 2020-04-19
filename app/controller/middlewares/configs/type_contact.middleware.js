"use strict";

const Schema = require("../../interfaces/configs/type_contact.interface");
const Interface = require("../../../service/interface.service");


class TypeContactMW {
    static signUp(req, res, next) {
        req.checkInterface = Schema.signUp;
        req.checkObject = req.body;
        Interface.checker(req, next);
    }

    static update(req, res, next) {
        req.checkInterface = Schema.update;
        req.checkObject = req.body;
        Interface.checker(req, next);
    }

}

module.exports = { TypeContactMW };