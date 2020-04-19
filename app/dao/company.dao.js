const { CompanyQueries: query } = require('./queries/company.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class CompanyDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            data.DiscountSize = data.DiscountSize ? data.DiscountSize : '0';
            const conditions = [data.UserId, data.CompanyTypeId, data.Denomination, data.Partner, data.DiscountSize, data.CountryId, data.CityId, data.Concurent];
            connectionPool.query(query.signUp, conditions, (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result) {
                    return resolve(RRS.create(200, result.insertId));
                } else {
                    return reject(RRS.create(204, "Not result"));
                }
            })
        });
    };

    update(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.update, [
                data.CompanyTypeId,
                data.Denomination,
                data.Partner,
                data.DiscountSize,
                data.Comments,
                data.Contracts,
                data.SphereActivityId,
                data.CountryId,
                data.CityId,
                data.Concurent,
                data.Id], (err, result) => {
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
        });
    };

    getAll() {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAll, (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getData(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getOneData, [Id], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getAllBySphereActivityId(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAllBySphereActivityId, [Id], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getAllBySearch(data) {
        return new Promise((resolve, reject) => {
            if (data.SphereActivityId == 0) {
                data.keys = ' > ';
            } else {
                data.keys = ' = '
            }
            console.log(data, '++++++++++++++++++++')
            connectionPool.query(query.getAllBySearch(data.keys), [data.SphereActivityId, data.regexp], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getOne(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getOneData, [Id], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result.length) {
                    console.log('---------------1')
                    connectionPool.query(query.getCompanyRefId, [Id], (err2, result2) => {
                        if (err2) {
                            return reject(RRS.create(418, err2));
                        }
                        console.log('---------------2', result2)
                        let filialId = '('
                        let departmentId = '('
                        let managerId = '('
                        let count = 0;
                        for (const iterator of result2) {
                            count++;
                            if (count == result2.length) {
                                filialId = filialId + iterator.CompanyFilialId + ')'
                                departmentId = departmentId + iterator.CompanyDepartamentId + ')'
                                managerId = managerId + iterator.CompanyManagerId + ')'
                            } else {
                                filialId = filialId + iterator.CompanyFilialId + ','
                                departmentId = departmentId + iterator.CompanyDepartamentId + ','
                                managerId = managerId + iterator.CompanyManagerId + ','
                            }
                        }

                        console.log(filialId, departmentId, managerId);
                        let resolveObject = {};
                        resolveObject.data = result;
                        connectionPool.query(query.getFilial + filialId, (filialErr, filialResult) => {
                            if (filialErr) {
                                return reject(RRS.create(418, filialErr));
                            }
                            console.log('---------------3', filialId)

                            connectionPool.query(query.getFilialManager + filialId, (filManErr, filialMan) => {
                                if (filManErr) {
                                    return reject(RRS.create(418, filManErr));
                                }
                                connectionPool.query(query.getFilialDepartment + filialId, (filDepErr, filialDepartment) => {
                                    if (filDepErr) {
                                        return reject(RRS.create(418, filDepErr));
                                    }
                                    console.log('---------------4', filialMan)
                                    if (filialResult.length) {
                                        for (const iterator of filialResult) {
                                            let department = [];
                                            let departmentIdList = [];
                                            let managerFil = [];
                                            iterator.manager = [];
                                            console.log(filialMan, '-----*****************---------');
                                            if (filialMan.length) {
                                                console.log('*******1')

                                                for (const iterator7 of filialMan) {
                                                    if (iterator.Id == iterator7.FilialId) {
                                                        managerFil.push(iterator7);
                                                        iterator.manager = managerFil;
                                                    }
                                                }
                                            }
                                            console.log('*******2', resolveObject, 'filialDepartment', filialDepartment)

                                            for (const iterator1 of filialDepartment) {
                                                if (iterator.Id == iterator1.FilialId) {
                                                    department.push(iterator1);
                                                    departmentIdList.push(iterator1.DepartmentId)
                                                }
                                            }
                                            let querys = `${query.getDepartmentManager} (${departmentIdList.join(',')})`;
                                            console.log(querys, '5555555555')
                                            if (departmentIdList.length) {

                                                connectionPool.query(querys, (depManErr, departmentManagerResult) => {
                                                    if (depManErr) {
                                                        return reject(RRS.create(418, depManErr));
                                                    }
                                                    console.log('---------------5')
                                                    //console.log(departmentManagerResult)
                                                    for (const iterator2 of department) {
                                                        let manager = []
                                                        for (const iterator3 of departmentManagerResult) {
                                                            if (iterator2.DepartmentId == iterator3.DepartmentId) {
                                                                manager.push(iterator3)
                                                            }
                                                        }
                                                        iterator2.manager = manager;

                                                    }
                                                    iterator.department = department
                                                    iterator.departmentIdList = departmentIdList.join(',')
                                                    resolveObject.filialResult = filialResult;
                                                    connectionPool.query(query.getDepartment + departmentId, (depErr, departmentResult) => {
                                                        if (depErr) {
                                                            return reject(RRS.create(418, depErr));
                                                        }
                                                        connectionPool.query(query.getDepartmentManager + departmentId, (depErr, departmentManResult) => {
                                                            if (depErr) {
                                                                return reject(RRS.create(418, depErr));
                                                            }

                                                            //console.log(departmentManResult,'--------------9999999999')

                                                            for (const iterator6 of departmentResult) {
                                                                var managerDep = []

                                                                for (const iterator5 of departmentManResult) {
                                                                    if (iterator5.DepartmentId == iterator6.Id) {
                                                                        //console.log(iterator5,'******************')
                                                                        managerDep.push(iterator5);
                                                                        iterator6.managerDep = managerDep;
                                                                    }
                                                                }

                                                            }

                                                            //console.log(departmentResult,'-----------8888888888',managerDep)
                                                            resolveObject.departmentResult = departmentResult
                                                            connectionPool.query(query.getManager + managerId, (manErr, managerResult) => {
                                                                if (manErr) {
                                                                    return reject(RRS.create(418, manErr));
                                                                }

                                                                console.log('**************************')
                                                                resolveObject.managerResult = managerResult
                                                                return resolve(RRS.create(200, resolveObject));
                                                            })
                                                        })
                                                    })
                                                })
                                            } else {
                                                resolveObject.filialResult = filialResult;
                                                console.log('-----------------mtav-----------')
                                                connectionPool.query(query.getDepartment + departmentId, (depErr, departmentResult) => {
                                                    if (depErr) {
                                                        return reject(RRS.create(418, depErr));
                                                    }
                                                    connectionPool.query(query.getDepartmentManager + departmentId, (depErr, departmentManResult) => {
                                                        if (depErr) {
                                                            return reject(RRS.create(418, depErr));
                                                        }

                                                        //console.log(departmentManResult,'--------------9999999999')

                                                        for (const iterator6 of departmentResult) {
                                                            var managerDep = []

                                                            for (const iterator5 of departmentManResult) {
                                                                if (iterator5.DepartmentId == iterator6.Id) {
                                                                    //console.log(iterator5,'******************')
                                                                    managerDep.push(iterator5);
                                                                    iterator6.managerDep = managerDep;
                                                                }
                                                            }

                                                        }

                                                        //console.log(departmentResult,'-----------8888888888',managerDep)
                                                        resolveObject.departmentResult = departmentResult
                                                        connectionPool.query(query.getManager + managerId, (manErr, managerResult) => {
                                                            if (manErr) {
                                                                return reject(RRS.create(418, manErr));
                                                            }

                                                            console.log('**************************')
                                                            resolveObject.managerResult = managerResult
                                                            return resolve(RRS.create(200, resolveObject));
                                                        })
                                                    })
                                                })
                                            }

                                        }
                                    } else {
                                        resolveObject.filialResult = []
                                        console.log('888888888888', query.getDepartment + departmentId, '-----------------', query.getDepartmentManager + departmentId)
                                        connectionPool.query(query.getDepartment + departmentId, (depErr, departmentResult) => {
                                            if (depErr) {
                                                return reject(RRS.create(418, depErr));
                                            }
                                            console.log('departmentResult', departmentResult)
                                            connectionPool.query(query.getDepartmentManager + departmentId, (depErr, departmentManResult) => {
                                                if (depErr) {
                                                    return reject(RRS.create(418, depErr));
                                                }
                                                console.log('departmentManResult', departmentManResult)

                                                for (const iterator6 of departmentResult) {
                                                    var managerDep = []

                                                    for (const iterator5 of departmentManResult) {
                                                        if (iterator5.DepartmentId == iterator6.Id) {
                                                            //console.log(iterator5,'******************')
                                                            managerDep.push(iterator5);
                                                            iterator6.managerDep = managerDep;
                                                        }
                                                    }

                                                }
                                                // console.log(departmentResult[0].managerDep, 'departmentResult')
                                                resolveObject.departmentResult = departmentResult
                                                connectionPool.query(query.getManager + managerId, (manErr, managerResult) => {
                                                    if (manErr) {
                                                        return reject(RRS.create(418, manErr));
                                                    }
                                                    resolveObject.managerResult = managerResult
                                                    return resolve(RRS.create(200, resolveObject));
                                                })
                                            })
                                        })
                                    }

                                })
                            })
                        })
                    })
                } else {
                    return resolve(RRS.create(404, result));
                }
            })
        });
    };

    getContact(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getContact, [Id], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result.length) {
                    return resolve(RRS.create(200, result));
                }
                return resolve(RRS.create(404, result));
            })
        });
    };

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
        })
    };

    updateCompanyContracts(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.updateCompanyContracts, [data.Contracts, data.CompanyId], (err, result) => {
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

    getAllByQuery(querys) {
        return new Promise((resolve, reject) => {
            console.log(query.getAllBySearch(querys));
            connectionPool.query(query.getAllBySearch(querys), (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };
}

module.exports.CompanyDao = new CompanyDao();