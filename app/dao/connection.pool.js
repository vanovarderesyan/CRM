const mysql2 = require('mysql2');
const connectionPool = Symbol('Connection pool');

class ConnectionPool {
    constructor() {
        this[connectionPool] = mysql2.createPool({
            host: 'localhost',
            user: 'root',
            port: "3306",
            password: "password",
            database: 'crm',
            connectionLimit: 10,
            waitForConnections: true,
            multipleStatements: true,
            dateStrings: true
        })

        // this[connectionPool] = mysql2.createPool({
        // 	host: 'localhost',
        // 	user: 'annaniks',
        // 	port: "3306",
        // 	password: "annaniks",
        // 	database: 'company',
        // 	connectionLimit: 10,
        // 	waitForConnections: true,
        // 	multipleStatements: true,
        // 	dateStrings: true
        // })
    }

    getPool() {
        return this[connectionPool];
    };

    // 	select pt.Name as ProjectTaskName,sp.Name as StatusName,fp.Name as FormatProjectName,d.Name as DepartamentName,p.*
    // from
    //     company.project p
    //         left join
    //     company.project_task pt
    //         on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
    //         left join 
    //     company.cyclical_project c
    //         on p.CyclicityId = c.Id
    //         left join
    // 	company.status_project sp
    // 		on p.SaleTypeId = sp.Id
    //                 left join 
    //     company.format_project fp
    //         on p.FormatId = fp.Id
    // 				left join 
    //     company.department d
    //         on p.DepartmentId = d.Id



}

module.exports = new ConnectionPool();