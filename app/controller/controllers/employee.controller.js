"use strict";
const { EmployeeDao: dao } = require("../../dao/employee.dao");
const { ContactEmployeeDao } = require('../../dao/configs/contact_employee.dao');
const {ProjectDao} = require('../../dao/project.dao');
class EmployeeController {
    signUp(req, res) {
        dao.signUp(req.body).then((result) => {
            let data = {};
            data.EmployeeId = result.data.message;
            let count = 0;
            for (const iterator of req.body.Contact) {
                data.ContactTypeId = iterator.ContactTypeId;
                data.Text = iterator.Text;
                ContactEmployeeDao.signUp(data).then((resultChild) => {
                    count++;
                    if (count == req.body.Contact.length) {
                        res.status(result.statusCode).json(result.data);
                    }
                }).catch((errChild) => {
                    res.status(errChild.statusCode).json(errChild.data);
                })
            }


        }).catch((err) => {
            console.log(err)
            res.status(err.statusCode).json(err.data);
        })
    };

    signUpContact(req,res){
        dao.getOne(req.params.Id).then((result) => {
            req.body.EmployeeId = req.params.Id;
            console.log(req.body)
            ContactEmployeeDao.signUp(req.body).then((resultChild) => {
                res.status(result.statusCode).json(resultChild.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }

    update(req, res) {
        dao.update(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    updateImage(req, res) {
        console.log(req.file,'9999999999999999999999999999');
        if(!req.file){
            return  res.status(400).json({
                message : "file required (controller)"
            });
        }
        let data = {};
        data.Id = req.params.Id;
        data.Image = req.file.filename;

        dao.updateImage(data).then((result) => {
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

    getAllProjectByEmployeeId(req, res) {
        dao.getAllProjectByEmployeeId(req.params.Id).then((result) => {
            let count = 0;
            let lengthProject = result.data.message.length;
            if(lengthProject){
                for (const iterator of result.data.message) {
                    ProjectDao.getProjectComments(iterator.Id).then((comments) => {
                        count++;
                        iterator.Comments = comments.data.message;
                        if (count == lengthProject) {
                            res.status(result.statusCode).json(result.data);
                        }
                    }).catch((commentsErr) => {
                        res.status(commentsErr.statusCode).json(commentsErr.data);
                    })
                }
            }else{
                res.status(result.statusCode).json(result.data);
            }
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getOne(req, res) {
        dao.getOne(req.params.Id).then((result) => {
            dao.getContact(req.params.Id).then((resultContact) => {
                result.data.Contact = resultContact.data.message;
                res.status(result.statusCode).json(result);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getEmployeeByPositionId(req, res) {
        dao.getEmployeeByPositionId(req.params.Id).then((result) => {
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

module.exports.EmployeeController = new EmployeeController();

