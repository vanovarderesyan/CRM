const { ProjectQueries: query } = require('./queries/project.queries');
const { ProjectEmployeeQueries } = require('./queries/project-employee.queries');
const { ProjectManagerCompanyQueries } = require('./queries/project-manager-company.queries');
const { ProjectSubcontractorQueries } = require('./queries/project-subcontractor.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");
const connectionPool = require('./connection.pool').getPool();

function add_business_days(days,dateParams) {
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

class ProjectDao {
    signUp(data) {
        return new Promise((resolve, reject) => {

            let CustomerId = data.CustomerId;
            let ClientId = data.ClientId;
            let ChildManagerCustomer = data.ChildManagerCustomer;
            let ChildManagerClient = data.ChildManagerClient;
            let Employee = data.Employee;
            let Subcontractor = data.Subcontractor;
            console.log(CustomerId, ClientId);
            console.log(data.ChildManagerClient, '-------ChildManagerClient');
            console.log(data.ChildManagerCustomer, '-------ChildManagerCustomer/');
            console.log(data.Employee, '-------Employee');
            console.log(data.Subcontractor, '------Subcontractor');

            if(!data.LastInsertId){
                data.LastInsertId = 0
            }
            // if(!data.Number){
            //     data.Number = new Date().getFullYear() + data.DepartmentName[0] + data.LastInsertId;
            // }
            console.log(data.Number, '-----------------------')
            //res.send(uniqueIdProject)
            data.Name = data.Name ? data.Name : null;
            data.status = data.status ? data.status : "нови";
            data.Tender = data.Tender ? data.Tender : 1;
            data.GeneralProjectId = data.GeneralProjectId ? data.GeneralProjectId : null;
            data.SaleManagerId = data.SaleManagerId ? data.SaleManagerId : null;
            data.ManagerProjectId = data.ManagerProjectId ? data.ManagerProjectId : null;
            data.DigitalManagerId = data.DigitalManagerId ? data.DigitalManagerId : null;
            data.ScreenWriterId = data.ScreenWriterId ? data.ScreenWriterId : null;
            data.ClientId = data.ClientId ? data.ClientId : null;
            data.ProjectTaskId = data.ProjectTaskId ? data.ProjectTaskId : null;
            data.RequestDate = data.RequestDate ? data.RequestDate : null;
            data.ProjectFinishDate = data.ProjectFinishDate ? data.ProjectFinishDate : null;
            data.Projectdate = data.Projectdate ? data.Projectdate : null;
            data.ProjectDuration = data.ProjectDuration ? data.ProjectDuration : null;
            data.BudgetForClient = data.BudgetForClient ? data.BudgetForClient : null;
            data.Budget = data.Budget ? data.Budget : null;
            data.PayMethodId = data.PayMethodId ? data.PayMethodId : null;
            data.CountryId = data.CountryId ? data.CountryId : null;
            data.CityId = data.CityId ? data.CityId : null;
            data.AreaId = data.AreaId ? data.AreaId : null;
            data.IndoorOutdoorId = data.IndoorOutdoorId ? data.IndoorOutdoorId : null;

            if(data.RequestDate){
                data.FollowUp = add_business_days(5,data.RequestDate);
            }else{
                data.FollowUp = null;
            }

            //console.log(data)
            const conditions = [
                data.Name,
                data.Number,
                data.StatusId,
                data.GeneralProjectId,
                data.FormatId,
                data.Tender,
                data.CyclicityId,
                data.ClientDepartmentId,
                data.ClientId,
                data.CustomerId,
                data.SaleTypeId,
                data.ProjectTypeId,
                data.ProjectTaskId,
                data.RequestDate,
                data.ProjectFinishDate,
                data.Projectdate,
                data.ProjectDuration,
                data.FollowUp,
                data.SaleManagerId,
                data.ManagerProjectId,
                data.DigitalManagerId,
                data.ScreenWriterId,
                data.BudgetForClient,
                data.Budget,
                data.PayMethodId,
                data.CountryId,
                data.CityId,
                data.AreaId,
                data.IndoorOutdoorId,
                data.CountParticipants,
                data.ClientFilialId,
                data.ClientMainManagerId,
                data.CustomerMainManagerId,
                data.CustomerFilialId,
                data.CustomerDepartmentId,
                data.DepartmentId
            ];
            connectionPool.query(query.signUp, conditions, (err, result) => {
                //вы раньше нарушили логику алгоритма пожалуйста введите другой значения 
                if (err) {
                    if (err) {
                        if(err.code == 'ER_DUP_ENTRY'){
                            return reject(RRS.create(400, 'проект с данным номер уже существует'))
                        }else{
                            return reject(RRS.create(418, err))
                        }
                    }
                }
                if (result) {
                    let conditionsChildManagerClient = ''
                    let conditionsEmployee = ''
                    let conditionsSubcontractor = ''
                    let conditionsChildManagerCustomer = ''

                    if (data.Employee) {
                        for (const iterator of data.Employee) {
                            conditionsEmployee = conditionsEmployee + `(null,${iterator},${result.insertId}),`
                        }
                        conditionsEmployee = conditionsEmployee.substring(0, conditionsEmployee.length - 1);
                        connectionPool.query(ProjectEmployeeQueries.signUpByCondition(conditionsEmployee), (err, result) => {
                            if (err) {
                                return reject(RRS.create(418, err));
                            }
                        })
                    }

                    if (data.Subcontractor) {
                        for (const iterator of data.Subcontractor) {
                            conditionsSubcontractor = conditionsSubcontractor + `(null,${iterator},${result.insertId}),`
                        }
                        conditionsSubcontractor = conditionsSubcontractor.substring(0, conditionsSubcontractor.length - 1);
                        connectionPool.query(ProjectSubcontractorQueries.signUpCondition(conditionsSubcontractor), (err, result) => {
                            if (err) {
                                return reject(RRS.create(418, err));
                            }
                        })
                    }


                    if (data.ChildManagerCustomer) {
                        for (const iterator of data.ChildManagerCustomer) {
                            conditionsChildManagerCustomer = conditionsChildManagerCustomer + `(null,${iterator},${result.insertId},${data.CustomerId},0),`
                        }
                        conditionsChildManagerCustomer = conditionsChildManagerCustomer.substring(0, conditionsChildManagerCustomer.length - 1);
                        console.log(conditionsChildManagerCustomer,'customer')
                        connectionPool.query(ProjectManagerCompanyQueries.signUpCondition(conditionsChildManagerCustomer), (err, result) => {
                            if (err) {
                                return reject(RRS.create(418, err));
                            }
                        })
                    }

                    if (data.ChildManagerClient) {
                        for (const iterator of data.ChildManagerClient) {
                            conditionsChildManagerClient = conditionsChildManagerClient + `(null,${iterator},${result.insertId},${data.ClientId},1),`
                        }
                        conditionsChildManagerClient = conditionsChildManagerClient.substring(0, conditionsChildManagerClient.length - 1);
                        console.log(conditionsChildManagerClient,'client')
                        connectionPool.query(ProjectManagerCompanyQueries.signUpCondition(conditionsChildManagerClient), (err, result) => {
                            if (err) {
                                return reject(RRS.create(418, err));
                            }
                        })
                    }

                    console.log(conditionsChildManagerClient, '\n', conditionsEmployee, '\n', conditionsSubcontractor, '\n', conditionsChildManagerCustomer, '\n')

                    return resolve(RRS.create(200, result.insertId));
                } else {
                    return reject(RRS.create(204, "Not result"));
                }
            })
        });
    };

    update(data) {
        return new Promise((resolve, reject) => {
            let conditions = [
                data.Name,
                data.StatusId,
                data.GeneralProjectId,
                data.FormatId,
                data.Tender,
                data.CyclicityId,
                data.ClientDepartmentId,
                data.ClientId,
                data.CustomerId,
                data.SaleTypeId,
                data.ProjectTypeId,
                data.ProjectTaskId,
                data.RequestDate,
                data.ProjectFinishDate,
                data.Projectdate,
                data.ProjectDuration,
                data.FollowUp,
                data.SaleManagerId,
                data.ManagerProjectId,
                data.DigitalManagerId,
                data.ScreenWriterId,
                data.BudgetForClient,
                data.Budget,
                data.PayMethodId,
                data.CountryId,
                data.CityId,
                data.AreaId,
                data.IndoorOutdoorId,
                data.CountParticipants,
                data.ClientFilialId,
                data.ClientMainManagerId,
                data.CustomerMainManagerId,
                data.CustomerFilialId,
                data.CustomerDepartmentId,
                data.DepartmentId,
                data.Number,
                data.Id
            ]
            
            console.log(conditions,'99999999999')
            connectionPool.query(query.update, conditions, (err, result) => {
                if (err) {
                    if(err.code == 'ER_DUP_ENTRY'){
                        return reject(RRS.create(400, 'проект с данным номер уже существует'))
                    }else{
                        return reject(RRS.create(418, err))
                    }
                }
                if (result.affectedRows === 0 && result.changedRows === 0) {
                    return reject(RRS.create(404, "That field not found"));
                }
                if (result.changedRows === 0) {
                    return reject(RRS.create(204, "Already exists"));
                }
                return resolve(RRS.create(200, "Changed success"));
            })
        });
    };

    getAll() {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAll, (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getAllByCompanyId(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAllByCompanyId,[Id,Id], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getAllByQuery(querys) {
        return new Promise((resolve, reject) => {
            console.log(querys,'666666666666666666666')
            console.log(query.getAllByQuery(querys.querySting,querys.sphera));
            connectionPool.query(query.getAllByQuery(querys.querySting,querys.sphera), (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getMaxId() {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.maxId, (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };


    getProjectComments(id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getProjectComments,[id], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    updateProjectDate(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.updateProjectDate,[data.ProjectDate,data.ProjectId], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err))
                }
                if (result.affectedRows === 0 && result.changedRows === 0) {
                    return reject(RRS.create(404, "That field not found"));
                }
                if (result.changedRows === 0) {
                    return reject(RRS.create(204, "Already exists"));
                }
                return resolve(RRS.create(200, "Changed success"));
            })
        })
    }

    updateProjectName(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.updateProjectName,[data.Name,data.ProjectId], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err))
                }
                if (result.affectedRows === 0 && result.changedRows === 0) {
                    return reject(RRS.create(404, "That field not found"));
                }
                if (result.changedRows === 0) {
                    return reject(RRS.create(204, "Already exists"));
                }
                return resolve(RRS.create(200, "Changed success"));
            })
        })
    }

    getOne(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getOne, [Id], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result.length) {
                    return resolve(RRS.create(200, result));
                }
                return reject(RRS.create(404, result));
            })
        });
    };

    signUpManagerCompany(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(ProjectManagerCompanyQueries.signUp, [data.ProjectId, data.ManagerId, data.CompanyId,data.IsClient], (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    deleteOne(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.deleteOne, [Id], (err, result) => {
                if (err) {
                    if (err.code == "ER_ROW_IS_REFERENCED_2") {
                        return reject(RRS.create(403, "Не возможно удалить!"));
                    } else {
                        return reject(RRS.create(418, err));
                    }
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    getProjectByGeneralProjectId(data){
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getProject, [data.ProjectId], (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    getProjectByCompanyId(data){
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getProjectByCompanyId, [data.CompanyId,data.CompanyId], (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    getProjectCount(data){
        return new Promise((resolve, reject) => {
            connectionPool.query(query.countProject, (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    getProjectCountByStatusId(StatusId){
        return new Promise((resolve, reject) => {
            connectionPool.query(query.countProjectByStatusId, [StatusId], (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }

    getAllProjectName(){
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAllProjectName, (err, result) => {
                //console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                return resolve(RRS.create(200, result));
            })
        });
    }
    
    updateFollowUp(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.updateFollowUp,[data.FollowUp,data.ProjectId], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err))
                }
                if (result.affectedRows === 0 && result.changedRows === 0) {
                    return reject(RRS.create(404, "That field not found"));
                }
                if (result.changedRows === 0) {
                    return resolve(RRS.create(204, "Already exists"));
                }
                return resolve(RRS.create(200, "Changed success"));
            })
        })
    }
}

module.exports.ProjectDao = new ProjectDao();