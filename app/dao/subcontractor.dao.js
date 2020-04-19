const { SubcontractorQueries: query } = require('./queries/subcontractor.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class SubcontractorDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.Name, data.Surname, data.LastName, data.UserId];
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
            // com.Name = ?,
            // com.Surname = ?,
            // com.LastName = ?,
            // user.Comments = ?,
            // user.Contracts = ?,
            // user.SphereActivityId = ?
            connectionPool.query(query.update, [
                data.Name,
                data.Surname,
                data.LastName,
                data.Comments,
                data.Contracts,
                data.SphereActivityId,
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

    updateSubcontractorContracts(data) {
        return new Promise((resolve, reject) => {
            console.log(data,'------------------------------')
            connectionPool.query(query.updateSubcontractorContracts,[data.Contracts,data.SubcontractorId], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err))
                }
                console.log(result,'result---------------------')
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

    getAllProjectBySubcontractorId(Id) {
        return new Promise((resolve, reject) => {
            console.log(query.getAllProjectBySubcontractorId);
            connectionPool.query(query.getAllProjectBySubcontractorId,[Id], (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };
}

module.exports.SubcontractorDao = new SubcontractorDao();