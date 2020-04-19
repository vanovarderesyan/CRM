"use strict";
const { CompanyDepartmenteDao } = require('../../dao/company-department.dao');
const { DepartmentManagereDao } = require('../../dao/department-manager.dao');
const { FilialDepartmenteDao } = require('../../dao/filial-department.dao');
const { CompanyManagereDao } = require('../../dao/company-manager.dao');
const { CompanyFilialeDao } = require('../../dao/company-filial.dao');
const { ContactCompanyDao } = require('../../dao/configs/contact_company.dao');
const { FilialManagerDao } = require('../../dao/filial-manager.dao');
const { CompanyDao: dao } = require("../../dao/company.dao");
const { DepartmentDao } = require('../../dao/configs/department.dao');
const { ManagerDao } = require('../../dao/manager.dao');
const { ProjectDao } = require('../../dao/project.dao');
const { FilialDao } = require("../../dao/configs/filial.dao");
const { UserDao } = require('../../dao/user.dao');

var _this;



function _getQueryByJson(json) {
    let querySting = '';
    for (const key in json) {
        if (key == "Name") {
            let newFirstLetter = json[key][0].toLocaleUpperCase();
            let serachWord = `${newFirstLetter}${json[key].substr(1).toLowerCase()}`
            console.log(serachWord)
            querySting = querySting + ` and com.Denomination  REGEXP "^${serachWord}"`
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
        querySting = ' and com.Denomination  REGEXP "^"'
    }
    console.log(querySting,'55555555555555')
    querySting = querySting.slice('and'.length + 1);
    return querySting;
}

class CompanyController {
    constructor(){
        _this = this;
    }
    signUp(req, res) {
        req.body.Contracts = req.body.Contracts ? req.body.Contracts : null;
        UserDao.signUp(req.body).then((user) => {
            req.body.UserId = user.data.message;
            dao.signUp(req.body).then((result) => {
                let data = {};
                data.UserId = req.body.UserId;
                let count = 0;
                if(req.body.Contact.length > 0){
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
                }else{
                    res.status(result.statusCode).json(result.data);
                }
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    async  getAllCompany(req, res) {
        let allCompany = await dao.getAll();
        let oneCompany = await dao.getOne(1)
        return { allCompany, oneCompany }
    }

    exampleGet(req, res) {
        console.log('mtav');
        _this.getAllCompany(req,res).then((result)=>{
            res.send(result)
        }).catch((err)=>{
            res.send(err)
        })
        //this.getAllCompany();
    }

    signUpFilial(req, res) {
        FilialDao.signUp(req.body).then((filial) => {
            console.log(filial)
            let data = {};
            data.CompanyId = req.body.CompanyId;
            data.FilialId = filial.data.message;
            console.log(data)
            CompanyFilialeDao.signUp(data).then((result) => {
                res.status(result.statusCode).json(filial.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }

    signUpDepartment(req, res) {
        DepartmentDao.signUp(req.body).then((department) => {
            console.log(department)
            let data = {};
            data.CompanyId = req.body.CompanyId;
            data.DepartmentId = department.data.message;
            console.log(data)
            CompanyDepartmenteDao.signUp(data).then((result) => {
                res.status(result.statusCode).json(department.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }

    signUpManager(req, res) {
        // UserDao.signUp(req.body).then((user) => {
        //     req.body.UserId = user.data.message;
        //     ManagerDao.signUp(req.body).then((manager) => {
        //         console.log(manager)
        let data = {};
        data.CompanyId = req.body.CompanyId;
        data.ManagerId = req.body.ManagerId;
        console.log(data)
        CompanyManagereDao.signUp(data).then((result) => {
            console.log(result, 'result')
            res.status(result.statusCode).json(result.data);
        }).catch((errs) => {
            console.log(errs)
            res.status(errs.statusCode).json(errs.data);
        })
        //     }).catch((err) => {
        //         res.status(err.statusCode).json(err.data);
        //     })
        // }).catch((err) => {
        //     res.status(err.statusCode).json(err.data);
        // })
    }

    signUpDepartmentFilial(req, res) {
        DepartmentDao.signUp(req.body).then((department) => {
            console.log(department)
            let data = {};
            data.FilialId = req.body.FilialId;
            data.DepartmentId = department.data.message;
            console.log(data)
            FilialDepartmenteDao.signUp(data).then((result) => {
                res.status(result.statusCode).json(department.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }

    signUpDepartmentManager(req, res) {
        // UserDao.signUp(req.body).then((user) => {
        //     req.body.UserId = user.data.message;
        //     ManagerDao.signUp(req.body).then((manager) => {
        //         console.log(manager)
        let data = {};
        data.DepartmentId = req.body.DepartmentId;
        data.ManagerId = req.body.ManagerId;
        console.log(data)
        DepartmentManagereDao.signUp(data).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
        //     }).catch((err) => {
        //         res.status(err.statusCode).json(err.data);
        //     })
        // }).catch((err) => {
        //     res.status(err.statusCode).json(err.data);
        // })
    }

    signUpFilialManager(req, res) {
        // UserDao.signUp(req.body).then((user) => {
        //     req.body.UserId = user.data.message;
        //     ManagerDao.signUp(req.body).then((manager) => {
        //         console.log(manager)
        let data = {};
        data.FilialId = req.body.FilialId;
        data.ManagerId = req.body.ManagerId;
        console.log(data)
        FilialManagerDao.signUp(data).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            console.log(err)
            res.status(err.statusCode).json(err.data);
        })
        //     }).catch((err) => {
        //         res.status(err.statusCode).json(err.data);
        //     })
        // }).catch((err) => {
        //     res.status(err.statusCode).json(err.data);
        // })
    }

    update(req, res) {
        dao.update(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    updateCompanyContracts(req, res) {
        dao.updateCompanyContracts(req.body).then((result) => {
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

    getAllBySphereActivityId(req, res) {
        dao.getAllBySphereActivityId(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };


    getAllBySearch(req, res) {
        let data = {};
        data.regexp = req.body.Regexp;
        data.SphereActivityId = req.body.SphereActivityId ? req.body.SphereActivityId : 0;
        dao.getAllBySearch(data).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getOne(req, res) {
        dao.getOne(req.params.Id).then((result) => {
            dao.getContact(req.params.Id).then((resultContact) => {
                console.log(resultContact.data.message,'--------------')
                result.data.Contact = resultContact.data.message;
                res.status(result.statusCode).json(result);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    signUpContact(req, res) {
        dao.getData(req.params.Id).then((result) => {
            console.log(result.data, '++..........................+++++++++++++++')
            let Id = result.data.message[0].UserId;
            req.body.UserId = Id;
            ContactCompanyDao.signUp(req.body).then((resultChild) => {
                res.status(result.statusCode).json(resultChild.data);
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }).catch((err) => {
            console.log(err, 'errrrrrrrrrrrrrrrrrr')
            res.status(err.statusCode).json(err.data);
        })
    }

    getFilialByCompanyId(req, res) {
        CompanyFilialeDao.getFilialByCompanyId(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getDepartmentByFilialId(req, res) {
        FilialDepartmenteDao.getDepartmentByFilialId(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getManagerByCompanyId(req, res) {
        CompanyManagereDao.getManagerByCompanyId(req.params.Id).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    deleteOne(req, res) {
        let data = { CompanyId: req.params.Id }
        ProjectDao.getProjectByCompanyId(data).then((project) => {
            if (project.data.message.length) {
                project.data.message = "Не возможно удалить!"
                res.status(403).json({message:project.data});
            } else {
                dao.deleteOne(req.params.Id).then((result) => {
                    res.status(result.statusCode).json(result.data);
                }).catch((errS) => {
                    res.status(errS.statusCode).json(errS.data);
                })
            }
        }).catch((err) => {
            console.log(err)
            res.status(err.statusCode).json(err.data);
        })
    }

    getCompanyByQuery(req, res) {
        if (Object.keys(req.query).length) {
            let queryString = _getQueryByJson(req.query)
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
    }
}

module.exports.CompanyController = new CompanyController();

