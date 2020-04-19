"use strict";
const { ProjectDao: dao } = require("../../dao/project.dao");
const { DepartmentDao } = require('../../dao/configs/department.dao');
const { ProjectManagerCompanyDao } = require('../../dao/project-manager-company.dao');
const { ProjectSubcontractorDao } = require('../../dao/project-subcontractor.dao');
const { ProjectEmployeeDao } = require('../../dao/project-employee.dao');
const { ProjectComenteDao } = require('../../dao/project-coment.dao');
let _this;

function add_business_days(days, dateParams) {
    var now = new Date(dateParams);
    var dayOfTheWeek = now.getDay();
    var calendarDays = days;
    let deliveryWeeks = '';
    var deliveryDay = dayOfTheWeek + days;
    if (deliveryDay >= 6) {
        //deduct this-week days
        days -= 6 - dayOfTheWeek;
        //count this coming weekend
        calendarDays += 2;
        //how many whole weeks?
        deliveryWeeks = Math.floor(days / 5);
        //two days per weekend per week
        calendarDays += deliveryWeeks * 2;
    }
    now.setTime(now.getTime() + calendarDays * 24 * 60 * 60 * 1000);
    return now;
}

function _getQueryByJson(json) {
    let querySting = '';
    let sphera = '';
    let dateFiltr = ''
    for (const key in json) {
        if (key == "Name" && json[key].length >= 1) {
            querySting = querySting + ` and p.Name REGEXP "^${json[key]}"  or pt.Name REGEXP "^${json[key]}" or sp.Name REGEXP "^${json[key]}" or fp.Name REGEXP "^${json[key]}" or d.Name REGEXP "^${json[key]}" or com.Denomination REGEXP "^${json[key]}" or cus.Denomination REGEXP "^${json[key]}" or ts.Name REGEXP "^${json[key]}" or tp.Name REGEXP "^${json[key]}" or sm.Name REGEXP "^${json[key]}" or dm.Name REGEXP "^${json[key]}" or wm.Name REGEXP "^${json[key]}" or projectm.Name REGEXP "^${json[key]}" or cy.Name REGEXP "^${json[key]}" or ci.Name REGEXP "^${json[key]}" or ac.Name REGEXP "^${json[key]}" or gp.Name  REGEXP "^${json[key]}" or p.CountParticipants  REGEXP "^${json[key]}" or p.Number  REGEXP "^${json[key]}"`
        } else {
            if (key.indexOf('Id') >= 0 && json[key].length > 2) {
                if (key == 'SphereActivityId') {
                    let newCondition = json[key].split('[').join().split(']').join().slice(1, -1);
                    sphera = ` and usercom.${key} in (${newCondition}) or  usercus.${key} in (${newCondition})`
                } else {
                    let newCondition = json[key].split('[').join().split(']').join().slice(1, -1);
                    querySting = querySting + ` and p.${key} in (${newCondition})`
                }
            } else if (json[key].length > 0 && key.indexOf('Id') < 0) {
                if (key == 'CountParticipantsStart') {
                    querySting = querySting + ` and p.CountParticipants >= "${json['CountParticipantsStart']}" and p.CountParticipants <= "${json['CountParticipantsEnd']}"`
                } else if (key == 'RequestDateStart') {
                    querySting = querySting + ` and p.RequestDate >= date("${json['RequestDateStart']}") and p.RequestDate <= date("${json['RequestDateEnd']}")`
                } else if (key == 'FollowUpStart') {
                    querySting = querySting + ` and p.FollowUp >= date("${json['FollowUpStart']}") and p.FollowUp <= date("${json['FollowUpEnd']}")`
                }
                else if (key == 'ProjectFinishDateStart') {
                    querySting = querySting + ` and p.ProjectFinishDate >= date("${json['ProjectFinishDateStart']}") and p.ProjectFinishDate <= date("${json['ProjectFinishDateEnd']}")`
                } else if (key == 'ProjectdateStart') {
                    var date1 = new Date(json['ProjectdateStart']);
                    var date2 = new Date(json['ProjectdateEnd']);
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    let li = []
                    for (let index = 0; index <= diffDays; index++) {
                        let finishidDate = new Date(date1.getUTCFullYear(), date1.getMonth(), date1.getUTCDate() + index + 1);
                        let mount = '';
                        if (finishidDate.getMonth() < 9) {
                            mount = `0${finishidDate.getMonth() + 1}`
                        } else if (finishidDate.getMonth() == 9) {
                            mount = `${finishidDate.getMonth() + 1}`
                        }
                        else {
                            mount = `${finishidDate.getMonth()}`
                        }
                        dateFiltr = dateFiltr + ` or position("${finishidDate.getUTCFullYear()}-${mount}-${finishidDate.getUTCDate()}" in p.Projectdate) >=1`
                    }
                    dateFiltr = dateFiltr.slice(' or'.length + 1);
                }
                else if (key != 'CountParticipantsEnd' && key != 'RequestDateEnd' && key != 'FollowUpEnd' && key != 'ProjectFinishDateEnd' && key != 'ProjectdateEnd') {
                    querySting = querySting + ` and p.${key} = "${json[key]}"`
                }
            }
        }
    }
    console.log(querySting, 'query')
    querySting = querySting.slice('and'.length + 1);
    sphera = sphera.slice('and'.length + 1);
    sphera = sphera + dateFiltr;
    if (!querySting.length && !sphera.length) {
        querySting = 'p.Id > 0'
    }
    return { querySting, sphera };
}

