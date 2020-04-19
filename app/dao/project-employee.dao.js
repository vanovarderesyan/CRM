const { ProjectEmployeeQueries: query } = require('./queries/project-employee.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class ProjectEmployeeDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.ProjectId, data.EmployeeId];
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

    deleteOne(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.EmployeeId,data.ProjectId];
            connectionPool.query(query.deleteEmployee, conditions, (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result) {
                    return resolve(RRS.create(200, result));
                } else {
                    return reject(RRS.create(204, "Not result"));
                }
            })
        });
    };

    deleteAllByProjectId(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.ProjectId];
            connectionPool.query(query.deleteEmployeeAll, conditions, (err, result) => {
                if (err) {
                    return reject(RRS.create(418, err));
                }
                if (result) {
                    return resolve(RRS.create(200, result));
                } else {
                    return reject(RRS.create(204, "Not result"));
                }
            })
        });
    };
    
    
}

module.exports.ProjectEmployeeDao = new ProjectEmployeeDao();