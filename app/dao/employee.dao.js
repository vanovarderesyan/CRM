const { EmployeeQueries: query } = require('./queries/employee.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");
const { hash } = require('../service/authentication.service');
const connectionPool = require('./connection.pool').getPool();
const fs = require("fs");
const PATH = require('path');

class EmployeeDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            if (data.Username == 'admin') {
                return reject(RRS.create(400, "этот логин занят, введите другой"));
            }

            data.Parol = data.Password;
            data.Password = hash(data.Password)
            data.refreshToken = hash(new Date().toDateString());
            const conditions = [data.Name, data.Surname, data.PositionId, data.Username, data.Password, data.Parol, data.refreshToken];
            connectionPool.query(query.signUp, conditions, (err, result) => {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        return reject(RRS.create(400, "этот логин занят, введите другой"));
                    } else {
                        return reject(RRS.create(418, err));
                    }
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
            if (data.Username == 'admin') {
                return reject(RRS.create(400, "этот логин занят, введите другой"));
            }

            let newQuery = '';
            let conditions = [];
            console.log(data)
            if (data.Password) {
                newQuery = query.update;
                data.Parol = data.Password;
                data.Password = hash(data.Password);
                conditions = [data.Name, data.Surname, data.Username, data.Password, data.PositionId, data.Parol, data.Id]
            } else {
                newQuery = query.updateWithoutPassword;
                conditions = [data.Name, data.Surname, data.Username, data.PositionId, data.Id]
            }
            console.log(newQuery, conditions)
            connectionPool.query(newQuery, conditions, (err, result) => {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        return reject(RRS.create(400, "этот логин занят, введите другой"));
                    } else {
                        return reject(RRS.create(418, err));
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
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    getAllProjectByEmployeeId(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAllProjectByEmployeeId, [Id, Id, Id, Id, Id], (err, result) => {
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

    updateImage(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getOne, [data.Id], (findErr, resultFind) => {
                if (findErr) {
                    return reject(RRS.create(418, findErr));
                }
                if (resultFind.length) {
                    connectionPool.query(query.updateEployeeImage, [data.Image, data.Id], (err, result) => {
                        if (err) {
                            return reject(RRS.create(418, err))
                        }
                        if (result.affectedRows === 0 && result.changedRows === 0) {
                            return reject(RRS.create(404, "That field not found"));
                        }
                        if (result.changedRows === 0) {
                            return reject(RRS.create(204, "Already exists"));
                        }

                        if (resultFind[0].Image) {
                            let filePath = PATH.join(__dirname, '..', '..', 'assets', 'image', resultFind[0].Image);
                            fs.stat(filePath, function (err, stat) {
                                if (err == null) {
                                    fs.unlinkSync(filePath);
                                    return resolve(RRS.create(200, "Changed success"));
                                } else {
                                    return resolve(RRS.create(200, "create image"));
                                }
                            });
                        } else {
                            return resolve(RRS.create(200, "create image"));
                        }


                    })
                } else {
                    return resolve(RRS.create(404, "not employee"));
                }
            })
        });
    };

    getEmployeeByPositionId(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getEmployeeByPositionId, [Id], (err, result) => {
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

    getLoggedEmployee(userName, password) {
        return new Promise((resolve, reject) => {
            console.log(query.getLoggedEmployee)
            connectionPool.query(query.getLoggedEmployee, [userName, password], (err, data) => {
                if (err) {
                    return reject(err);
                }
                if (data.length == 0) {
                    return reject()
                }
                resolve(data[0])
            });
        })
    };
}

module.exports.EmployeeDao = new EmployeeDao();