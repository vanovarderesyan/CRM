"use strict";
const { FilialDao: dao } = require("../../../dao/configs/filial.dao");

class FilialController {
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


    deleteOne(req, res) {
        dao.deleteOne(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };
}

module.exports.FilialController = new FilialController();