class ProjectController {
    constructor() {
        _this = this;
    }
    signUp(req, res) {
        console.log(req.body);
        dao.getMaxId().then((result) => {
            console.log(result.data.message[0].MaxId, '------Max---------------')
            req.body.LastInsertId = result.data.message[0].MaxId;
            DepartmentDao.getOne(req.body.DepartmentId).then((departmet) => {
                req.body.DepartmentName = departmet.data.message[0].Name;
                dao.signUp(req.body).then((resultNew) => {
                    req.body.ProjectId = result.data.message;
                    res.status(result.statusCode).json(resultNew.data);
                }).catch((err) => {
                    res.status(err.statusCode).json(err.data);
                })
            }).catch((errDep) => {

            })

        }).catch((err) => {
            console.log(err)
            res.status(err.statusCode).json(err.data);
        })
    };

    getProjectNumber(req, res) {
        console.log(req.body);
        dao.getMaxId().then((result) => {
            console.log(result.data.message[0].MaxId, '------Max---------------')
            let id = result.data.message[0].MaxId;
            if(!id){
                id = 0
            }
            let number = 0;
            if(req.body.ProjectYear == '2018'){
                number = req.body.ProjectYear + '_'+ req.body.DepartmentName[0]+'_' + (219+id);
            }else{
                number = req.body.ProjectYear + '_'+ req.body.DepartmentName[0]+'_' + (106+id);
            }
            res.status(200).json({message:number});

        }).catch((err) => {
            console.log(err)
            res.status(err.statusCode).json(err.data);
        })
    }

    deleteManager(req, res) {
        ProjectManagerCompanyDao.deleteOne(req.params).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }

