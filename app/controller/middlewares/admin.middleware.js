"use strict";

const Schema = require("../interfaces/admin.interface");
const Interface = require("../../service/interface.service");


class AdminMW {
    static login(req, res, next) {
        req.checkInterface = Schema.login;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static tokenCheck(req, res, next) {
        req.checkInterface = Schema.TokenCheckSchema;
        req.checkObject = {
            token: req.headers.token
        };
        Interface.checker(req, next);
    };

    static tokenRefresh(req, res, next) {
        req.checkInterface = Schema.TokenRefreshSchema;
        req.checkObject = {
            token: req.headers.token,
            refreshToken: req.headers.refreshtoken
        };
        Interface.checker(req, next);
    };
}

module.exports = { AdminMW };