
"use strict";

const { PayMethodsProjectInterface: Schema } = require("../../interfaces/configs/pay_method.interface");
const Interface = require("../../../service/interface.service");


class PayMethodMW {

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

}

module.exports = { PayMethodMW };