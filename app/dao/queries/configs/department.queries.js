"use strict";

class DepartmentQueries {
	static get signUp() {
		return `INSERT INTO department (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE department SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from department where Id > 0`
	};

	static get getAllDepartmentId() {
		return `SELECT DepartmentId FROM company.company_department
		union
		select DepartmentId from company.filial_department`
	};

	static getAllByQuery(query) {
		return `SELECT * FROM company.department where Id not in(${query})`
	};

	static get getOne() {
		return `select * from department where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM department WHERE  Id = ?`
	}
}

module.exports = { DepartmentQueries };
