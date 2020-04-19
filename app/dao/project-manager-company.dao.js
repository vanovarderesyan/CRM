const { ProjectManagerCompanyQueries: query } = require('./queries/project-manager-company.queries');
const { RequestResultService: RRS } = require("../service/request_result.service");

const connectionPool = require('./connection.pool').getPool();

class ProjectManagerCompanyDao {

    getAll(data,IsClient) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.getAllByProjectAndCompanyId,[data.ProjectId,data.CompanyId,IsClient], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    deleteOne(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.deleteProjectManagerCompany,[data.CompanyId,data.ManagerId,data.ProjectId,data.IsClient], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };

    deleteAllByProjectId(data) {
        return new Promise((resolve, reject) => {
            connectionPool.query(query.deleteProjectManagerCompanyAll,[data.ProjectId], (err, result) => {
                console.log(result)
                if (err) {
                    return reject(RRS.create(418, err));
                }
                resolve(RRS.create(200, result));
            })
        });
    };


    // getOne(Id) {
    //     return new Promise((resolve, reject) => {
    //         connectionPool.query(query.getOne, [Id], (err, result) => {
    //             console.log(result)
    //             if (err) {
    //                 return reject(RRS.create(418, err));
    //             }
    //             if (result.length) {
    //                 return resolve(RRS.create(200, result));
    //             }
    //             return resolve(RRS.create(404, result));
    //         })
    //     });
    // };
}

module.exports.ProjectManagerCompanyDao = new ProjectManagerCompanyDao();