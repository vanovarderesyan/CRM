const { ProjectSubcontractorQueries: query } = require('./queries/project-subcontractor.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class ProjectSubcontractorDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.ProjectId, data.SubcontractorId];
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
            const conditions = [data.SubcontractorId,data.ProjectId];
            connectionPool.query(query.deleteProjectSubcontractor, conditions, (err, result) => {
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

    deleteALlByProjectId(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.ProjectId];
            connectionPool.query(query.deleteProjectSubcontractorALl, conditions, (err, result) => {
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

module.exports.ProjectSubcontractorDao = new ProjectSubcontractorDao();