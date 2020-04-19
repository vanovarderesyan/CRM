"use strict";

const Schema = require("../../interfaces/configs/format_project.interface");
const Interface = require("../../../service/interface.service");

class FormatProjectMW {
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

module.exports = { FormatProjectMW };