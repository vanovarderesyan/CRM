"use strict";

class FilialDepartmenteQueries {
	static get signUp() {
		return `INSERT INTO filial_department (\`Id\`, \`DepartmentId\`, \`FilialId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from filial_department where Id > 0`
	};

	static get getOne() {
		return `select * from filial_department where \`Id\` =  ?`
	};

	static get getDepartmentByFilialId() {
		return `SELECT f.*
		FROM 
		company.filial_department com 
			inner join
		company.department f
			on com.DepartmentId = f.Id
		where com.FilialId = ?`
	};
}

module.exports = { FilialDepartmenteQueries };