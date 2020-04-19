"use strict";

class CompanyDepartmenteQueries {
	static get signUp() {
		return `INSERT INTO company_department (\`Id\`, \`CompanyId\`, \`DepartmentId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from company_department where Id > 0`
	};

	static get getOne() {
		return `select * from company_department where \`Id\` =  ?`
	};
}

module.exports = { CompanyDepartmenteQueries };