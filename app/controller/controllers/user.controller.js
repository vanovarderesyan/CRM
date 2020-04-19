"use strict";
const { UserDao: dao } = require("../../dao/user.dao");

class UserController {
    signUp(req, res) {
        dao.signUp(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    update(req, res) {
        dao.update(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getAll(req, res) {
        dao.getAll().then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getOne(req, res) {
        dao.getOne(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };
}

module.exports.UserController = new UserController();

