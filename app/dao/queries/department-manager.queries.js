"use strict";

class DepartmentManagereQueries {
	static get signUp() {
		return `INSERT INTO department_manager (\`Id\`, \`DepartmentId\`, \`ManagerId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from department_manager where Id > 0`
	};

	static get getOne() {
		return `select * from department_manager where \`Id\` =  ?`
	};

	static get deleteManagerByCompanyId() {
		return `DELETE u
		FROM manager m
		INNER JOIN user u ON m.UserId = u.Id
		inner join department_manager cm on cm.ManagerId = m.Id
		inner join filial_department fd on fd.DepartmentId = cm.DepartmentId
		inner join company_filial cf on cf.FilialId = fd.FilialId
		WHERE cf.CompanyId = ?`
	};
}

module.exports = { DepartmentManagereQueries };