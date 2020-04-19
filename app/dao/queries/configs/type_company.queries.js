"use strict";

class TypeCompanyQueries {
	static get signUp() {
		return `INSERT INTO type_company (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE type_company SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from type_company where Id > 0`
	};

	static get getOne() {
		return `select * from type_company where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM type_company WHERE  Id = ?`
	}
}

module.exports = { TypeCompanyQueries };