    deleteSubcontractor(req, res) {
        ProjectSubcontractorDao.deleteOne(req.params).then((result) => {
            res.status(result.statusCode).json(result);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    signUpSubcontractor(req, res) {
        ProjectSubcontractorDao.signUp(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    signUpEmployee(req, res) {
        ProjectEmployeeDao.signUp(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    deleteEmployee(req, res) {
        ProjectEmployeeDao.deleteOne(req.params).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };


    update(req, res) {
        dao.getOne(req.body.Id).then((project) => {
            console.log(project.data.message[0].StatusId, '++++++++++++++++++');
            console.log(req.body.StatusId, '55555555555555555555555555555');
            if (project.data.message[0].StatusId != req.body.StatusId) {
                req.body.FollowUp = add_business_days(3, project.data.message[0].FollowUp);
            } else {
                req.body.FollowUp = project.data.message[0].FollowUp;
            }
            dao.update(req.body).then((result) => {
                res.status(result.statusCode).json(result.data);
            }).catch((err) => {
                console.log(err, '9999999999999')
                res.status(err.statusCode).json(err.data);
            })
        }).catch((errProject) => {
            res.status(errProject.statusCode).json(errProject.data);
        })
    };

    updateProjectDate(req, res) {
        dao.updateProjectDate(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };


    getProjectByQueryapp(req, res) {
        if (Object.keys(req.query).length) {

            let queryString = _getQueryByJson(req.query)
            // this [getQyeryByJson](req.query);
            console.log(queryString, 'querys.queryString,query.sphera')
            dao.getAllByQuery(queryString).then((result) => {
                let count = 0;
                let lengthProject = result.data.message.length;
                if (lengthProject) {
                    for (const iterator of result.data.message) {
                        dao.getProjectComments(iterator.Id).then((comments) => {
                            count++;
                            iterator.Comments = comments.data.message;
                            if (count == lengthProject) {
                                res.status(result.statusCode).json(result.data);
                            }
                        }).catch((commentsErr) => {
                            res.status(commentsErr.statusCode).json(commentsErr.data);
                        })
                    }
                } else {
                    res.status(result.statusCode).json(result.data);
                }

            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })

        } else {
            dao.getAll().then((result) => {
                let count = 0;
                let lengthProject = result.data.message.length;
                if (lengthProject) {
                    for (const iterator of result.data.message) {
                        dao.getProjectComments(iterator.Id).then((comments) => {
                            count++;
                            iterator.Comments = comments.data.message;
                            if (count == lengthProject) {
                                res.status(result.statusCode).json(result.data);
                            }
                        }).catch((commentsErr) => {
                            res.status(commentsErr.statusCode).json(commentsErr.data);
                        })
                    }
                } else {
                    res.status(result.statusCode).json(result.data);
                }
            }).catch((err) => {
                res.status(err.statusCode).json(err.data);
            })
        }
    };


    signUpProjectComent(req, res) {
        let data = {};
        data.ProjectId = req.body.ProjectId;
        data.Name = req.body.Name;
        data.EmployeeId = req.decodedToken.id;
        //console.log(data,'req.decodedToken.id','-----------',req.decodedToken.id)
        if (!req.decodedUsername) {
            return res.status(403).json({ message: "admin" });
        }
        dao.getOne(req.body.ProjectId).then((project) => {
            data.FollowUp = add_business_days(1, project.data.message[0].FollowUp);
            dao.updateFollowUp(data).then((results) => {
                ProjectComenteDao.signUp(data).then((result) => {
                    res.status(result.statusCode).json(result.data);
                }).catch((err) => {
                    res.status(err.statusCode).json(err.data);
                })
            }).catch((errs) => {
                res.status(errs.statusCode).json(errs.data);
            })
        }).catch((errProject) => {
            res.status(errProject.statusCode).json(errProject.data);
        })
    };



    updateProjectName(req, res) {
        dao.updateProjectName(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getAll(req, res) {
        dao.getAll().then((result) => {
            let count = 0;
            let lengthProject = result.data.message.length;
            if (lengthProject) {
                for (const iterator of result.data.message) {
                    dao.getProjectComments(iterator.Id).then((comments) => {
                        count++;
                        iterator.Comments = comments.data.message;
                        if (count == lengthProject) {
                            res.status(result.statusCode).json(result.data);
                        }
                    }).catch((commentsErr) => {
                        res.status(commentsErr.statusCode).json(commentsErr.data);
                    })
                }
            } else {
                res.status(result.statusCode).json(result.data);
            }

        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getAllByCompanyId(req, res) {
        dao.getAllByCompanyId(req.params.Id).then((result) => {
            let count = 0;
            let lengthProject = result.data.message.length;
            if (lengthProject) {
                for (const iterator of result.data.message) {
                    dao.getProjectComments(iterator.Id).then((comments) => {
                        count++;
                        iterator.Comments = comments.data.message;
                        if (count == lengthProject) {
                            res.status(result.statusCode).json(result.data);
                        }
                    }).catch((commentsErr) => {
                        res.status(commentsErr.statusCode).json(commentsErr.data);
                    })
                }
            } else {
                res.status(result.statusCode).json(result.data);
            }

        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    async _getOne(req, res) {
        // dao.getOne(req.params.Id).then((result) => {
        let result;
        let Id = req.params.Id;
        let dataClient = {};
        let dataCustomer = {};
        let resultChild;
        let resultChild2;
        let resultChild3;
        let resultChild4;
        let comment;
        result = await dao.getOne(Id);
        let project = result.data.message[0];

        dataClient.ProjectId = Id;
        dataCustomer.ProjectId = Id;
        dataClient.CompanyId = project.ClientId;
        dataCustomer.CompanyId = project.CustomerId;

        resultChild = await ProjectManagerCompanyDao.getAll(dataClient, 1);
        resultChild2 = await ProjectSubcontractorDao.getOne(Id);
        resultChild3 = await ProjectEmployeeDao.getOne(Id);
        resultChild4 = await ProjectManagerCompanyDao.getAll(dataCustomer, 0);
        comment = await ProjectComenteDao.getOne(Id);

        project.ChildManagerClient = resultChild.data.message;
        project.Subcontractor = resultChild2.data.message;
        project.Employee = resultChild3.data.message;
        project.ChildManagerCustomer = resultChild4.data.message;
        project.comment = comment.data.message;

        return result;
        // ProjectManagerCompanyDao.getAll(dataClient).then((resultChild) => {
        //     result.data.message[0].ChildManagerClient = resultChild.data.message;
        //     ProjectSubcontractorDao.getOne(req.params.Id).then((resultChild2) => {
        //         result.data.message[0].Subcontractor = resultChild2.data.message;
        //         ProjectEmployeeDao.getOne(req.params.Id).then((resultChild3) => {
        //             result.data.message[0].Employee = resultChild3.data.message;
        //             console.log(dataCustomer, '*******************')

        //             ProjectManagerCompanyDao.getAll(dataCustomer).then((resultChild4) => {
        //                 result.data.message[0].ChildManagerCustomer = resultChild4.data.message;
        //                 ProjectComenteDao.getOne(req.params.Id).then((comment) => {
        //                     result.data.message[0].comment = comment.data.message;
        //                     res.status(result.statusCode).json(result.data);
        //                 }).catch((comment) => {
        //                     res.status(comment.statusCode).json(comment.data);
        //                 })
        //             }).catch((err) => {
        //                 res.status(err.statusCode).json(err.data);
        //             })
        //         }).catch((err) => {
        //             res.status(err.statusCode).json(err.data);
        //         })
        //     }).catch((err) => {
        //         res.status(err.statusCode).json(err.data);
        //     })
        // }).catch((err) => {
        //     res.status(err.statusCode).json(err.data);
        // })
        // //res.status(result.statusCode).json(result.data);

        // }).catch((err) => {
        //     res.status(err.statusCode).json(err.data);
        // })
    };

    getOne(req, res) {
        _this._getOne(req, res).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    }
    signUpProjectManager(req, res) {
        dao.signUpManagerCompany(req.body).then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    deleteOne(req, res) {
        let data = {};
        data.ProjectId = req.params.Id;
        let deleteManagerProject = ProjectManagerCompanyDao.deleteAllByProjectId(data);
        let deleteEmployeeProject = ProjectEmployeeDao.deleteAllByProjectId(data);
        let deleteSubcontractorProject = ProjectSubcontractorDao.deleteALlByProjectId(data);

        dao.getProjectByGeneralProjectId(data).then((generalProject) => {
            if (generalProject.data.message.length) {
                generalProject.data.message = "references project";
                res.status(403).json(generalProject.data);
            } else {
                Promise.all([deleteEmployeeProject, deleteManagerProject, deleteSubcontractorProject]).then((result) => {
                    dao.deleteOne(req.params.Id).then((resultChild) => {
                        res.status(resultChild.statusCode).json(resultChild.data);
                    }).catch((err) => {
                        res.status(err.statusCode).json(err.data);
                    })
                }).catch((err) => {
                    res.status(err.statusCode).json(err.data);
                })
            }
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };

    getProjectCountInformation(req, res) {
        let data = {};
        data.ProjectId = req.params.Id;
        let countProject = dao.getProjectCount();
        let countProjectByStatusIdNewRequests = dao.getProjectCountByStatusId(req.params.newRequest);
        let countProjectByStatusIdCanceled = dao.getProjectCountByStatusId(req.params.canceled);
        let countProjectByStatusIdLost = dao.getProjectCountByStatusId(req.params.lost);
        Promise.all([countProject, countProjectByStatusIdNewRequests, countProjectByStatusIdCanceled, countProjectByStatusIdLost]).then((result) => {
            let countArray = []
            for (const iterator of result) {
                countArray.push(iterator.data.message[0])
                console.log(iterator.data.message)
            }
            res.status(result[0].statusCode).json(countArray);

        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })

    }

    getAllProjectName(req, res) {
        dao.getAllProjectName().then((result) => {
            res.status(result.statusCode).json(result.data);
        }).catch((err) => {
            res.status(err.statusCode).json(err.data);
        })
    };
}

module.exports.ProjectController = new ProjectController();

