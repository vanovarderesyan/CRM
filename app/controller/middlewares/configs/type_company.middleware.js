"use strict";

const { TypeCompanyInterface: Schema } = require("../../interfaces/configs/type_company.interface");
const Interface = require("../../../service/interface.service");


class TypeCompanyMw {
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

module.exports.TypeCompanyMw = TypeCompanyMw;