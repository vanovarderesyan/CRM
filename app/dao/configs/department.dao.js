const { DepartmentQueries: query } = require('../../dao/queries/configs/department.queries');
const { RequestResultService: RRS } = require("../../service/request_result.service");

const connectionPool = require('../connection.pool').getPool();

class DepartmentDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.signUp, [data.Name], (err, result) => {
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
            connectionPool.query(query.update, [data.Name, data.Id], (err, result) => {
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
            connectionPool.query(query.getAllDepartmentId, (err, result) => {
                console.log(result)
                let departmentIdArray = [];
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if(result.length){
                    for (const iterator of result) {
                        departmentIdArray.push(iterator.DepartmentId)
                    }
                    connectionPool.query(query.getAllByQuery(departmentIdArray.toString()), (errchild, resultchild) => {
                        console.log(result)
                        if (errchild) {
                            return reject(RRS.create(418, err));
                        }
                        resolve(RRS.create(200, resultchild));
                    })
                }else{
                    connectionPool.query(query.getAll, (errchild, resultchild) => {
                        console.log(result)
                        if (errchild) {
                            return reject(RRS.create(418, err));
                        }
                        resolve(RRS.create(200, resultchild));
                    })  
                }
            })
        });
    };

    getOne(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getOne, [Id], (err, result) => {
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
                console.log(result)
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
}

module.exports.DepartmentDao = new DepartmentDao();