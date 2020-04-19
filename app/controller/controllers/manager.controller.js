"use strict";
const { ManagerDao: dao } = require("../../dao/manager.dao");
const { ContactCompanyDao } = require('../../dao/configs/contact_company.dao');
const { ProjectDao } = require('../../dao/project.dao');

const { UserDao } = require('../../dao/user.dao');

function _getQueryByJson(json) {
    let querySting = '';
    for (const key in json) {
        if (key == "Name") {
            let newFirstLetter = json[key][0].toLocaleUpperCase();
            let serachWord = `${newFirstLetter}${json[key].substr(1).toLowerCase()}`
            console.log(serachWord)
            querySting = querySting + ` and com.${key}  REGEXP "^${serachWord}"`
        } else {
            if(key.indexOf('Id')>=0 && json[key].length>2){
                let newCondition = json[key].split('[').join().split(']').join().slice(1,-1);
                console.log(newCondition,'++++++++++++')
                querySting = querySting + ` and user.${key} in  (${newCondition})`  
            }else if(json[key].length > 0 && key.indexOf('Id')<0){
                querySting = querySting + ` and user.${key} = "${json[key]}"`  
            } 
        }
    }
    if(querySting.length == 0){
        querySting = ' and com.Name  REGEXP "^"'
    }
    querySting = querySting.slice('and'.length + 1);
    return querySting;
}

class ManagerController {
    signUp(req, res) {
        req.body.Contracts = req.body.Contracts ? req.body.Contracts : null
        UserDao.signUp(req.body).then((user) => {
            req.body.UserId = user.data.message;
            dao.signUp(req.body).then((result) => {
                let data = {};
                data.UserId = req.body.UserId;
                let count = 0;
                for (const iterator of req.body.Contact) {
                    data.ContactTypeId = iterator.ContactTypeId;
                    data.Text = iterator.Text;
                    ContactCompanyDao.signUp(data).then((resultChild) => {
                        count++;
                        console.log(count, count == req.body.Contact.length)
                        if (count == req.body.Contact.length) {
                            res.status(result.statusCode).json(result.data);
                        }
                    }).catch((err) => {
                        res.status(err.statusCode).json(err.data);
                    })
                }
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
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

    updateManagerContracts(req, res) {
        dao.updateManagerContracts(req.body).then((result) => {
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

    getAllProjectByManagerId(req, res) {
        dao.getAllProjectByManagerId(req.params.Id).then((result) => {
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


    signUpContact(req, res) {
        dao.getOne(req.params.Id).then((result) => {
            let Id = result.data.message[0].UserId;
            req.body.UserId = Id;
            ContactCompanyDao.signUp(req.body).then((resultChild) => {
                res.status(result.statusCode).json(resultChild.data);
            }).catch((errChild) => {
                res.status(errChild.statusCode).json(errChild.data);
            })
        }).catch((err) => {
            console.log(err, '*************************')
            res.status(err.statusCode).json(err.data);
        })
    }

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


    deleteOne(req, res) {
        dao.deleteOne(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getManagerByQuery(req, res) {
        console.log('getttttttttttttttttttttt')
        if (Object.keys(req.query).length) {
            let queryString = _getQueryByJson(req.query)
            console.log(queryString, '----------------------------')
            dao.getAllByQuery(queryString).then((result) => {
                res.status(result.statusCode).json(result.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })

        } else {
            dao.getAll().then((result) => {
                res.status(result.statusCode).json(result.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }
    };

}

module.exports.ManagerController = new ManagerController();

