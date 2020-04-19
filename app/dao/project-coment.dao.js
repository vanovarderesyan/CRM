const { ProjectComentQueries : query } = require('./queries/project-coment.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class ProjectComenteDao {
    signUp(data) {
        return new Promise((resolve, reject) => {
            const conditions = [data.ProjectId, data.EmployeeId,data.Name];
            console.log(conditions)
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

    // getAll() {
    //     return new Promise((resolve, reject) => {
    //         connectionPool.query(query.getAll, (err, result) => {
    //             console.log(result)
    //             if (err) {
    //                 return reject(RRS.create(418, err));
    //             }
    //             resolve(RRS.create(200, result));
    //         })
    //     });
    // };

    getOne(Id) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getComment, [Id], (err, result) => {
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
}

module.exports.ProjectComenteDao = new ProjectComenteDao();