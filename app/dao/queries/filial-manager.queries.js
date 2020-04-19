"use strict";

class FilialManagereQueries {
	static get signUp() {
		return `INSERT INTO filial_manager (\`Id\`, \`FilialId\`, \`ManagerId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from filial_manager where Id > 0`
	};

	static get getOne() {
		return `select * from filial_manager where \`Id\` =  ?`
	};
}

module.exports = { FilialManagereQueries };